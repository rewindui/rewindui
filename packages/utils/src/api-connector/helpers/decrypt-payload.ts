import * as crypto from 'crypto';
import { Buffer } from 'buffer';

/**
 * Decrypts encrypted data using AES key and IV.
 * @param {any} encryptedData - The encrypted data to be decrypted.
 * @param {Buffer} aesKey - The AES key used for decryption.
 * @param {Buffer} iv - The initialization vector (IV) used for decryption.
 * @returns {any} The decrypted data.
 */
export const decryptPayload = (
    encryptedData: any, //eslint-disable-line
    aesKey: Buffer,
    iv: Buffer
) => {
    try {
        const encryptedDataBuffer = Buffer.from(encryptedData, 'base64');
        const decipher = crypto.createDecipheriv('aes-256-gcm', aesKey, iv);
        const authTag = encryptedDataBuffer.subarray(
            encryptedDataBuffer.length - 16
        );
        const encrypted = encryptedDataBuffer.subarray(
            0,
            encryptedDataBuffer.length - 16
        );

        decipher.setAuthTag(authTag);

        const decryptedText = Buffer.concat([
            decipher.update(encrypted),
            decipher.final(),
        ]);

        return decryptedText.toString()
            ? JSON.parse(decryptedText.toString())
            : decryptedText.toString();
    } catch (err) {
        console.log(err);
        return err;
    }
};
