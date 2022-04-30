const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const masPosition = new Set();

  matrix.forEach((subArr, indexSubArr, arr) => {
    if (indexSubArr === 0) {
      sum += subArr.reduce((prev, current) => prev + current);
    } else {
      subArr.forEach((item, indexElement) => {
        if (item !== 0 && arr[indexSubArr - 1][indexElement]) sum += item;
      })
    }        
  });

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
