import { toNumber } from "./../../helper/number.mjs";
import { ERROR_VALUE } from "./../../error.mjs";
import Decimal from 'decimal.js';
export var SYMBOL = '*';
export default function func(first) {
  try {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var result = rest.reduce(function (acc, value) {
      return new Decimal(acc).mul(new Decimal(value)).toNumber();
    }, toNumber(first));

    if (isNaN(result)) {
      throw Error(ERROR_VALUE);
    }

    return result;
  } catch (error) {
    throw Error(ERROR_VALUE);
  }
}
func.SYMBOL = SYMBOL;