"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.validateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = require("../services/config");
var getTokenFrom = function (request) {
    var authorization = request.get('authorization');
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7);
    }
    else {
        return null;
    }
};
var tokenVerify = function (token) { return jsonwebtoken_1["default"].verify(token, (0, config_1.config)().secret); };
var validateToken = function (req, res, next) {
    try {
        var token = getTokenFrom(req);
        console.log(token);
        var email = tokenVerify(token);
        if (!token || !email) {
            throw new Error('token invalid or missing');
        }
        else {
            next();
        }
    }
    catch (error) {
        res.status(400).send(error.message);
    }
};
exports.validateToken = validateToken;
