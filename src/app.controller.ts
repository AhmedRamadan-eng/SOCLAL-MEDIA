import express from "express";
import type { Express } from "express";
import  authRouter from "./modules/auth/auth.controller";
import cors from "cors"
import {globalErrorHandler} from "./middleware/error.middleware"
import { env } from "./config/env.service";
import Databaseconnection from "./database/connection"

export const bootstrap =  async() => {
  const app: Express = express();

  app.use(cors(),express.json());

await Databaseconnection()




  
  app.use("/auth", authRouter);
app.use(globalErrorHandler)

  app.listen(env.port, () => {
    console.log(`server is running on port ${env.port}`);
  });

  
};