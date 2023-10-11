import axios from 'axios';
import { Buffer } from 'buffer';
import { generateAesKey } from '../crypto/helpers/generateAesKey';
import { encryptPayload } from '../crypto/encryptPayload';
import { decryptPayload } from '../crypto/decryptPayload';
import { HeadersType } from '@idb-dab/ui-models';

/**
 * Makes an HTTP request to the provided service URL.
 * @param {Object} requestProps - The properties of the request.
 * @param {string} requestProps.url - The URL of the service to make the request to.
 * @param {any} requestProps.requestBody - The request body.
 * @param {string} requestProps.method - The HTTP method ('POST' or 'GET').
 * @param {string} requestProps.headers - headers of type HeadersType from @idb-dab/ui-models
 * @param {boolean} requestProps.encryption - true if requestBody needs to be encrypted, else false.
 * @returns {Promise<any>} A promise that resolves to the response.
 */
export default async function apiConnector(requestProps: {
  url: string;
  requestBody: any; //eslint-disable-line
  method: 'POST' | 'GET';
  headers: HeadersType;
  encryption: boolean;
}) {
  if (requestProps.encryption) {
    // generate random aesKey, used to generate cipher text
    const aesKey = generateAesKey();

    // get publicKey and uuid from crypto service
    const cryptoResponse = await axios
      .get(
        `${process.env.CRYPTO_BASE_URL ||
        process.env.NEXT_PUBLIC_CRYPTO_BASE_URL ||
        'https://api-gateway.digital.idb-digitallabs.com/crypto'
        }/${process.env.CRYPTO_SERVICE_URL || process.env.NEXT_PUBLIC_CRYPTO_SERVICE_URL || 'api/crypto/v1/keys/get'}`
      )
      .then((res) =>
        JSON.parse(Buffer.from(res.data, 'base64').toString())
      )
      .catch((err) => {
        throw err;
      });
    const sessionUUID = structuredClone(cryptoResponse.uuid);
    const publicKey = structuredClone(cryptoResponse.publicKey);

    // generating cipher text using aesKey, publicKey and sessionUUID
    const encryptedData = await encryptPayload(
      requestProps.requestBody,
      aesKey,
      publicKey,
      sessionUUID
    );

    // making request to the endpoint with encrypted requestBody
    const encryptedResponse = await axios({
      method: requestProps.method.toLowerCase(),
      url: `${requestProps.url}`,
      data: JSON.stringify({ data: encryptedData }),
      headers: requestProps.headers,
    });

    // decrypting response sent by the api
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
