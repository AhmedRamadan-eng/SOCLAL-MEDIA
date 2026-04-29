"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_service_1 = __importDefault(require("./auth.service"));
const success_responce_1 = require("../../common/exceptions/success.responce");
const auth_validation_1 = require("./auth.validation");
const middleware_validation_1 = require("../../middleware/middleware.validation");
const router = (0, express_1.Router)();
router.post("/login", async (req, res) => {
    const data = await auth_service_1.default.loign(req.body);
    return (0, success_responce_1.SuccessResponse)({
        res,
        message: "login success",
        status: 200,
        data
    });
});
router.post("/signup", (0, middleware_validation_1.validation)(auth_validation_1.sigupSchema), async (req, res) => {
    const data = await auth_service_1.default.signup(req.body);
    data.result.username;
    return (0, success_responce_1.SuccessResponse)({
        res,
        message: "signup success",
        status: 201,
        data
    });
});
exports.default = router;
//# sourceMappingURL=auth.controller.js.map