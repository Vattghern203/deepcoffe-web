import { Dispatch } from "react";

export default function ServerError(data: Record<string, unknown>, setError: Dispatch<Error>) {
  if ("error" in data) {
    const { error } = data;
    setError(new Error((error as Record<string, string>).message));
  }
}