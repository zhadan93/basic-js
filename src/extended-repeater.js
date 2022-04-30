const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;

  let repeatAddition = [];
  let result = [];

  if (typeof str !== 'string') str = String(str);
  if (typeof addition !== 'string') addition = String(addition);

  if(addition) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      repeatAddition.push(addition);
    }
   
    addition = repeatAddition.join(additionSeparator);
  }

  for (let i = 0; i < repeatTimes; i++) {
    result.push(str + addition);
  }
  
  return result.join(separator);
}

module.exports = {
  repeater
};
