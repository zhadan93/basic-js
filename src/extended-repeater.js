const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'}) {
  let res = [];
  let substring = [];

  if (typeof str != 'string') str = String(str);
  if (typeof addition != 'string') addition = String(addition);

  for (let i = 0; i < repeatTimes; i++) {
    for (let j = 0; j < additionRepeatTimes; j++) {
      substring.push(addition);
    }
    substring = substring ? str + substring.join(additionSeparator) : str;
    res.push(substring);
    substring = [];
  }
  return res.join(separator);
};

