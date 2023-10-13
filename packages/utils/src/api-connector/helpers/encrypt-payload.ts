import { cryptoEncryption } from './crypto-encryption';
import { Buffer } from 'buffer';

/**
 * Encrypts a payload using AES key, public key, and UUID.
 * @param {any} payload - The payload to be encrypted.
 * @param {Buffer} aesKey - The AES key used for encryption.
 * @param {string} publicKey - The public key used for encryption of the AES key.
 * @param {string} uuid - The UUID used in the main payload.
 * @returns {string} The encrypted payload as a base64 string.
 */
export const encryptPayload = (
    payload: any, //eslint-disable-line
    aesKey: Buffer,
    publicKey: string,
    uuid: string
) => {
    try {
        // Encrypt the Payload using AES Key
        const encryptedPayload = Buffer.from(
            JSON.stringify(
                cryptoEncryption(JSON.stringify(payload), aesKey, publicKey)
            )
        );

        // Construct the main payload for Create Customer POST Call
        const mainPayload = {
            uuid: uuid,
            data: encryptedPayload,
        };

        // Convert the main payload to base64 string
        return Buffer.from(JSON.stringify(mainPayload)).toString('base64');
    } catch (err) {
        console.log(err);
        return err;
    }
};
