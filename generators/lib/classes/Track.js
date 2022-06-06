const { addElement } = require('../AddElement');
const { Track: lut } = require('../../../lookup-tables');
const { trackObj } = require('./../types/Track');

const generateTrack = (classData, payload) => {
  const obj = { '@type': classData };

  Object.keys(payload).forEach((k) => {
    if (lut[k] !== undefined) addElement(trackObj, obj, lut[k], payload[k], k);
    else if (k === 'extra') addElement(trackObj, obj, undefined, payload[k], k);
  });

  return obj;
};

module.exports = { generateTrack };
