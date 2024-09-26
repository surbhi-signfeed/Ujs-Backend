import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { Connection } from "mysql2";
import { AdminUserInfoEntity } from "../adminlogin/Entity/AdminUserInfoEntity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectDataSource() private readonly connection: Connection,
    @InjectRepository(AdminUserInfoEntity)
    private readonly AdminUserInfoEntityRepository: Repository<AdminUserInfoEntity>,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    // Find user by email
    const user = await this.AdminUserInfoEntityRepository.findOne({
        where: { email: email },
    });

    if (!user) {
        // Return null if no user is found
        return null;
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        // If the password does not match, return null
        return null;
    }

    // Check if the user is active
    if (user.active === false) {
        // If the user is not active, throw an UnauthorizedException
        throw new UnauthorizedException("User account is not active. You cannot login.");
    }

    // If the user is found, password is valid, and user is active, return user details
    return {
        id: user.id,
        role: user.role,
    };
}
  async generateToken(user: any): Promise<string> {
    // Generate token only if the user is not null (i.e., found and active)
    if (user) {
      const payload = { email: user.email, sub: user.userId };
      return this.jwtService.signAsync(payload);
    }
    return null; // Return null if user is not found or not active
  }
}
