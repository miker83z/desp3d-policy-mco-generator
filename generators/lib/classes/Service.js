const { addElement } = require('../AddElement');
const { Service: lut } = require('../../../lookup-tables');
const { serviceObj } = require('./../types/Service');

const generateService = (classData, payload) => {
  const obj = { '@type': classData };

  Object.keys(payload).forEach((k) => {
    if (lut[k] !== undefined)
      addElement(serviceObj, obj, lut[k], payload[k], k);
    else if (k === 'extra')
      addElement(serviceObj, obj, undefined, payload[k], k);
  });

  return obj;
};

module.exports = { generateService };
