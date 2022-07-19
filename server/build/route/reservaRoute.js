"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var reservaController_1 = __importDefault(require("../controller/reservaController"));
var reservaRouter = (0, express_1.Router)();
reservaRouter.get('/reservas', reservaController_1["default"].getReservas);
reservaRouter.get('/reservas/id', reservaController_1["default"].getUnaReserva);
exports["default"] = reservaRouter;
