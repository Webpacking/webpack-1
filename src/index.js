import { TEST, hash, chunks } from './app/module1.js';

const output =
`
  ${TEST}
  ${chunks}
  ${hash}
`
document.write(output);
