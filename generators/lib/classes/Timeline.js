const { addElement } = require('../AddElement');
const { Timeline: lut } = require('../../../lookup-tables');
const { timelineObj } = require('./../types/Track');

const generateTimeline = (classData, payload) => {
  const obj = { '@type': classData };

  Object.keys(payload).forEach((k) => {
    if (lut[k] !== undefined)
      addElement(timelineObj, obj, lut[k], payload[k], k);
    else if (k === 'extra')
      addElement(timelineObj, obj, undefined, payload[k], k);
  });

  return obj;
};

module.exports = { generateTimeline };
