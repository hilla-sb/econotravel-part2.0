"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var experienciaController_1 = __importDefault(require("../controller/experienciaController"));
var experienciaRouter = (0, express_1.Router)();
experienciaRouter.get('/experiencias', experienciaController_1["default"].getExperiencias);
experienciaRouter.get('/experiencias/id', experienciaController_1["default"].getUnaExperiencia);
exports["default"] = experienciaRouter;
