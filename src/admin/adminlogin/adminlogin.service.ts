import { Injectable } from '@nestjs/common';
import { Connection } from "mysql2";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { AdminUserLoginDTO } from "./dto/AdminUserLoginDTO";

@Injectable()
export class AdminloginService {
  constructor(
    @InjectDataSource() private readonly connection: Connection,
  

  ){}



  async AdminUserLogin(adminUserLogindto: AdminUserLoginDTO ) {
    const userList = await this.connection.query(`SELECT id, concat(first_name, last_name) as fullName, 
       username, email, mobile, user_role as role, '' as avatar, 
       is_active as status FROM admin_users where username = "${adminUserLogindto.username}" 
       and password = "${adminUserLogindto.password}"`)
    return {user: userList, accessToken: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', status: 200};
  }

  async AdminValidateUserLogin() {
    const userList = await this.connection.query(`SELECT id, concat(first_name, last_name) as fullName, 
       username, email, mobile, user_role as role, '' as avatar, 
       is_active as status FROM admin_users where username = "govind@harij.in" 
       and password = "123456"`)
    return {user: userList, accessToken: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', status: 200};
  }



  
}
