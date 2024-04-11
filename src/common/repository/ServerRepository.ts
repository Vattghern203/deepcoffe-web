import HttpMethods from "./HttpMethods";
import IServerRepository from "./IServerRepository";
import { IServerResponseSuccess } from "./IServerResponseDTO";
import ServerConfiguration from "./ServerHeaders";

export class ServerRepository implements IServerRepository {
    private _jwt?: string;

    private serverConfiguration = ServerConfiguration;

    constructor(private readonly _serverUrl: string) { }

    private setServerHeaders(headers: RequestInit["headers"]) {
        this.serverConfiguration = {
            ...this.serverConfiguration,
            headers: {
                ...this.serverConfiguration.headers,
                ...headers,
            }
        };
    }

    private checkPayloadSize(data: string): void {
        const payloadSizeInBytes = new Blob([data]).size;

        const payloadSizeInMB = payloadSizeInBytes / (1024 * 1024);

        if (payloadSizeInMB > 18) {
            throw new Error(
                'Dados muito grande, precisa ser menos 18 mb'
            )
        }
    }

    private async request<R>(url: string, method: HttpMethods, data?: string): Promise<IServerResponseSuccess<R>> {
        const response = await fetch(url, {
            ...this.serverConfiguration,
            method: method,
            ...(data && { body: data })
        });

        const responseParsed = await response.json();

        return responseParsed
    }

    public setToken(token: string): void {
        this._jwt = token
    }

    public async get<R>(path: string, auth = true): Promise<IServerResponseSuccess<R>> {
        const url = `${this._serverUrl}/${path}`;

        if (auth) {
            this.setServerHeaders({
                authorization: `Bearer ${this._jwt}`
            });

            return await this.request(url, HttpMethods.GET);
        }
        return await this.request(url, HttpMethods.GET);
    }

    public async post<R, T>(path: string, payload?: T, auth = true): Promise<IServerResponseSuccess<R>> {
        const url = `${this._serverUrl}/${path}`;
        const data = JSON.stringify(payload);

        this.checkPayloadSize(data);
        if (auth) {
            this.setServerHeaders({
                authorization: `Bearer ${this._jwt}`
            });

            return await this.request(url, HttpMethods.POST, data);
        }

        return await this.request(url, HttpMethods.POST, data);
    }


    public async patch<R, T>(path: string, payload?: T, auth = true): Promise<IServerResponseSuccess<R>> {
        const url = `${this._serverUrl}/${path}`;
        const data = JSON.stringify(payload);

        this.checkPayloadSize(data);
        if (auth) {
            this.setServerHeaders({
                authorization: `Bearer ${this._jwt}`
            });

            return await this.request(url, HttpMethods.PATCH, data);
        }

        return await this.request(url, HttpMethods.PATCH, data);
    }

    public async delete(path: string, auth = true): Promise<void> {
        const url = `${this._serverUrl}/${path}`;

        if (auth) {
            this.setServerHeaders({
                authorization: `Bearer ${this._jwt}`
            });

            await this.request(url, HttpMethods.DELETE);
        }
        await this.request(url, HttpMethods.DELETE);
    }
}

const serverRepository = new ServerRepository('https://deepcoffe.com/api');

export default serverRepository;