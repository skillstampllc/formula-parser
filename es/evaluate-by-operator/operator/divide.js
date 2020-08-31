import { toNumber } from './../../helper/number';
import { ERROR_DIV_ZERO, ERROR_VALUE } from './../../error';
import Decimal from 'decimal.js';

export var SYMBOL = '/';

export default function func(first) {
  try {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var result = rest.reduce(function (acc, value) {
      var tempValue = new Decimal(acc).div(new Decimal(toNumber(value))).toNumber();
      if (tempValue === Infinity || tempValue === -Infinity) {
        throw Error(ERROR_DIV_ZERO);
      }

      return tempValue;
    }, toNumber(first));

    if (isNaN(result)) {
      throw Error(ERROR_VALUE);
    }

    return result;
  } catch (error) {
    if (error.message === ERROR_DIV_ZERO) {
      throw Error(ERROR_DIV_ZERO);
    }

    throw Error(ERROR_VALUE);
  }
}

func.SYMBOL = SYMBOL;