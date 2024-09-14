"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminloginService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const AdminUserInfoEntity_1 = require("./Entity/AdminUserInfoEntity");
const typeorm_2 = require("typeorm");
const AdminUserOrganizationEntity_1 = require("./Entity/AdminUserOrganizationEntity");
const mailer_1 = require("@nestjs-modules/mailer");
const CryptoJS = require("crypto-js");
let AdminloginService = class AdminloginService {
    constructor(connection, AdminUserInfoEntityRepository, AdminUserOrganizationRepository, mailerService) {
        this.connection = connection;
        this.AdminUserInfoEntityRepository = AdminUserInfoEntityRepository;
        this.AdminUserOrganizationRepository = AdminUserOrganizationRepository;
        this.mailerService = mailerService;
    }
    async AdminUserList() {
        const userList = await this.connection.query(`SELECT id, first_name, last_name, 
       username, email, mobile, department, user_role, created_on, updated_on, is_active FROM admin_users`);
        return { userlist: userList, status: 200 };
    }
    async AdminUserDetail(adminUserdto) {
        const userList = await this.connection.query(`SELECT id, first_name, last_name, 
       username, email, mobile, department, user_role, created_on, updated_on, 
       is_active FROM admin_users where id = "${adminUserdto.user_id}"`);
        return { user: userList, status: 200 };
    }
    async AdminAddUser(adminaddUserdto) {
        const userCheck = await this.AdminUserInfoEntityRepository.findOne({
            where: [{ email: adminaddUserdto.email }]
        });
        if (userCheck) {
            return { "message": "User Already Exist with Email", "status": 400 };
        }
        else {
            const adminUser = new AdminUserInfoEntity_1.AdminUserInfoEntity();
            adminUser.UserName = adminaddUserdto.user_name;
            adminUser.UserPassword = adminaddUserdto.user_password;
            adminUser.firstName = adminaddUserdto.first_name;
            adminUser.lastName = adminaddUserdto.last_name;
            adminUser.email = adminaddUserdto.email;
            adminUser.phone = adminaddUserdto.phone;
            adminUser.is_active = false;
            adminUser.UserType = adminaddUserdto.UserType;
            const addOrganization = new AdminUserOrganizationEntity_1.AdminUserOrganizationEntity();
            addOrganization.OrganizationName = adminaddUserdto.OrganizationName;
            addOrganization.OrganizationAddress1 = adminaddUserdto.OrganizationAddress1;
            addOrganization.OrganizationAddress2 = adminaddUserdto.OrganizationAddress2;
            addOrganization.City = adminaddUserdto.City;
            addOrganization.State = adminaddUserdto.State;
            addOrganization.Country = adminaddUserdto.Country;
            addOrganization.GSTNo = adminaddUserdto.GSTNo;
            addOrganization.Status = true;
            const addOG = await this.AdminUserOrganizationRepository.save(addOrganization);
            adminUser.OrganizationId = addOG.id;
            const savedAdminUser = await this.AdminUserInfoEntityRepository.save(adminUser);
            console.log("User created successfully with UserId:", savedAdminUser.UserID);
            return { "message": "User Created Successfully", "status": 200, "UserId": savedAdminUser.UserID };
        }
    }
    async AdminAddUserByAdmin(adminaddUserdto) {
        const userCheck = await this.AdminUserInfoEntityRepository.findOne({
            where: [{ email: adminaddUserdto.email }]
        });
        if (userCheck) {
            return { "message": "User Already Exist with Email", "status": 400 };
        }
        else {
            const adminUser = new AdminUserInfoEntity_1.AdminUserInfoEntity();
            adminUser.UserName = adminaddUserdto.user_name;
            adminUser.UserPassword = adminaddUserdto.user_password;
            adminUser.firstName = adminaddUserdto.first_name;
            adminUser.lastName = adminaddUserdto.last_name;
            adminUser.email = adminaddUserdto.email;
            adminUser.phone = adminaddUserdto.phone;
            adminUser.is_active = false;
            adminUser.OrganizationId = adminaddUserdto.OrganizationId;
            adminUser.UserType = adminaddUserdto.UserType;
            const savedAdminUser = await this.AdminUserInfoEntityRepository.save(adminUser);
            return { "message": "User Created Successfully", "status": 200 };
        }
    }
    async AdminUserPermission(request) {
        const { UserID } = request.query || {};
        console.log("id", UserID);
        let userList;
        if (UserID) {
            userList = await this.connection.query(`SELECT *
          FROM userpermission
          WHERE userpermission.UserID = ?`, [UserID]);
        }
        return { user: userList, message: "success", status: 200 };
    }
    async AdminEditUser(admineditUserdto) {
        const userCheck = await this.AdminUserInfoEntityRepository.findOne({
            where: [{ UserName: admineditUserdto.user_name }]
        });
        if (userCheck) {
            const updateUser = await this.connection.query(`UPDATE admin_users set 
                       first_name="${admineditUserdto.first_name}", 
                       last_name = "${admineditUserdto.first_name}",
                       phone = "${admineditUserdto.phone}",
                       usertypeid = "${admineditUserdto.user_type}",
                       updated_on = now() WHERE UserName = "${admineditUserdto.user_name}"`);
            return { "message": "User Updated Successfully", "status": 200 };
        }
        else {
            return { "message": "User Does Not Exist", "status": 400 };
        }
    }
    async updateUserStatus(request, userId) {
        const checkStatus = await this.AdminUserInfoEntityRepository.findOne({
            where: {
                UserID: userId,
            },
        });
        if (checkStatus) {
            checkStatus.is_active = true;
            await this.AdminUserInfoEntityRepository.save(checkStatus);
            return { Status: checkStatus, message: "success", status: 200 };
        }
        else {
            return { message: "User ID does not exist", status: 400 };
        }
    }
    async AdminResetUserPassword(adminresetUserPassworddto) {
        const userCheck = await this.AdminUserInfoEntityRepository.findOne({
            where: [{ UserID: adminresetUserPassworddto.id }]
        });
        if (userCheck) {
            const updateUser = await this.connection.query(`UPDATE admin_users set 
                       password="${adminresetUserPassworddto.password}",
                       updated_on = now() WHERE id = "${adminresetUserPassworddto.id}"`);
            return { "message": "User Password Reset Successfully", "status": 200 };
        }
        else {
            return { "message": "User Does Not Exist", "status": 400 };
        }
    }
    async AdminUserLogin(adminUserLogindto) {
        const userList = await this.connection.query(`SELECT id, concat(first_name, last_name) as fullName, 
       username, email, mobile, user_role as role, '' as avatar, 
       is_active as status FROM admin_users where username = "${adminUserLogindto.username}" 
       and password = "${adminUserLogindto.password}"`);
        return { user: userList, accessToken: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', status: 200 };
    }
    async AdminValidateUserLogin() {
        const userList = await this.connection.query(`SELECT id, concat(first_name, last_name) as fullName, 
       username, email, mobile, user_role as role, '' as avatar, 
       is_active as status FROM admin_users where username = "govind@harij.in" 
       and password = "123456"`);
        return { user: userList, accessToken: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', status: 200 };
    }
    async sendMail(usermail, userid) {
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
};
exports.AdminloginService = AdminloginService;
exports.AdminloginService = AdminloginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __param(1, (0, typeorm_1.InjectRepository)(AdminUserInfoEntity_1.AdminUserInfoEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(AdminUserOrganizationEntity_1.AdminUserOrganizationEntity)),
    __metadata("design:paramtypes", [Object, typeorm_2.Repository,
        typeorm_2.Repository,
        mailer_1.MailerService])
], AdminloginService);
//# sourceMappingURL=adminlogin.service.js.map