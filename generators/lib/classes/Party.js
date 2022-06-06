const { addElement } = require('../AddElement');
const { Party: lut } = require('../../../lookup-tables');
const { partyObj } = require('./../types/Party');

const generateParty = (classData, payload) => {
  const obj = { '@type': classData };

  Object.keys(payload).forEach((k) => {
    if (lut[k] !== undefined) addElement(partyObj, obj, lut[k], payload[k], k);
    else if (k === 'extra') addElement(partyObj, obj, undefined, payload[k], k);
  });

  return obj;
};

module.exports = { generateParty };
