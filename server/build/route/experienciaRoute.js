"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var deleteController_1 = __importDefault(require("../controller/deleteController"));
// import editController from '../controller/editController';
var experienciaController_1 = __importDefault(require("../controller/experienciaController"));
var router = (0, express_1.Router)();
router.get('/experiencias', experienciaController_1["default"].getExperiencias);
router.get('/experiencias/:id', experienciaController_1["default"].getUnaExperiencia);
router["delete"]('/experiencias/:id', deleteController_1["default"]);
// router.put('/experiencias/:id', editController);
exports["default"] = router;
