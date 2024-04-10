"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandSenderHTTP = void 0;
const axios_1 = __importDefault(require("axios"));
const querystring_1 = __importDefault(require("querystring"));
//
class CommandSenderHTTP {
    constructor(connection, onSuccess, onError) {
        if (!connection) {
            throw new Error('No connection provided');
        }
        this.setConnection(connection);
        this.onError = onError;
        this.onSuccess = onSuccess;
    }
    // Prepare promise
    preparePromise(commands) {
        // If only one command were coded - send via get request
        if (!Array.isArray(commands)) {
            const command = commands;
            return axios_1.default.get(this._connection.apiUrl(), { params: command });
        }
        // If multiple commands - send via POST request
        // Manipulate commands for being sent in POST request
        const commandsMap = commands.map(command => {
            return querystring_1.default.stringify(command);
        });
        const data = {
            Function: 'ScriptStartDynamic',
            Value: commandsMap.join("\n\r")
        };
        const dataString = querystring_1.default.stringify(data);
        return axios_1.default.post(this._connection.apiUrl(), dataString);
    }
    /**
     * Set the vMix connection used to know the endpoint for the vMix instance
     * @param {Connection} connection
     */
    setConnection(connection) {
        this._connection = connection;
    }
    send(commands, onSuccess, onError) {
        const promise = this.preparePromise(commands);
        promise
            .then((response) => {
            this.onSuccess && this.onSuccess(response);
            onSuccess && onSuccess(response);
        })
            .catch((error) => {
            this.onError && this.onError(error);
            onError && onError(error);
        });
        return promise;
    }
}
exports.CommandSenderHTTP = CommandSenderHTTP;
exports.default = CommandSenderHTTP;
//# sourceMappingURL=command-sender-http.js.map