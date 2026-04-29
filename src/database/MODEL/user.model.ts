import { Schema, model } from "mongoose";
import { IUser } from "../../common/typs/user.typs";
import {ProviderEnums,GenderEnums} from "../../common/enums/enums.service"
const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,

  },
  DOB: {
    type: Date,

  },
  gender: {
    type: String,
    enum: Object.values(GenderEnums),
    required: true
  },
  provider: {
    type: String,
    enum: Object.values(ProviderEnums),
    default: ProviderEnums.System
  },

  
}, {
  timestamps: true



  
});

export const UserModel = model<IUser>("User", userSchema);
