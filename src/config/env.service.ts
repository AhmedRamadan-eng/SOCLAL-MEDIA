import { config } from "dotenv";
import path from "path";
config({
  path: path.resolve(`./.env.${process.env.NODE_ENV}`),
  // path: path.resolve(`./.env.${process.env.NODE_ENV}`)
});
const port  = process.env.PORT as string;
const mongoURL=process.env.MONGO_URL as string;
const mood=process.env.MOOD as string;
const SALT=process.env.SALT as string
const jwt_key = process.env.JWT_KEY as string
export const env={port,mongoURL,mood,SALT,jwt_key}