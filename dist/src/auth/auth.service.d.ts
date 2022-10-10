import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user/user.service';
export declare class AuthService {
    private jwtService;
    private readonly UserService;
    constructor(jwtService: JwtService, UserService: UserService);
    users: import("../user/dto/user.dto").userDtos[];
    login(username: string, password: string): {
        token: string;
    };
    validateCredentials(username: string, password: string): import("../user/dto/user.dto").userDtos;
}
