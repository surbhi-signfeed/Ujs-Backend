import { Injectable } from '@nestjs/common';
import { Connection } from "mysql2";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { AdminUserDetailDTO } from "./dto/AdminUserDetailDTO";
import { AdminAddUserDTO } from "./dto/AdminAddUserDTO";
import { AdminUserInfoEntity } from "./Entity/AdminUserInfoEntity";
import { Repository } from "typeorm";
import { AdminEditUserDTO } from "./dto/AdminEditUserDTO";
import { AdminResetUserPasswordDTO } from "./dto/AdminResetUserPasswordDTO";
import { AdminUserLoginDTO } from "./dto/AdminUserLoginDTO";

import { AdminEditUserPermissionDTO } from './dto/AdminEditUserPermissionDTO';
import { AdminUserOrganizationEntity} from './Entity/AdminUserOrganizationEntity';
import { AdminUserOrganizationDTO } from './dto/AdminUserOrganizationDTO';
import { MailerService } from "@nestjs-modules/mailer";
import * as crypto from 'crypto'; 
const CryptoJS = require("crypto-js");
@Injectable()
export class AdminloginService {
  constructor(
    @InjectDataSource() private readonly connection: Connection,
    @InjectRepository(AdminUserInfoEntity) 
    private readonly AdminUserInfoEntityRepository: Repository<AdminUserInfoEntity>,
  
    @InjectRepository(AdminUserOrganizationEntity) 
    private readonly AdminUserOrganizationRepository: Repository<AdminUserOrganizationEntity>,
    private readonly mailerService:MailerService

  ){}

  async AdminUserList() {
    const userList = await this.connection.query(`SELECT id, first_name, last_name, 
       username, email, mobile, department, user_role, created_on, updated_on, is_active FROM admin_users`)
    return {userlist: userList, status: 200};
  }

  async AdminUserDetail(adminUserdto: AdminUserDetailDTO ) {
    const userList = await this.connection.query(`SELECT id, first_name, last_name, 
       username, email, mobile, department, user_role, created_on, updated_on, 
       is_active FROM admin_users where id = "${adminUserdto.user_id}"`)
    return {user: userList, status: 200};
  }

  // Add Admin User


// Add Admin from home page
async AdminAddUser(adminaddUserdto: AdminAddUserDTO) {
  const userCheck = await this.AdminUserInfoEntityRepository.findOne({
    where: [{ email: adminaddUserdto.email }] });

  if(userCheck){
    return {"message": "User Already Exist with Email", "status": 400}
  }
  else {
    
    const adminUser: AdminUserInfoEntity = new AdminUserInfoEntity()
    adminUser.UserName = adminaddUserdto.user_name
    adminUser.UserPassword = adminaddUserdto.user_password
    adminUser.firstName = adminaddUserdto.first_name
    adminUser.lastName = adminaddUserdto.last_name
    adminUser.email = adminaddUserdto.email
    adminUser.phone = adminaddUserdto.phone
    adminUser.is_active = false
    // adminUser.usertypeid = adminaddUserdto.user_type
    // adminUser.OrganizationId = addOG.id
    adminUser.UserType = adminaddUserdto.UserType

const addOrganization: AdminUserOrganizationEntity =
new AdminUserOrganizationEntity();
   addOrganization.OrganizationName=adminaddUserdto.OrganizationName
addOrganization.OrganizationAddress1=adminaddUserdto.OrganizationAddress1
addOrganization.OrganizationAddress2=adminaddUserdto.OrganizationAddress2
addOrganization.City=adminaddUserdto.City
addOrganization.State=adminaddUserdto.State
addOrganization.Country=adminaddUserdto.Country
addOrganization.GSTNo=adminaddUserdto.GSTNo
addOrganization.Status=true;
  
 const addOG= await this.AdminUserOrganizationRepository.save(addOrganization);
 adminUser.OrganizationId = addOG.id
 const savedAdminUser= await this.AdminUserInfoEntityRepository.save(adminUser);

console.log("User created successfully with UserId:", savedAdminUser.UserID);

return { "message": "User Created Successfully", "status": 200, "UserId": savedAdminUser.UserID };
 
  }
}

// add user though admin
async AdminAddUserByAdmin(adminaddUserdto: AdminAddUserDTO) {
  const userCheck = await this.AdminUserInfoEntityRepository.findOne({
    where: [{ email: adminaddUserdto.email }] });

  if(userCheck){
    return {"message": "User Already Exist with Email", "status": 400}
  }
  else {
    
    const adminUser: AdminUserInfoEntity = new AdminUserInfoEntity()
    adminUser.UserName = adminaddUserdto.user_name
    adminUser.UserPassword = adminaddUserdto.user_password
    adminUser.firstName = adminaddUserdto.first_name
    adminUser.lastName = adminaddUserdto.last_name
    adminUser.email = adminaddUserdto.email
    adminUser.phone = adminaddUserdto.phone
    adminUser.is_active = false

    adminUser.OrganizationId = adminaddUserdto.OrganizationId
    adminUser.UserType = adminaddUserdto.UserType

 const savedAdminUser= await this.AdminUserInfoEntityRepository.save(adminUser);


return { "message": "User Created Successfully", "status": 200};
 
  }
}

async AdminUserPermission(request) {
  const { UserID } = request.query || {}; // Destructure with default empty object
  console.log("id", UserID);
  
  let userList;
  if (UserID) {
      userList = await this.connection.query(
          `SELECT *
          FROM userpermission
          WHERE userpermission.UserID = ?`,
          [UserID]
      );
  }
  return { user: userList, message: "success", status: 200 };
}

