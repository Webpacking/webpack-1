// NOTE: These are just random imports for demostration purposes
import createHash from 'sha.js';
import _, { chunk } from 'lodash';

const sha256 = createHash('sha256');

export const hash = sha256.update('abc', 'utf8').digest('hex');
export const chunks = chunk(['1', '2', '3', '4']);
export const TEST = 'Testing 1..2..3!!!';
