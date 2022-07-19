"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var deleteController_1 = __importDefault(require("../controller/exp_controllers/deleteController"));
// import editController from '../controller/exp_controllers/editController';
var experienciaController_1 = __importDefault(require("../controller/exp_controllers/experienciaController"));
var addController_1 = __importDefault(require("../controller/exp_controllers/addController"));
var router = (0, express_1.Router)();
//obtener todas las experiencias
router.get('/experiencias', experienciaController_1["default"].getExperiencias);
//obtener el detalle de una experiencia en concreto
router.get('/experiencias/:id', experienciaController_1["default"].getUnaExperiencia);
//añadir una experiencia
router.post('/experiencias/insert', addController_1["default"]);
//edit experiencia
// router.post('/experiencias/:id',editController);
//eliminar una experiencia
router["delete"]('/experiencias/:id', deleteController_1["default"]);
// router.put('/experiencias/:id', editController);
exports["default"] = router;
