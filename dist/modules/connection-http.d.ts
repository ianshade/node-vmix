/**
 * Connection for vMix API via HTTP
 *
 * vMix HTTP Web API
 *
 * https://www.vmix.com/help24/DeveloperAPI.html
 */
export declare class ConnectionHTTP {
    protected host: string;
    protected port: number;
    constructor(host?: string, port?: number);
    webcontrollerUrl(): string;
    apiUrl(): string;
    testConnection(): Promise<import("axios").AxiosResponse<any, any>>;
}
export default ConnectionHTTP;
//# sourceMappingURL=connection-http.d.ts.map