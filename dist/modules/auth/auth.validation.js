"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sigupSchema = void 0;
const zod_1 = require("zod");
exports.sigupSchema = {
    body: zod_1.z.object({
        username: zod_1.z.string({ error: "name is ruquird" }).min(3, { error: "the min  length 3" }).max(20, { error: "the max length 20" }),
        email: zod_1.z.email({ message: "emil not found" }),
        password: zod_1.z.string().min(6).max(30),
        confirmpassword: zod_1.z.string().min(6).max(30),
        phone: zod_1.z.string().min(6).max(11),
        age: zod_1.z.number().min(18).max(70)
    }).refine((data) => data.password === data.confirmpassword, {
        message: "password do not match",
        path: ["confirmpassword"]
    })
};
//# sourceMappingURL=auth.validation.js.map