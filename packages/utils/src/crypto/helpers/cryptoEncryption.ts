import * as crypto from 'crypto'
import { encryptAesKey } from './encryptAesKey';
import { Buffer } from 'buffer';

/**
 * Encrypts a payload using AES key and returns encrypted data and key.
 * @param {any} payload - The payload to be encrypted.
 * @param {Buffer} aesKey - The AES key used for encryption.
 * @param {string} publicKey - The public key used for encryption of the AES key.
 * @returns {{data: Buffer, key: Buffer}} The encrypted data and key.
 */
export const cryptoEncryption = (
    payload: any, //eslint-disable-line
    aesKey: Buffer,
    publicKey: string
) => {
    try {
        const iv = crypto.randomBytes(16);

        const cipher = crypto.createCipheriv("aes-256-gcm", aesKey, iv);
        const encrypted = Buffer.concat([
            cipher.update(JSON.stringify(payload)),
            cipher.final(),
            cipher.getAuthTag(),
        ]);

        return {
            data: encrypted,
            key: Buffer.concat([iv, encryptAesKey(aesKey, publicKey)]),
        };
    } catch (err) {
        console.log(err);
        return err;
    }
};