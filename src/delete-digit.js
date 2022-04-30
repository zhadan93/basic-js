const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = String(n).split('');

  for (let i = 0; i < n.length; i++) {
    if (n[i + 1] === undefined || n[i] < n[i + 1]) {
      n[i] = '';
      return +n.join('');
    }
  }
}

module.exports = {
  deleteDigit
};
