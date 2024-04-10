import ConnectionTCP from './modules/connection-tcp';
import ConnectionHTTP from './modules/connection-http';
import CommandSenderHTTP from './modules/command-sender-http';
export * from './types/api-command';
declare const _default: {
    Connection: typeof ConnectionTCP;
    ConnectionTCP: typeof ConnectionTCP;
    CommandSenderHTTP: typeof CommandSenderHTTP;
    ConnectionHTTP: typeof ConnectionHTTP;
};
export default _default;
export { ConnectionTCP, ConnectionTCP as Connection } from './modules/connection-tcp';
export { ConnectionHTTP } from './modules/connection-http';
export { CommandSenderHTTP } from './modules/command-sender-http';
//# sourceMappingURL=index.d.ts.map