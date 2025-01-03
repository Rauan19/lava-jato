"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Routes = void 0;
var _userController = require("../controller/userController");
var _session = require("../controller/session.Controller");
var _vehicle = require("../controller/vehicle.Controller");
var _auth = require("../middlewares/auth");
var _requestPassword = require("../controller/requestPassword");
var _resetPasswordCOntroller = require("../controller/resetPasswordCOntroller");
var Routes = exports.Routes = function Routes(app) {
  app.post("/registro", _userController.Register);
  app.post("/login", _session.Login);
  app.post("/request-reset-password", _requestPassword.requestPasswordReset);
  app.post("/resetpassword", _resetPasswordCOntroller.resetPassword);
  app.post("/user/:user_id/veiculo", _auth.verifytoken, _vehicle.CreateVeicle);
  app.get("/user/:user_id/veiculo", _auth.verifytoken, _vehicle.GetVehicles);
  app["delete"]("/user/:user_id/veiculo/:id", _auth.verifytoken, _vehicle.DeleteVeiculo);
};