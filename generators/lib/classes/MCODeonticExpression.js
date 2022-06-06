const { addElement } = require('../AddElement');
const { MCODeonticExpression: lut } = require('../../../lookup-tables');
const { mcoDeonticExpressionObj } = require('./../types/MCODeonticExpression');

const generateMCODeonticExpression = (classData, payload, actionType) => {
  const obj = { '@type': classData };

  Object.keys(payload).forEach((k) => {
    if (k === 'act') {
      let lutTemp;
      switch (actionType) {
        case 'Prohibition':
          lutTemp = 'mco-core:forbidsaction';
          break;
        case 'MCOPermission':
          lutTemp = 'mco-core:permitsaction';
          break;
        case 'Obligation':
          lutTemp = 'mco-core:obligatesaction';
          break;
        default:
          break;
      }
      addElement(mcoDeonticExpressionObj, obj, lutTemp, payload[k], k);
    } else if (lut[k] !== undefined)
      addElement(mcoDeonticExpressionObj, obj, lut[k], payload[k], k);
    else if (k === 'extra')
      addElement(mcoDeonticExpressionObj, obj, undefined, payload[k], k);
  });

  return obj;
};

module.exports = { generateMCODeonticExpression };
