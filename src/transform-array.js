const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) throw new Error('');

  let mas = [];
  let controlSequences = {
    '--discard-next': 0,
    '--discard-prev': 1,
    '--double-next': 2,
    '--double-prev': 3,
  }

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] in controlSequences) {

      if (controlSequences[arr[i]] % 2 && i == 0 ||
      !(controlSequences[arr[i]] % 2) && i == arr.length - 1) continue;

      if (controlSequences[arr[i]] == 0) {
        controlSequences[arr[i + 2]] % 2 ? i += 2 : i++;
      } else if (controlSequences[arr[i]] == 1) {
        mas.pop();
      } else if (controlSequences[arr[i]] == 2) {
        mas.push(arr[i + 1]);
      } else if (controlSequences[arr[i]] == 3) {
        mas.push(mas[mas.length - 1]);
      }

    } else {
      mas.push(arr[i]);
    }

  }

  return mas;
}
