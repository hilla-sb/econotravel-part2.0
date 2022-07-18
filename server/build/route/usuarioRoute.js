"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var usuarioController_1 = __importDefault(require("../controller/usuarioController"));
var authHandler_1 = __importDefault(require("../middleware/authHandler"));
var jwtHandler_1 = require("../middleware/jwtHandler");
var router = (0, express_1.Router)();
// router.post('/usuario/login', authHandler.validateUser, usuarioController)
router.post('/usuarios', authHandler_1["default"].encryptPassword, usuarioController_1["default"]);
router.get('/usuarios', jwtHandler_1.validateToken, usuarioController_1["default"]);
exports["default"] = router;
