/// <reference types="node" />
import { Socket } from 'net';
import { vMixApiFunctionCommand } from '../types/api-command';
/**
 * vMix Connection via TCP
 *
 */
export declare class ConnectionTCP {
    protected _host: string;
    protected _port: number;
    private _unprocessedLines;
    private _lineFragment;
    /**
     * Node TCP socket client to vMix instance
     */
    protected _socket: Socket;
    /**
     * All listeners
     */
    protected _listeners: {
        [key: string]: Function[];
    };
    protected _autoReconnect: boolean;
    protected _isRetrying: boolean;
    protected _reconnectionIntervalTimeout: number;
    protected _reconnectionInterval: NodeJS.Timeout | null;
    /**
     * Connection state
     */
    protected _isConnected: boolean;
    /**
     * Emit vMix messages to listeners registered for data
     * as a fallback solution if no listener is registered
     * in the specific custom-listener-type
     *
     * Enabled by default
     */
    protected _useDataListenersAsFallback: boolean;
    protected _debug: boolean;
    /**
     * Print debug messages regarding buffer
     *
     * Disabled by default
     */
    protected _debugBuffer: boolean;
    /**
     * Constructor of ConnectionTCP
     *
     * The socket automatically attempts to connect by default
     * unless the option 'disableAutoConnectOnInit' is set to true
     *
     * @param {string} host
     * @param {object} optionss
     */
    constructor(host?: string, options?: {
        autoReconnect?: boolean;
        debug?: boolean;
        debugBuffers?: boolean;
        disableAutoConnectOnInit?: boolean;
        onDataCallback?: Function;
        port?: number;
        useDataListenersAsFallback?: boolean;
    });
    /**
     * Set host
     *
     * @param {string} host
     */
    protected _setHost: (host: string) => void;
    /**
     * Set port
     *
     * @param {number} port
     */
    protected _setPort: (port: number) => void;
    protected _processChunk: (data: string) => void;
    /**
     * Process the lines of received data that are complete
     */
    protected _processLines: () => void;
    protected _processNonXMLmessage(messageType: string, messageStatus: string, firstMessage: string): void;
    /**
     * Process buffer XML message
     *
     * @param firstMessage
     * @param firstMessageLength
     * @param firstMessageParts
     */
    protected _processXMLmessage(firstMessage: string, firstMessageParts: string[]): void;
    /**
     * Emit generic data message
     */
    protected _emitMessage: (message: string) => void;
    /**
     * Emit Activators message
     */
    protected emitActivatorsMessage: (message: string) => void;
    /**
     * Emit Tally message
     */
    protected _emitTallyMessage: (message: string) => void;
    /**
     * Emit Version message
     */
    protected _emitVersionMessage: (message: string) => void;
    /**
     * Emit XML message
     */
    protected emitXmlMessage: (message: string) => void;
    /**
     * Convert a function command object to the string to execute
     *
     * @param {vMixApiFunctionCommand} command
     * @returns {string}
     */
    protected functionCommandObjectToString: (command: vMixApiFunctionCommand) => string;
    /**
     * Stringify commands
     * (if necessary)
     *
     * @param {vMixApiFunctionCommand|string} command
     * @returns {string}
     */
    protected stringifyCommand: (command: vMixApiFunctionCommand | string) => string;
    protected ensureMessageEnding: (message: string) => string;
    /**
     * Send message to connection
     *
     * This must be a string of the complete command to execute
     *
     * The available commands are listed under:
     * https://www.vmix.com/help23/TCPAPI.html
     * See "Commands section"
     *
     * @param {String} message
     * @returns {Promise}
     */
    protected _sendMessageToSocket: (message: string) => Promise<void>;
    /**
     * Connect
     *
     * Attempt to establish connection to socket of vMix instance
     */
    connect(host?: string, port?: number): void;
    /**
     * Send one or more messages to socket connection
     *
     * Messages are requests or command(s) to perform functions to the API
     *
     * This must be a string or object,
     * or a array of strings or objects (or a mix of object or strings)
     *
     * The available commands are listed under:
     * https://www.vmix.com/help24/TCPAPI.html
     * See "Commands section"
     *
     * @param {string|string[]|vMixApiFunctionCommand|vMixApiFunctionCommand[]} commands
     *
     */
    send(command: string | string[] | vMixApiFunctionCommand | vMixApiFunctionCommand[]): Promise<void>;
    /**
     * Register listener on a specific event type
     *
     * @param {string} type
     * @param {Function} callback
     */
    on(type: string, callback: Function): void;
    /**
     * Unregister listeners of specific event-type and with a specific callback function-signature
     *
     * @param {string?} listenerType
     * @param {Function?} callbackSignature
     */
    off(listenerType: string, callbackSignature: Function): void;
    /**
     * Unregister all listeners
     */
    clearAllListeners: () => void;
    /**
     * Ask to Shutdown and destroy the TCP socket
     */
    shutdown(): void;
    /**
     * Get "raw" TCP socket
     *
     * @returns Socket | null
     */
    socket(): Socket;
    /**
     * Is currently connected?
     */
    connected(): boolean;
    /**
     * Is currently connecting?
     */
    connecting(): boolean;
}
export default ConnectionTCP;
//# sourceMappingURL=connection-tcp.d.ts.map