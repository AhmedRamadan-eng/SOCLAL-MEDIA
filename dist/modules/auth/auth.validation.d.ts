import { z } from "zod";
export declare const sigupSchema: {
    body: z.ZodObject<{
        username: z.ZodString;
        email: z.ZodEmail;
        password: z.ZodString;
        confirmpassword: z.ZodString;
        phone: z.ZodString;
        age: z.ZodNumber;
    }, z.core.$strip>;
};
//# sourceMappingURL=auth.validation.d.ts.map