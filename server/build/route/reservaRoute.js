"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var reservaController_1 = __importDefault(require("../controller/reservaController"));
var reservaRouter = (0, express_1.Router)();
reservaRouter.get('/reservas', reservaController_1["default"].getReservas);
reservaRouter.get('/reservas/:id', reservaController_1["default"].getUnaReserva);
<<<<<<< HEAD
reservaRouter.post('/reservas/:id', reservaController_1["default"].addReserva);
=======
reservaRouter.post('/reservas/insert', reservaController_1["default"].addReserva);
>>>>>>> 940d422555660b8f43e9d74ec592cb0ae10f36c7
exports["default"] = reservaRouter;
