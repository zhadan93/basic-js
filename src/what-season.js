const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  try {
    date.getTime();
  } catch (err) {
    throw new Error(err);
  }

  let timeOfYear;

  switch (date.getMonth()) {
    case 2:
    case 3:
    case 4:
      timeOfYear = 'spring';
      break;
    case 5:
    case 6:
    case 7:
      timeOfYear = 'summer';
      break;
    case 8:
    case 9:
    case 10:
      timeOfYear = 'autumn';
      break;
    case 11:
    case 0:
    case 1:
      timeOfYear = 'winter';
      break;
  }
  return timeOfYear;
};
