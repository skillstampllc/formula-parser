"use strict";

exports.__esModule = true;
exports["default"] = func;
exports.SYMBOL = void 0;

var _number = require("./../../helper/number");

var _error = require("./../../error");

var _decimal = _interopRequireDefault(require("decimal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SYMBOL = '*';
exports.SYMBOL = SYMBOL;

function func(first) {
  try {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var result = rest.reduce(function (acc, value) {
      return new _decimal["default"](acc).mul(new _decimal["default"](value)).toNumber();
    }, (0, _number.toNumber)(first));

    if (isNaN(result)) {
      throw Error(_error.ERROR_VALUE);
    }

    return result;
  } catch (error) {
    throw Error(_error.ERROR_VALUE);
  }
}

func.SYMBOL = SYMBOL;