export { encryptPayload } from './api-connector/helpers/encrypt-payload';
export { decryptPayload } from './api-connector/helpers/decrypt-payload';
export { generateAesKey } from './api-connector/helpers/generate-aes-key';

import apiConnector from './api-connector/api-connector';
import apiConnectorOld from './api-connector/api-connector-old';

export { apiConnector, apiConnectorOld };
