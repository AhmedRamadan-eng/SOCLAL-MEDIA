import { sigupSchema } from "./auth.validation";
import { z } from "zod";
export interface LoginDTO {
    name: string;
    email: string;
    password: string;
}
export type SignupDTO = z.infer<typeof sigupSchema.body>;
//# sourceMappingURL=auth.DTO.d.ts.map