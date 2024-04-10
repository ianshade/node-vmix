"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionHTTP = void 0;
const axios_1 = __importDefault(require("axios"));
// Exceptions
const api_url_error_1 = __importDefault(require("../exceptions/api-url-error"));
/**
 * Connection for vMix API via HTTP
 *
 * vMix HTTP Web API
 *
 * https://www.vmix.com/help24/DeveloperAPI.html
 */
class ConnectionHTTP {
    constructor(host = 'localhost', port = 8088) {
        // Validate host and port
        if (!host || host.length < 3) {
            throw new api_url_error_1.default('Invalid host provided');
        }
        if (!port || port < 80 || port > 99999) {
            throw new api_url_error_1.default('Invalid port provided');
        }
        // Set params
        this.host = host;
        this.port = port;
    }
    // Public functions
    webcontrollerUrl() {
        return `http://${this.host}:${this.port}`;
    }
    apiUrl() {
        return `${this.webcontrollerUrl()}/api`;
    }
    testConnection() {
        return axios_1.default.get(this.webcontrollerUrl(), { timeout: 500 });
    }
}
exports.ConnectionHTTP = ConnectionHTTP;
exports.default = ConnectionHTTP;
//# sourceMappingURL=connection-http.js.map