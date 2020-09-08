/**
 * Convert value into number.
 *
 * @param {String|Number} number
 * @returns {*}
 */
export function toNumber(number) {
  let result;

  if (typeof number === 'boolean') {
    result = number ? 1 : 0;
  } else if (typeof number === 'number') {
    result = number;
  } else if (typeof number === 'string') {
    if (number.toLowerCase() === 'true') {
      result = 1;
    } else if (number.toLowerCase() === 'false') {
      result = 0;
    } else if (number.trim() === '') {
      result = 0;
    } else {
      result =
        number.indexOf('.') > -1 ? parseFloat(number) : parseInt(number, 10);
    }
  } else if (number === null || number === undefined) {
    result = 0;
  }

  return result;
}

/**
 * Invert provided number.
 *
 * @param {Number} number
 * @returns {Number} Returns inverted number.
 */
export function invertNumber(number) {
  return -1 * toNumber(number);
}
