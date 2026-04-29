import { SignupDTO } from "./auth.DTO";
import { IUser } from "../../common/typs/user.typs";
import { HydratedDocument } from "mongoose";
declare class AuthService {
    private UserModel;
    private userRepository;
    constructor();
    loign(data: SignupDTO): Promise<{
        result: HydratedDocument<IUser>;
        token: string;
    }>;
    signup(data: SignupDTO): Promise<{
        result: IUser;
        hashedpassword: string;
    }>;
}
declare const _default: AuthService;
export default _default;
//# sourceMappingURL=auth.service.d.ts.map