  // Edit Admin User
  async AdminEditUser(admineditUserdto: AdminEditUserDTO) {
    const userCheck = await this.AdminUserInfoEntityRepository.findOne({
      where: [{ UserName: admineditUserdto.user_name }] });
    if(userCheck){
      const updateUser = await this.connection.query(`UPDATE admin_users set 
                       first_name="${admineditUserdto.first_name}", 
                       last_name = "${admineditUserdto.first_name}",
                       phone = "${admineditUserdto.phone}",
                       usertypeid = "${admineditUserdto.user_type}",
                       updated_on = now() WHERE UserName = "${admineditUserdto.user_name}"`)
      return {"message": "User Updated Successfully", "status": 200}

    }
    else {
      return {"message": "User Does Not Exist", "status": 400}
    }
  }
// update user status
async updateUserStatus(request: Request, userId: number) {
  const checkStatus = await this.AdminUserInfoEntityRepository.findOne({
    where: {
      UserID: userId,
    },
  });

  if (checkStatus) {
    checkStatus.is_active = true;
    await this.AdminUserInfoEntityRepository.save(checkStatus);
    return { Status: checkStatus, message: "success", status: 200 };
  } else {
    return { message: "User ID does not exist", status: 400 };
  }
}
  // Reset Admin User Password
  async AdminResetUserPassword(adminresetUserPassworddto: AdminResetUserPasswordDTO) {
    const userCheck = await this.AdminUserInfoEntityRepository.findOne({
      where: [{ UserID: adminresetUserPassworddto.id }] });
    if(userCheck){
      const updateUser = await this.connection.query(`UPDATE admin_users set 
                       password="${adminresetUserPassworddto.password}",
                       updated_on = now() WHERE id = "${adminresetUserPassworddto.id}"`)
      return {"message": "User Password Reset Successfully", "status": 200}

    }
    else {
      return {"message": "User Does Not Exist", "status": 400}
    }
  }

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



  
  async sendMail(usermail: string, userid: string): Promise<void> {
   
    const encryptedUserId = CryptoJS.AES.encrypt(userid, "f5eb4fbe87732f5f7b44ccd9b44819ef028f944a05cd450545cd676ad62af106").toString();
    await this.mailerService.sendMail({
      to: "surbhigulhana3@gmail.com",
      from: usermail,
      subject: 'Testing Nest MailerModule',
      text: 'welcome',
      html: `
        <p>Hello,</p>
        <p>Please review the following:</p>
        <p>User Email: ${usermail}</p>
        <p>User ID: ${userid}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit aliquet libero, id fermentum ligula tincidunt sit amet.</p>
        <a href="http://localhost:3000/admin/update-status/${encryptedUserId}">
          <button style="background-color: #4CAF50; /* Green */
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;">Approved</button>
        </a>
        <button style="background-color: #f44336; /* Red */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;">Rejected</button>
      `,
    });
  }

  
}
