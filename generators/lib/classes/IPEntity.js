const { addElement } = require('../AddElement');
const { IPEntity: lut } = require('../../../lookup-tables');
const { ipentityObj } = require('./../types/IPEntity');

const generateIPEntity = (classData, payload) => {
  const obj = { '@type': classData };

  Object.keys(payload).forEach((k) => {
    if (lut[k] !== undefined)
      addElement(ipentityObj, obj, lut[k], payload[k], k);
    else if (k === 'extra')
      addElement(ipentityObj, obj, undefined, payload[k], k);
  });

  return obj;
};

module.exports = { generateIPEntity };
