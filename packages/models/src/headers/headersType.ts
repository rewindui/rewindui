export type HeadersType = {
    'content-Type'?: string; //eslint-disable-line
    'request-id': string;
    'channel-id': 'MB'|'IB';
    'correlation-id': string;
    'session-id': string;
    'app-version': string;
    'screen-id': string;
    'login-id': string;
    'host-ip': string;
    'location': string;
    'timezone': string;
};
