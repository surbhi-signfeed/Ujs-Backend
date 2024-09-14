import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() body: { username: string; password: string }): Promise<{ accessToken?: string; organizationId?: string; UserType?: string; UserID?: number; }> {
        const user = await this.authService.validateUser(body.username, body.password);

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        // Check if user is active
        if (user.is_active === false) {
            throw new UnauthorizedException('User account is not active. You cannot login.');
        }

        // Generate token only if user is active
        const accessToken = await this.authService.generateToken(user);

        return { 
            accessToken, 
            organizationId: user.organizationId, 
            UserType: user.UserType, 
            UserID: user.UserID, 
            // permissions: user.permissions 
        };
    }
}
