const { addElement } = require('../AddElement');
const { Action: lut } = require('../../../lookup-tables');
const { actionObj } = require('../types/Action');

const generateAction = (classData, payload) => {
  const obj = { '@type': classData };

  Object.keys(payload).forEach((k) => {
    if (lut[k] !== undefined) addElement(actionObj, obj, lut[k], payload[k], k);
    else if (k === 'extra')
      addElement(actionObj, obj, undefined, payload[k], k);
  });

  return obj;
};

module.exports = { generateAction };
