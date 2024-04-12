const ServerConfiguration: RequestInit = {
  keepalive: true,
  headers: {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/json",
  },
};

export default ServerConfiguration;