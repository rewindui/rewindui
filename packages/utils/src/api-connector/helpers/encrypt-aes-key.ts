import * as crypto from 'crypto';
import { Buffer } from 'buffer';

/**
 * Encrypts an AES key using a public key.
 * @param {Buffer} aesKey - The AES key to encrypt.
 * @param {string} publicKey - The public key used for encryption.
 * @returns {Buffer} The encrypted AES key.
 */
export function encryptAesKey(aesKey: Buffer, publicKey: string) {
    const encryptedAesKey = crypto.publicEncrypt(
        Buffer.from(publicKey),
        aesKey
    );
    return encryptedAesKey;
}
