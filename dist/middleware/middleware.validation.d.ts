import type { NextFunction, Request, Response } from "express";
import { ZodType } from "zod";
type ValidetionKey = keyof Request;
type validationSchema = Partial<Record<ValidetionKey, ZodType>>;
export declare const validation: (schema: validationSchema) => (req: Request, res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=middleware.validation.d.ts.map