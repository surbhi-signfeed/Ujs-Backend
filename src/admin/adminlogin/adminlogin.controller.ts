import { Body, Controller, Get, Inject, Logger, Post, Query, Req,ParseIntPipe,Param } from "@nestjs/common";
import { AdminloginService } from "./adminlogin.service";
import { AdminUserDetailDTO } from "./dto/AdminUserDetailDTO";
import { AdminAddUserDTO } from "./dto/AdminAddUserDTO";
import { AdminEditUserDTO } from "./dto/AdminEditUserDTO";
import { AdminResetUserPasswordDTO } from "./dto/AdminResetUserPasswordDTO";
import { AdminUserLoginDTO } from "./dto/AdminUserLoginDTO";
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminEditUserPermissionDTO } from "./dto/AdminEditUserPermissionDTO";

@Controller('admin')
export class AdminloginController {
    constructor(private readonly adminloginservice: AdminloginService, @Inject(Logger) private readonly logger: Logger)
{}

  @Get('UserList')
  @UseGuards(JwtAuthGuard)
  async AdminUserList(){
    this.logger.log("Admin UserList")
    return this.adminloginservice.AdminUserList()
  }

  @Get('UserDetail')
  async AdminUserDetail(@Query() adminUserdto: AdminUserDetailDTO ){
    this.logger.log("Admin Single User Details")
    return this.adminloginservice.AdminUserDetail(adminUserdto)
  }
// admin register from home page
  @Post('AddUser')
  async AdminAddUser(@Body()adminaddUserdto: AdminAddUserDTO,){
    return this.adminloginservice.AdminAddUser(adminaddUserdto)
  }

  // user registration through admin
  @Post('AddUserByAdmin')
  async AdminAddUserByAdmin(@Body()adminaddUserdto: AdminAddUserDTO,){
    return this.adminloginservice.AdminAddUserByAdmin(adminaddUserdto)
  }
  @Post('EditUser')
  async AdminEditUser(@Body()admineditUserdto: AdminEditUserDTO){
    return this.adminloginservice.AdminEditUser(admineditUserdto)
  }
  @Post('/update-status/:userId')
  async updateStatus(
    @Req() request: Request,
    @Param('userId', ParseIntPipe) userId: number
  ) {
    return this.adminloginservice.updateUserStatus(request, userId);
  }
  @Get("ListUserPermission")
  // @UseGuards(JwtAuthGuard)
  async AdminUserPermission(@Req() request: Request) {
    return this.adminloginservice.AdminUserPermission(request);
  }
  // @Get("SendMail")
  // sendMail():void{
  //   return this.adminloginservice.sendMail();
  // }

  @Post('SendMail')
  sendMail(@Body() body: { usermail: string, userid: string }): void {
    const { usermail, userid } = body;

    this.adminloginservice.sendMail(usermail, userid);
  }

  // @Post('EditUserPermission')
  // async AdminEditUserPermission(@Body()admineditUserPermissiondto: AdminEditUserPermissionDTO){
  //   return this.adminloginservice.AdminEditUserPermission(admineditUserPermissiondto)
  // }
  @Post('ResetUserPassword')
  async AdminResetUserPassword(@Body()adminresetUserPassworddto: AdminResetUserPasswordDTO){
    return this.adminloginservice.AdminResetUserPassword(adminresetUserPassworddto)
  }

  @Post('UserLogin')
  async AdminUserLogin(@Body()adminUserLogindto: AdminUserLoginDTO){
    return this.adminloginservice.AdminUserLogin(adminUserLogindto)
  }

  @Get('AuthMe')
  async AdminValidateUserLogin(){
    return this.adminloginservice.AdminValidateUserLogin()
  }
 
}
