const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string' || !isFinite(sampleActivity) 
    || sampleActivity <= 0 || sampleActivity > 15) return false;

  // t = ln(N0 / N) / k, where (t - age; N0 - MODERN_ACTIVITY, N - activity of the isotope in the sample)
  // k = 0.693 / t1/2, where (t1/2 - half-life), ln 2 = 0.693
  // Math.log() = ln x 
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / 0.693 * HALF_LIFE_PERIOD);
}

module.exports = {
  dateSample
};
