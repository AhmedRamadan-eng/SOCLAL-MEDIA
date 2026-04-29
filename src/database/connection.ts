import mongoose from "mongoose";
import { env } from "../config/env.service";

 const Databaseconnection=()=>{
mongoose.connect(process.env.MONGO_URL as string).then(()=>
console.log(" mongo database connected")
).catch((err)=>console.log(err)
)
}
export  default Databaseconnection