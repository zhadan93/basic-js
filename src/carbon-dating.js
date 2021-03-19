const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != 'string' || !Number(sampleActivity)
  || sampleActivity <= 0 || sampleActivity > 15) return false;

  /*t = ln(N0 / N) / k (t - возраст)
  k = 0.693 / t (t - период полураспада), ln 2 = 0.693
  Math.log() = ln x */
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / 0.693 * HALF_LIFE_PERIOD);
};

