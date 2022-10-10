import { userDtos } from '../dto/user.dto';
export declare class UserService {
    private readonly logger;
    users: userDtos[];
    insertUser(userDtos: userDtos): Promise<void>;
}
