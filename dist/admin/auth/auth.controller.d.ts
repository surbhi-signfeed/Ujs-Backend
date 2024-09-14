import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: {
        username: string;
        password: string;
    }): Promise<{
        accessToken?: string;
        organizationId?: string;
        UserType?: string;
        UserID?: number;
    }>;
}
