"use strict";
exports.__esModule = true;
exports.config = void 0;
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var config = function () {
    var uri = process.env.POSTGRES_URL;
    return uri;
};
exports.config = config;
