"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandSenderHTTP = exports.ConnectionHTTP = exports.Connection = exports.ConnectionTCP = void 0;
//
const connection_tcp_1 = __importDefault(require("./modules/connection-tcp"));
const connection_http_1 = __importDefault(require("./modules/connection-http"));
const command_sender_http_1 = __importDefault(require("./modules/command-sender-http"));
// Alias
const Connection = connection_tcp_1.default;
__exportStar(require("./types/api-command"), exports);
exports.default = {
    Connection,
    ConnectionTCP: // Alias for ConnectionTCP
    connection_tcp_1.default,
    // Legacy classes: 
    // HTTP connection and command-sender
    CommandSenderHTTP: command_sender_http_1.default,
    ConnectionHTTP: connection_http_1.default,
};
// Also expose modules as separate modules to be imported
var connection_tcp_2 = require("./modules/connection-tcp");
Object.defineProperty(exports, "ConnectionTCP", { enumerable: true, get: function () { return connection_tcp_2.ConnectionTCP; } });
Object.defineProperty(exports, "Connection", { enumerable: true, get: function () { return connection_tcp_2.ConnectionTCP; } });
var connection_http_2 = require("./modules/connection-http");
Object.defineProperty(exports, "ConnectionHTTP", { enumerable: true, get: function () { return connection_http_2.ConnectionHTTP; } });
var command_sender_http_2 = require("./modules/command-sender-http");
Object.defineProperty(exports, "CommandSenderHTTP", { enumerable: true, get: function () { return command_sender_http_2.CommandSenderHTTP; } });
//# sourceMappingURL=index.js.map