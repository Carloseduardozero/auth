import { userDtos } from '../user/dto/user.dto';
import { UserService } from '../user/user/user.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private AuthService;
    private UserService;
    constructor(AuthService: AuthService, UserService: UserService);
    insertUser(userDtos: userDtos): Promise<void>;
    login(body: any): {
        token: string;
    };
    test(): {
        success: boolean;
    };
}
