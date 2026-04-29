import { ApplicationExcptions, BadRequestExcption } from "../../common/exceptions/application.excptions";
import { LoginDTO, SignupDTO } from "./auth.DTO";
import { UserModel } from "../../database/MODEL/user.model";
import { IUser } from "../../common/typs/user.typs";
import { Model, HydratedDocument } from "mongoose";
import { DatabasRepository } from "../../database/reposatl/databes.reposataly";
import { hash,compare } from "bcrypt";
import  jwt from "jsonwebtoken"
import { env } from "../../config/env.service";
class AuthService {
  // تعريف متغير خاص للموديل بتاع اليوزر
  private UserModel: Model<IUser>;
  private userRepository: DatabasRepository<IUser>; // ✅ اتحدد نوعه

  constructor() {
    // هنا بنربط المتغير بالموديل الفعلي عشان نستخدمه في الكلاس
    this.UserModel = UserModel;
    this.userRepository = new DatabasRepository<IUser>(UserModel); //✅ اتعمله init
  }
async loign(data: SignupDTO): Promise<{ result: HydratedDocument<IUser>, token: string }> {

  const result = await this.UserModel.findOne({ email: data.email });

  if (!result) { 
    throw new BadRequestExcption("Invalid email or password");
  }

  const isMatched = await compare(data.password, result.password);

  if (!isMatched) {
    throw new BadRequestExcption("Invalid email or password");
  }

  const token = jwt.sign(
    { id: result._id },
    env.jwt_key,
    { expiresIn: "1d" }
  );

  return { result, token };
}
  async signup(data: SignupDTO): Promise<{ result: IUser; hashedpassword: string }> {
    // الفنكشن دي مسؤولة عن إنشاء يوزر جديد في الداتا بيز
  const hashedpassword = await hash(data.password, Number(env.SALT));
  data.password = hashedpassword;
  let result =await this.UserModel.create(data)
    if (!result) {
      throw new BadRequestExcption("user not created");
    }
  

      return {
    result: result.toJSON(),
    hashedpassword,
  };
  }
}

// بنعمل export ل instance جاهز من الكلاس عشان نستخدمه في باقي المشروع
export default new AuthService();