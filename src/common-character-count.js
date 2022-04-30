const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length > s2.length) [s1, s2] = [s2, s1];

  s1 = s1.split('');
  s2 = s2.split('');

  let commonCharactersNumber = 0;

  s1.forEach(character => {
    const index = s2.indexOf(character);
    if (index !== -1) {
      commonCharactersNumber++;
      s2[index] = '';
    }
  });

  return commonCharactersNumber;
}

module.exports = {
  getCommonCharacterCount
};
