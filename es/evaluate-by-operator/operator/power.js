"use strict";

exports.__esModule = true;
exports["default"] = func;
exports.SYMBOL = void 0;

var _number = require("./../../helper/number");

var _error = require("./../../error");

var _decimal = _interopRequireDefault(require("decimal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SYMBOL = '^';
exports.SYMBOL = SYMBOL;

function func(exp1, exp2) {
  if (!Number.isInteger((0, _number.toNumber)(exp2))) {
    throw Error(_error.ERROR_VALUE);
  }

  var result = new _decimal["default"]((0, _number.toNumber)(exp1)).toPower((0, _number.toNumber)(exp2)).toNumber();

  if (isNaN(result)) {
    throw Error(_error.ERROR_VALUE);
  }

  return result;
}

func.SYMBOL = SYMBOL;