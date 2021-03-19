const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let masCats = [];

  backyard.forEach(item => masCats.push(...item.filter(index => index == "^^")));

  return masCats.length;
};

