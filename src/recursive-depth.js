const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;

    if (!Array.isArray(arr)) {
      return 1;
    } else {
      arr.forEach(item => {
        if(Array.isArray(item)) {

          let depth = this.calculateDepth(item) + 1;

          if (maxDepth < depth) maxDepth = depth;
        }
      });
    }
    return maxDepth;
  }
};