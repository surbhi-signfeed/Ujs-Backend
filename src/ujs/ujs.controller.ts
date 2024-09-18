import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "src/admin/auth/jwt-auth.guard";
import { UjsService } from "./ujs.service";
import { Request } from "express";
import { UJSDepartmentDTO } from "./dto/UJSDepartmentDTO";
import { UJSDepartmentUpdateDTO } from "./dto/UJSDepartmentUpdateDTO";
import { UJSDepartmentDeleteDTO } from "./dto/UJSDepartmentDeleteDTO";
import { UJSShgGroupDTO } from "./dto/UJSShgGroupDTO";
import { UJSShgMemberDTO } from "./dto/UJSShgMemberDTO";
import { UJSUsersDTO } from "./dto/UJSUsersDTO";
import { UJSRoleDTO } from "./dto/UJSRoleDTO";
import { UJSRolePermissionDTO } from "./dto/UJSRolePermissionDTO";
import { UJSMigrationDTO } from "./dto/UJSMigrationDTO";
import { UJSFailedJobDTO } from "./dto/UJSFailedJobsDTO";
import { UJSBranchDTO } from "./dto/UJSBranchDTO";
import { UJSBackupShgGroupDataUploadMonthDTO } from "./dto/UJSBackupShgGroupDataUploadMonthDTO";
import { UJSPersonalAccessTokenDTO } from "./dto/UJSPersonalAccessTokenDTO";
import { UJSSHGExpansesDTO } from "./dto/UJSSHGExpansesDTO";
import { UJSSHGLoanRepaymentDTO } from "./dto/UJSSHGLoanRepaymentDTO";
@Controller("ujs")
export class UjsController {
  constructor(
    private readonly ujsService: UjsService,
    @Inject(Logger) private readonly logger: Logger
  ) {}
// --------------------Department------------------------------------------
// add department
@Post("AddDepartment")
  @UseGuards(JwtAuthGuard)
  async UJSDepartmentAdd(
    @Req() request: Request,
    @Body() ujsDepartmentDTO: UJSDepartmentDTO
  ) {
    return this.ujsService.UJSDepartmentAdd(request, ujsDepartmentDTO);
  }
// list department
@Get('ListDepartment')
@UseGuards(JwtAuthGuard)
async listDepartment(@Req() request: Request) {
return this.ujsService.UJSDepartmentList(request);
}
// update department
  @Post("UpdateDepartment")
  @UseGuards(JwtAuthGuard)
  async UJSDepartmentUpdate(
    @Req() request: Request,
    @Body() ujsDepartmentUpdateDTO: UJSDepartmentUpdateDTO
  ) {
    return this.ujsService.UJSDepartmentUpdate(
      request,
      ujsDepartmentUpdateDTO
    );
  }
// delete department
@Post("DeleteDepartment")
@UseGuards(JwtAuthGuard)
async UJSDepartmentDelete(
  @Req() request: Request,
  @Body() ujsDepartmentDeleteDTO: UJSDepartmentDeleteDTO
) {
  return this.ujsService.UJSDepartmentDelete(
    request,
    ujsDepartmentDeleteDTO
  );
}
// ------------------------SHG Group -----------------------------------------
// add Shg Group
@Post("AddShgGroup")
  @UseGuards(JwtAuthGuard)
  async UJSShgGroupAdd(
    @Req() request: Request,
    @Body() ujsShgGroupDTO: UJSShgGroupDTO
  ) {
    return this.ujsService.UJSShgGroupAdd(request, ujsShgGroupDTO);
  }
// list Shg Group
@Get('ListShgGroup')
@UseGuards(JwtAuthGuard)
async listShgGroup(@Req() request: Request) {
return this.ujsService.UJSShgGroupList(request);
}
// ------------------------SHG Member -----------------------------------------
// add shg member
@Post("AddShgMember")
  @UseGuards(JwtAuthGuard)
  async UJSShgMemberAdd(
    @Req() request: Request,
    @Body() ujsShgMemberDTO: UJSShgMemberDTO
  ) {
    return this.ujsService.UJSShgMemberAdd(request, ujsShgMemberDTO);
  }
// list shg member
@Get('ListShgMember')
@UseGuards(JwtAuthGuard)
async listShgMember(@Req() request: Request) {
return this.ujsService.UJSShgMemberList(request);
}
// ------------------------Users -----------------------------------------
// add Users
@Post("AddUsers")
  @UseGuards(JwtAuthGuard)
  async UJSUserAdd(
    @Req() request: Request,
    @Body() ujsUserDTO: UJSUsersDTO
  ) {
    return this.ujsService.UJSUserAdd(request, ujsUserDTO);
  }
  // list user
@Get('ListUser')
@UseGuards(JwtAuthGuard)
async listUser(@Req() request: Request) {
return this.ujsService.UJSUserList(request);
}
  // --------------------role------------------------------------------
  // add create
  @Post("AddRole")
  @UseGuards(JwtAuthGuard)
  async UJSRoleAdd(
    @Req() request: Request,
    @Body() ujsRoleDTO: UJSRoleDTO,
    @Body('permissions') ujsRolePermissionDTOs: UJSRolePermissionDTO[]
  ) {
    return this.ujsService.UJSRoleAdd(request, ujsRoleDTO, ujsRolePermissionDTOs);
  }
  // list role
@Get('ListRole')
@UseGuards(JwtAuthGuard)
async listRole(@Req() request: Request) {
return this.ujsService.UJSRoleList(request);
}
// ------------------------migration -----------------------------------------
// add migration
@Post("AddMigration")
  @UseGuards(JwtAuthGuard)
  async UJSMigrationAdd(
    @Req() request: Request,
    @Body() ujsMigrationDTO: UJSMigrationDTO
  ) {
    return this.ujsService.UJSMigrationAdd(request, ujsMigrationDTO);
  }
  // list Migration
@Get('ListMigration')
@UseGuards(JwtAuthGuard)
async listMigration(@Req() request: Request) {
return this.ujsService.UJSMigrationList(request);
}
// ------------------------ failed job-----------------------------------------
// add failed job
@Post("AddFailedJobs")
  @UseGuards(JwtAuthGuard)
  async UJSFailedJobsAdd(
    @Req() request: Request,
    @Body() ujsFailedJobDTO: UJSFailedJobDTO
  ) {
    return this.ujsService.UJSFailedJobsAdd(request, ujsFailedJobDTO);
  }
  // list failed job
@Get('ListFailedJobs')
@UseGuards(JwtAuthGuard)
async listFailedJobs(@Req() request: Request) {
return this.ujsService.UJSFailedJobsList(request);
}
// ------------------------ Branch-----------------------------------------
// add branch
@Post("AddBranch")
  @UseGuards(JwtAuthGuard)
  async UJSBranchAdd(
    @Req() request: Request,
    @Body() ujsBranchDTO: UJSBranchDTO
  ) {
    return this.ujsService.UJSBranchAdd(request, ujsBranchDTO);
  }
  // list branch
@Get('ListBranch')
@UseGuards(JwtAuthGuard)
async listBranch(@Req() request: Request) {
return this.ujsService.UJSBranchList(request);
}
// ------------------------ Back shg grp-----------------------------------------
// add backup shg grp
@Post("AddBackupShgGroup")
  @UseGuards(JwtAuthGuard)
  async UJSBackupShgGroupAdd(
    @Req() request: Request,
    @Body() ujsBackupShgGroupDataUploadMonthDTO: UJSBackupShgGroupDataUploadMonthDTO
  ) {
    return this.ujsService.UJSBackupShgGroupAdd(request, ujsBackupShgGroupDataUploadMonthDTO);
  }
  // list backup shg grp
@Get('ListBackupShgGroup')
@UseGuards(JwtAuthGuard)
async listBackupShgGroup(@Req() request: Request) {
return this.ujsService.UJSBackupShgGroupList(request);
}
// ------------------------ personal access token-----------------------------------------
// add personal access token
@Post("AddPersonalAccessToken")
  @UseGuards(JwtAuthGuard)
  async UJSPersonalAccessTokenAdd(
    @Req() request: Request,
    @Body() ujsPersonalAccessTokenDTO: UJSPersonalAccessTokenDTO
  ) {
    return this.ujsService.UJSPersonalAccessTokenAdd(request, ujsPersonalAccessTokenDTO);
  }
  // list personal access token
@Get('ListPersonalAccessToken')
@UseGuards(JwtAuthGuard)
async lisPersonalAccessToken(@Req() request: Request) {
return this.ujsService.UJSPersonalAccessTokenList(request);
}
// ------------------------ shg exp-----------------------------------------
// add shg exp
@Post("AddShgExpenses")
  @UseGuards(JwtAuthGuard)
  async UJSSHGExpensesAdd(
    @Req() request: Request,
    @Body() ujsShgExpensesDTO: UJSSHGExpansesDTO
  ) {
    return this.ujsService.UJSSHGExpensesAdd(request, ujsShgExpensesDTO);
  }
  // list shg exp
@Get('ListShgExpenses')
@UseGuards(JwtAuthGuard)
async listSHGExpenses(@Req() request: Request) {
return this.ujsService.UJSSHGExpensesList(request);
}
// ------------------------ shg loan repayment-----------------------------------------
// add shg loan repayment
@Post("AddShgLoanRepayment")
  @UseGuards(JwtAuthGuard)
  async UJSShgLoanRepaymentAdd(
    @Req() request: Request,
    @Body() ujsShgLoanRepaymentDTO: UJSSHGLoanRepaymentDTO
  ) {
    return this.ujsService.UJSShgLoanRepaymentAdd(request, ujsShgLoanRepaymentDTO);
  }
  // list shg loan repayment
@Get('ListShgLoanRepayment')
@UseGuards(JwtAuthGuard)
async listShgLoanRepayment(@Req() request: Request) {
return this.ujsService.UJSShgLoanRepaymentList(request);
}
 }
