const { addElement } = require('../AddElement');
const { Fact: lut } = require('../../../lookup-tables');
const { factObj } = require('./../types/Fact');

const generateFact = (classData, payload) => {
  const obj = { '@type': classData };

  Object.keys(payload).forEach((k) => {
    if (lut[k] !== undefined) addElement(factObj, obj, lut[k], payload[k], k);
    else if (k === 'extra') addElement(factObj, obj, undefined, payload[k], k);
  });

  return obj;
};

module.exports = { generateFact };
