const { addElement } = require('../AddElement');
const { Interval: lut } = require('../../../lookup-tables');
const { intervalObj } = require('../types/Interval');

const generateInterval = (classData, payload) => {
  const obj = { '@type': classData };

  Object.keys(payload).forEach((k) => {
    if (lut[k] !== undefined)
      addElement(intervalObj, obj, lut[k], payload[k], k);
    else if (k === 'extra')
      addElement(intervalObj, obj, undefined, payload[k], k);
  });

  return obj;
};

module.exports = { generateInterval };
