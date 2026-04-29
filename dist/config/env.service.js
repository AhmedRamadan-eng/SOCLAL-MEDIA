"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = require("dotenv");
const path_1 = __importDefault(require("path"));
(0, dotenv_1.config)({
    path: path_1.default.resolve(`./.env.${process.env.NODE_ENV}`),
});
const port = process.env.PORT;
const mongoURL = process.env.MONGO_URL;
const mood = process.env.MOOD;
const SALT = process.env.SALT;
const jwt_key = process.env.JWT_KEY;
exports.env = { port, mongoURL, mood, SALT, jwt_key };
//# sourceMappingURL=env.service.js.map