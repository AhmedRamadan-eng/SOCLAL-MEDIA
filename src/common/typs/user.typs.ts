import {ProviderEnums,GenderEnums} from "../enums/enums.service"



export interface IUser {
  username: string;
  email: string;
  password: string;
  phone: string;
  DOB: Date;
  gender: GenderEnums;
  provider: ProviderEnums;
}