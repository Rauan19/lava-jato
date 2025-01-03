"use strict";

var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _db = require("./config/db");
var _routes = require("./routes/routes");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
_dotenv["default"].config();
app.use(_express["default"].json());
(0, _db.ConnectDb)();
app.use((0, _cors["default"])());
(0, _routes.Routes)(app);
var Port = process.env.PORT || 3000;
app.listen(Port);