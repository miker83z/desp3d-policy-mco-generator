const { addElement } = require('../AddElement');
const { Contract: lut } = require('../../../lookup-tables');
const { contractObj } = require('../types/Contract');

const generateContract = (classData, payload) => {
  const obj = { '@type': classData };

  Object.keys(payload).forEach((k) => {
    if (lut[k] !== undefined)
      addElement(contractObj, obj, lut[k], payload[k], k);
    else if (k === 'contractRelations') {
      Object.keys(payload[k]).forEach((rk) => {
        payload[k][lut[rk]] = payload[k][rk];
        delete payload[k][rk];
      });
      addElement(contractObj, obj, undefined, payload[k], k);
    } else if (k === 'extra')
      addElement(contractObj, obj, undefined, payload[k], k);
  });

  return obj;
};

module.exports = { generateContract };
