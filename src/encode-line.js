const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const encodeLine = [];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      if (count) encodeLine.push(count + 1);
      
      encodeLine.push(str[i]);
      count = 0;
    }
  }
  return encodeLine.join('');
}

module.exports = {
  encodeLine
};
