"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Databaseconnection = () => {
    mongoose_1.default.connect(process.env.MONGO_URL).then(() => console.log(" mongo database connected")).catch((err) => console.log(err));
};
exports.default = Databaseconnection;
//# sourceMappingURL=connection.js.map