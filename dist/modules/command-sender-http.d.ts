import ConnectionHTTP from './connection-http';
import { vMixApiFunctionCommand } from '../types/api-command';
export declare class CommandSenderHTTP {
    protected onError: Function;
    protected onSuccess: Function;
    protected _connection: ConnectionHTTP;
    constructor(connection: ConnectionHTTP, onSuccess: Function, onError: Function);
    protected preparePromise(commands: vMixApiFunctionCommand[]): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Set the vMix connection used to know the endpoint for the vMix instance
     * @param {Connection} connection
     */
    setConnection(connection: ConnectionHTTP): void;
    send(commands: vMixApiFunctionCommand[], onSuccess: Function, onError: Function): Promise<import("axios").AxiosResponse<any, any>>;
}
export default CommandSenderHTTP;
//# sourceMappingURL=command-sender-http.d.ts.map