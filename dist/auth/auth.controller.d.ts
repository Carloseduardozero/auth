import { AuthService } from './auth.service';
export declare class AuthController {
    private AuthService;
    constructor(AuthService: AuthService);
    login(body: any): void;
}
