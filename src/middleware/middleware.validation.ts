import type {  NextFunction ,Request, Response } from "express";
import { BadRequestExcption } from "../common/exceptions/application.excptions";
import { ZodError, ZodType } from "zod";

type ValidetionKey= keyof Request
type validationSchema= Partial <Record< ValidetionKey,ZodType>>
export const validation = (schema: validationSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log(Object.keys(schema));
let validationError: { key: ValidetionKey; issue: ZodError ["issues"] }[] = [];
    for (const key of Object.keys(schema) as ValidetionKey[]) {
      if (!schema[key]) {
        continue;
      }

      const value = schema[key].safeParse(req[key as ValidetionKey]);

      if (!value.success) {
        validationError.push({
          key,
           issue: value.error.issues
        });
      }
    }

    if (validationError.length > 0) {
      throw new BadRequestExcption("Validetion", validationError);
    }

    next();
  };
};