"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const application_excptions_1 = require("../../common/exceptions/application.excptions");
const user_model_1 = require("../../database/MODEL/user.model");
const databes_reposataly_1 = require("../../database/reposatl/databes.reposataly");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_service_1 = require("../../config/env.service");
class AuthService {
    UserModel;
    userRepository;
    constructor() {
        this.UserModel = user_model_1.UserModel;
        this.userRepository = new databes_reposataly_1.DatabasRepository(user_model_1.UserModel);
    }
    async loign(data) {
        const result = await this.UserModel.findOne({ email: data.email });
        if (!result) {
            throw new application_excptions_1.BadRequestExcption("Invalid email or password");
        }
        const isMatched = await (0, bcrypt_1.compare)(data.password, result.password);
        if (!isMatched) {
            throw new application_excptions_1.BadRequestExcption("Invalid email or password");
        }
        const token = jsonwebtoken_1.default.sign({ id: result._id }, env_service_1.env.jwt_key, { expiresIn: "1d" });
        return { result, token };
    }
    async signup(data) {
        const hashedpassword = await (0, bcrypt_1.hash)(data.password, Number(env_service_1.env.SALT));
        data.password = hashedpassword;
        let result = await this.UserModel.create(data);
        if (!result) {
            throw new application_excptions_1.BadRequestExcption("user not created");
        }
        return {
            result: result.toJSON(),
            hashedpassword,
        };
    }
}
exports.default = new AuthService();
//# sourceMappingURL=auth.service.js.map