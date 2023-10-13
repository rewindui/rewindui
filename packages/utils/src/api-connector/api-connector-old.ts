import axios from 'axios';
import { generateAesKey } from './helpers/generate-aes-key';
import { encryptPayload } from './helpers/encrypt-payload';
import { decryptPayload } from './helpers/decrypt-payload';
import { HeadersType } from '@idb-dab/ui-models';

/**
 * Makes an HTTP request with encrypted request body with provided configurations.
 * @param {Object} requestProps - The properties of the request.
 * @param {string} requestProps.url - The URL of the service to make the request to.
 * @param {any} requestProps.requestBody - The request body.
 * @param {string} requestProps.method - The HTTP method ('POST' or 'GET').
 * @param {string} requestProps.headers - headers of type HeadersType from @idb-dab/ui-models
 * @param {string} requestProps.uuid - session UUID
 * @param {boolean} requestProps.encryption - true if requestBody needs to be encrypted, else false.
 * @returns {Promise<any>} A promise that resolves to the response.
 */
export default async function apiConnectorOld(requestProps: {
    url: string;
    requestBody: any; //eslint-disable-line
    method: 'POST' | 'GET';
    headers: HeadersType;
    uuid: string;
    encryption?: boolean;
}) {
    if (requestProps.encryption === true) {
        // generate random aesKey used for encryption
        const aesKey = generateAesKey();

        // get publicKey associated with given uuid from crypto api service
        const publicKey = await (
            await axios.post(
                `${
                    process.env.CRYPTO_BASE_URL ||
                    'https://api-gateway.digital.idb-digitallabs.com/crypto'
                }/${
                    process.env.CRYPTO_SERVICE_URL ||
                    'api/crypto/v1/keys/rsa/generate'
                }`,
                { uuid: requestProps.uuid }
            )
        ).data.data.publicKey;

        // generate cipher text based on requestBody
        const encryptedData = await encryptPayload(
            requestProps.requestBody,
            aesKey,
            publicKey,
            requestProps.uuid
        );

        // make the HTTP request to the given endpoint
        const encryptedResponse = await axios({
            method: requestProps.method.toLowerCase(),
            url: `${requestProps.url}`,
            data: JSON.stringify({ data: encryptedData }),
            headers: requestProps.headers,
        });

        // decrypt response recieved from the endpoint
        const decryptedResponse = await decryptPayload(
            encryptedResponse.data.data,
            aesKey,
            aesKey.slice(0, 16) //eslint-disable-line
        );

        return decryptedResponse;
    } else {
        return await axios({
            method: requestProps.method.toLowerCase(),
            url: requestProps.url,
            headers: requestProps.headers,
            data: requestProps.requestBody,
        });
    }
}
