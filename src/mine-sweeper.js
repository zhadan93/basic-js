const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((subArr, rowIndex) => subArr.map((element, columnIndex) => {
    if (element) {
      return 1;
    } else {
      let mineNumber = 0;

      if(matrix[rowIndex - 1] && matrix[rowIndex - 1][columnIndex - 1]) mineNumber++;
      if(matrix[rowIndex - 1] && matrix[rowIndex - 1][columnIndex]) mineNumber++;
      if(matrix[rowIndex - 1] && matrix[rowIndex - 1][columnIndex + 1]) mineNumber++;

      if(matrix[rowIndex][columnIndex - 1]) mineNumber++;
      if(matrix[rowIndex][columnIndex + 1]) mineNumber++;

      if(matrix[rowIndex + 1] && matrix[rowIndex + 1][columnIndex - 1]) mineNumber++;
      if(matrix[rowIndex + 1] && matrix[rowIndex + 1][columnIndex]) mineNumber++;
      if(matrix[rowIndex + 1] && matrix[rowIndex + 1][columnIndex + 1]) mineNumber++;

      return mineNumber;
    }
  }));
}

module.exports = {
  minesweeper
};
