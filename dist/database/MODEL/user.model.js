"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const enums_service_1 = require("../../common/enums/enums.service");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    DOB: {
        type: Date,
    },
    gender: {
        type: String,
        enum: Object.values(enums_service_1.GenderEnums),
        required: true
    },
    provider: {
        type: String,
        enum: Object.values(enums_service_1.ProviderEnums),
        default: enums_service_1.ProviderEnums.System
    },
}, {
    timestamps: true
});
exports.UserModel = (0, mongoose_1.model)("User", userSchema);
//# sourceMappingURL=user.model.js.map