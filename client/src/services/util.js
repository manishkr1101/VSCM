import hasha from 'hasha';
import { v4 as uuidv4 } from 'uuid';

import Table from './db';

export function hash(inputArray) {
    return "0x" + hasha(inputArray.join('$'), {
        algorithm: 'sha256',
        encoding: 'hex'
    });
}
window.hash = hash; // TODO: remove
window.hasha = hasha; // TODO: remove

export function getSecretKey(publicKey) {
    const skTable = new Table('SECRET_KEYS');
    const secretKey = skTable.findById(publicKey);
    
    if(secretKey) return secretKey;
    else {
        const key = uuidv4();
        skTable.insert(publicKey, key);
        return key;
    }
}

export function random(low, high) {
    const diff = high - low + 1;
    return low + (Math.random() * 1000007)%diff;
}