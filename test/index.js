const { getMCOFromContract } = require('..');
const mediaContractualObjects = require('./example2');

const main = async () =>
  console.log(await getMCOFromContract(mediaContractualObjects));

main();
