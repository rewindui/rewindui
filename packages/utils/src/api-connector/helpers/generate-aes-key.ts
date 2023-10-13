import * as crypto from 'crypto';

/**
 * Generates a random AES key.
 * @returns {Buffer} The generated AES key.
 */
export const generateAesKey = () => {
    return crypto.randomBytes(32);
};
