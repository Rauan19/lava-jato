"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var VeiculoSchema = new _mongoose["default"].Schema({
  userId: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  licensePlate: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});
var _default = exports["default"] = _mongoose["default"].model("Veiculos", VeiculoSchema);