import { TypeOf } from "zod/v3";
import { sigupSchema } from "./auth.validation";
import{z}from"zod"
export interface LoginDTO{
name :string;
email:string;
password:string

}

// export interface SignupDTO extends LoginDTO{
//     age:number
// }


export type SignupDTO = z.infer<typeof sigupSchema.body>