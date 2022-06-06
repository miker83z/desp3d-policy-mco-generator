const { addElement } = require('../AddElement');
const { TextClause: lut } = require('../../../lookup-tables');
const { textObj } = require('./../types/TextClause');

const generateTextClause = (classData, payload) => {
  const obj = { '@type': classData };

  Object.keys(payload).forEach((k) => {
    if (lut[k] !== undefined) addElement(textObj, obj, lut[k], payload[k], k);
    else if (k === 'extra') addElement(textObj, obj, undefined, payload[k], k);
  });

  return obj;
};

module.exports = { generateTextClause };
