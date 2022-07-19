"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var experienciaRoute_1 = __importDefault(require("./route/experienciaRoute"));
var usuarioRoute_1 = __importDefault(require("./route/usuarioRoute"));
var loginRoute_1 = __importDefault(require("./route/loginRoute"));
var reservaRoute_1 = __importDefault(require("./route/reservaRoute"));
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use(experienciaRoute_1["default"]);
app.use(usuarioRoute_1["default"]);
app.use(loginRoute_1["default"]);
app.use(reservaRoute_1["default"]);
app.get('/', function (req, res) {
    res.json('hello World');
});
var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
    console.log("Running on 3001");
});
