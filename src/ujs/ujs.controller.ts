import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  Post,
  Req,
  UseGuards,
  UploadedFile,
  UseInterceptors,
  Param,
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
import { UJSStateDTO } from "./dto/UJSStateDTO";
import { UJSSHGTraningDTO } from "./dto/UJSShgtraningDTO";
import { UJSSHGActiveModelFarmerDTO } from "./dto/UJSShgActiveModelFarmerDTO";
import { UJSShgAttendanceDTO } from "./dto/UJSShgAttendanceDTO";
import { UJSShgContactDTO } from "./dto/UJSShgContactDTO";
import { UJSShgDataLockDTO } from "./dto/UJSShgDataLockDTO";
import { UJSBankAllotmentDTO } from "./dto/UJSSHgBankAllotmentDTO";
import { UJSBankLoanDTO } from "./dto/UJSSBankLoanDTO";
import { UJSBankDTO } from "./dto/UJSSBankDTO";
import { UJSShgAuditingDTO } from "./dto/UJSShgAuditingDTO";
import { UJSShgDataUploadDTO } from "./dto/UJSShgDataUploadDTO";
import { UJSShgDigiSakhiDTO } from "./dto/UJSShgDigiSakhiDTO";
import { UJSShgFpoDTO } from "./dto/UJSShgFpoDTO";
import { UJSSHGFedrationReportDTO } from "./dto/UJSShgFedrationReportDTO";
import { UJSSHGFedrationDTO } from "./dto/UJSShgFedrationDTO";
import { UJSShgMomDTO } from "./dto/UJSShgMomDTO";
import { UJSShgGroupDataUploadMonthDTO } from "./dto/UJSShgGroupDataUploadMonthDTO";
import { UJSShgMemberSavingDTO } from "./dto/UJSSShgMemberSavingDTO";
import { UJSShgGroupDetailsInfoDTO } from "./dto/UJSShgGroupDetailsInfoDTO";
import { UJSShgGroupSummaryDTO } from "./dto/UJSGroupSummaryDTO";
import { UJSShgInternalLoanSummaryDTO } from "./dto/UJSInternalLOanSummaryDTO";
import { UJSShgLoanDTO } from "./dto/UJSShgLoanDTO";
import { UJSShgMeetingTrackDTO } from "./dto/UJSShgMeetingTrackDTO";
import { UJSShgOtherIncomeDTO } from "./dto/UJSShgOtherIncomeDTO";
import { UJSShgTillNowDataDTO } from "./dto/UJSShgTillNowDataDTO";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { Multer } from "multer";
import { UJSShgGroupUpdateDTO } from "./dto/UJSShgGroupUpdateDTO";
import { UJSShgGroupDeleteDTO } from "./dto/UJSShgGroupDeleteDTO";
import { UJSShgMemberUpdateDTO } from "./dto/UJSShgMemberUpdateDTO";
import { UJSShgMemberDeleteDTO } from "./dto/UJSShgMemberDeleteDTO";
import { UJSShgInternalLoanUpdateDTO } from "./dto/UJSInternalLoanUpdateDTO";
import { UJSShgInternalLoanDeleteDTO } from "./dto/UJSInternalLoanDeleteDTO";
import { UJSBankLoanUpdateDTO } from "./dto/UJSSBankLoanUpdateDTO";
import { UJSBankLoanDeleteDTO } from "./dto/UJSSBankLoanDeleteDTO";
@Controller("ujs")
export class UjsController {
  constructor(
    private readonly ujsService: UjsService,
    @Inject(Logger) private readonly logger: Logger
  ) { }
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
  // update shg group
  @Post("UpdateShgGroup")
  @UseGuards(JwtAuthGuard)
  async UJSShgGroupUpdate(
    @Req() request: Request,
    @Body() ujsShgGroupUpdateDTO: UJSShgGroupUpdateDTO
  ) {
    return this.ujsService.UJSShgGroupUpdate(
      request,
      ujsShgGroupUpdateDTO
    );
  }
  // delete shg group
  @Post("DeleteShgGroup")
  @UseGuards(JwtAuthGuard)
  async UJSShgGroupDelete(
    @Req() request: Request,
    @Body() ujsSjhGroupDeleteDTO: UJSShgGroupDeleteDTO
  ) {
    return this.ujsService.UJSShgGroupDelete(
      request,
      ujsSjhGroupDeleteDTO
    );
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
  // update shg Member
  @Post("UpdateShgMember")
  @UseGuards(JwtAuthGuard)
  async UJSShgMemberUpdate(
    @Req() request: Request,
    @Body() ujsShgMemberUpdateDTO: UJSShgMemberUpdateDTO
  ) {
    return this.ujsService.UJSShgMemberUpdate(
      request,
      ujsShgMemberUpdateDTO
    );
  }
  // delete shg Member
  @Post("DeleteShgMember")
  @UseGuards(JwtAuthGuard)
  async UJSShgMemberDelete(
    @Req() request: Request,
    @Body() ujsSjhMemberDeleteDTO: UJSShgMemberDeleteDTO
  ) {
    return this.ujsService.UJSShgMemberDelete(
      request,
      ujsSjhMemberDeleteDTO
    );
  }
  // ------------------------Users -----------------------------------------
  // add Users

  @Post("AddUsers")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('student_img'))
  async UJSUserAdd(
    @UploadedFile() student_img: Multer.File,
    @Req() request: Request,
    @Body() ujsUserDTO: UJSUsersDTO
  ) {
    return this.ujsService.UJSUserAdd(request, ujsUserDTO, student_img);
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
  @Get('ListAllRolePermission')
  @UseGuards(JwtAuthGuard)
  async listRoleAll(@Req() request: Request) {
    return this.ujsService.UJSRoleAllList(request);
  }
  // list of permission detail
  @Get('ListRolePermission/:id')
  @UseGuards(JwtAuthGuard)
  async listRolePermissionList(@Param('id') id: string, @Req() request: Request) {
    return this.ujsService.UJSRolePermissionList(id);  // Only 'id' is passed here, not 'request'
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

  // ------------------------ state-----------------------------------------
  // add state
  @Post("AddState")
  @UseGuards(JwtAuthGuard)
  async UJSStateAdd(
    @Req() request: Request,
    @Body() ujsStateDTO: UJSStateDTO
  ) {
    return this.ujsService.UJSStateAdd(request, ujsStateDTO);
  }
  // list state
  @Get('ListState')
  @UseGuards(JwtAuthGuard)
  async listState(@Req() request: Request) {
    return this.ujsService.UJSStateList(request);
  }

  // ------------------------ -----shg traning------------------------------------
  // add shg traning
  @Post("AddShgTraning")
  @UseGuards(JwtAuthGuard)
  async UJSShgTraningAdd(
    @Req() request: Request,
    @Body() ujsShgTraningDTO: UJSSHGTraningDTO
  ) {
    return this.ujsService.UJSShgTraningAdd(request, ujsShgTraningDTO);
  }
  // list shg tarning
  @Get('ListShgTraning')
  @UseGuards(JwtAuthGuard)
  async listShgTraning(@Req() request: Request) {
    return this.ujsService.UJSShgTraningList(request);
  }
  // ------------------------ -----farmem model active------------------------------------
  // add farmem model active
  @Post("AddShgActiveModelFarmer")
  @UseGuards(JwtAuthGuard)
  async UJSShgActiveModelFarmerAdd(
    @Req() request: Request,
    @Body() ujsShgActiveModelFarmerDTO: UJSSHGActiveModelFarmerDTO
  ) {
    return this.ujsService.UJSShgActiveModelFarmerAdd(request, ujsShgActiveModelFarmerDTO);
  }
  // list farmem model active
  @Get('ListShgActiveModelFarmer')
  @UseGuards(JwtAuthGuard)
  async listShgActiveModelFarmer(@Req() request: Request) {
    return this.ujsService.UJSShgActiveModelFarmerList(request);
  }
  // ------------------------ ---- attendance------------------------------------
  // add attendance
  @Post("AddShgAttendance")
  @UseGuards(JwtAuthGuard)
  async UJSShgAttendanceAdd(
    @Req() request: Request,
    @Body() ujsShgAttendanceDTO: UJSShgAttendanceDTO
  ) {
    return this.ujsService.UJSShgAttendanceAdd(request, ujsShgAttendanceDTO);
  }
  // list attendance
  @Get('ListShgAttendance')
  @UseGuards(JwtAuthGuard)
  async listShgAttendance(@Req() request: Request) {
    return this.ujsService.UJSShgAttendanceList(request);
  }
  // ------------------------ ---- sgf contact------------------------------------
  // add sgf contact
  @Post("AddShgContact")
  @UseGuards(JwtAuthGuard)
  async UJSShgContactAdd(
    @Req() request: Request,
    @Body() ujsShgContactDTO: UJSShgContactDTO
  ) {
    return this.ujsService.UJSShgContactAdd(request, ujsShgContactDTO);
  }
  // list sgf contact
  @Get('ListShgContact')
  @UseGuards(JwtAuthGuard)
  async listShgContact(@Req() request: Request) {
    return this.ujsService.UJSShgContactList(request);
  }
  // ------------------------ ---- shg data lockt------------------------------------
  // add shg data lock
  @Post("AddShgDataLock")
  @UseGuards(JwtAuthGuard)
  async UJSShgDataLockAdd(
    @Req() request: Request,
    @Body() ujsShgDataLockDTO: UJSShgDataLockDTO
  ) {
    return this.ujsService.UJSShgDataLockAdd(request, ujsShgDataLockDTO);
  }
  // list shg data lock
  @Get('ListShgDataLock')
  @UseGuards(JwtAuthGuard)
  async listShgDataLock(@Req() request: Request) {
    return this.ujsService.UJSShgDataLockList(request);
  }
  // ------------------------ ---- bank loan allotment------------------------------------
  // add bank loan allotment
  @Post("AddBankLoanAllotment")
  @UseGuards(JwtAuthGuard)
  async UJSShgBankLoanAllotmentAdd(
    @Req() request: Request,
    @Body() ujsShgBankLoanAllotmentDTO: UJSBankAllotmentDTO
  ) {
    return this.ujsService.UJSShgBankLoanAllotmentAdd(request, ujsShgBankLoanAllotmentDTO);
  }
  // list bank loan allotment
  @Get('ListBankLoanAllotment')
  @UseGuards(JwtAuthGuard)
  async listShgBankLoanAllotment(@Req() request: Request) {
    return this.ujsService.UJSShgBankLoanAllotmentList(request);
  }
  // ------------------------ ---- bank loan ------------------------------------
  // add bank loan 
  @Post("AddBankLoan")
  @UseGuards(JwtAuthGuard)
  async UJSShgBankLoanAdd(
    @Req() request: Request,
    @Body() ujsShgBankLoanDTO: UJSBankLoanDTO
  ) {
    return this.ujsService.UJSShgBankLoanAdd(request, ujsShgBankLoanDTO);
  }
  // list bank loan 
  @Get('ListBankLoan')
  @UseGuards(JwtAuthGuard)
  async listShgBankLoan(@Req() request: Request) {
    return this.ujsService.UJSShgBankLoanList(request);
  }
  // update bank loan
  @Post("UpdateShgBankLoan")
  @UseGuards(JwtAuthGuard)
  async UJSShgBankLoanUpdate(
    @Req() request: Request,
    @Body() ujsShgBankLoanUpdateDTO: UJSBankLoanUpdateDTO
  ) {
    return this.ujsService.UJSBankLoanUpdate(
      request,
      ujsShgBankLoanUpdateDTO
    );
  }
  // delete bank loan
  @Post("DeleteShgBankLoan")
  @UseGuards(JwtAuthGuard)
  async UJSShgBankLoanDelete(
    @Req() request: Request,
    @Body() ujsShgBankLoanDeleteDTO: UJSBankLoanDeleteDTO
  ) {
    return this.ujsService.UJSBankLoanDelete(
      request,
      ujsShgBankLoanDeleteDTO
    );
  }
  // ------------------------ ---- bank  ------------------------------------
  // add bank 
  @Post("AddShgBank")
  @UseGuards(JwtAuthGuard)
  async UJSShgBankAdd(
    @Req() request: Request,
    @Body() ujsShgBankDTO: UJSBankDTO
  ) {
    return this.ujsService.UJSShgBankAdd(request, ujsShgBankDTO);
  }
  // list bank
  @Get('ListBank')
  @UseGuards(JwtAuthGuard)
  async listShgBank(@Req() request: Request) {
    return this.ujsService.UJSShgBankList(request);
  }
  // ------------------------ ---- shg auditing  ------------------------------------
  // add shg auditing 
  @Post("AddShgAuditing")
  @UseGuards(JwtAuthGuard)
  async UJSShgAuditingAdd(
    @Req() request: Request,
    @Body() ujsShgAuditingDTO: UJSShgAuditingDTO
  ) {
    return this.ujsService.UJSShgAuditingAdd(request, ujsShgAuditingDTO);
  }
  // list shg auditing
  @Get('ListAuditing')
  @UseGuards(JwtAuthGuard)
  async listShgAuditing(@Req() request: Request) {
    return this.ujsService.UJSShgAuditingList(request);
  }
  // ------------------------ --- data upload  ------------------------------------
  // add data upload
  @Post("AddShgDataUpload")
  @UseGuards(JwtAuthGuard)
  async UJSShgDataUploadAdd(
    @Req() request: Request,
    @Body() ujsShgDataUploadDTO: UJSShgDataUploadDTO
  ) {
    return this.ujsService.UJSShgDataUploadAdd(request, ujsShgDataUploadDTO);
  }
  // lis data upload
  @Get('ListDataUpload')
  @UseGuards(JwtAuthGuard)
  async listShgDataUpload(@Req() request: Request) {
    return this.ujsService.UJSShgDataUploadList(request);
  }
  // ------------------------ --- digi sakhi  ------------------------------------
  // add digi sakhi
  @Post("AddShgDigiSakhi")
  @UseGuards(JwtAuthGuard)
  async UJSShgDigiSakhiAdd(
    @Req() request: Request,
    @Body() ujsShgDigiSakhiDTO: UJSShgDigiSakhiDTO
  ) {
    return this.ujsService.UJSShgDigiSakhiAdd(request, ujsShgDigiSakhiDTO);
  }
  // lis digi sakhi
  @Get('ListDigiSakhi')
  @UseGuards(JwtAuthGuard)
  async listShgDigiSakhi(@Req() request: Request) {
    return this.ujsService.UJSShgDigiSakhiList(request);
  }
  // ------------------------ --- Fpo  ------------------------------------
  // add Fpo
  @Post("AddShgFpo")
  @UseGuards(JwtAuthGuard)
  async UJSShgFpoAdd(
    @Req() request: Request,
    @Body() ujsShgFpoDTO: UJSShgFpoDTO
  ) {
    return this.ujsService.UJSShgFpoAdd(request, ujsShgFpoDTO);
  }
  // list Fpo
  @Get('ListShgFpo')
  @UseGuards(JwtAuthGuard)
  async listShgFpo(@Req() request: Request) {
    return this.ujsService.UJSShgFpoList(request);
  }
  // ------------------------ --- Fedration  ------------------------------------
  // add Fedration Report
  @Post("AddShgFedrationReport")
  @UseGuards(JwtAuthGuard)
  async UJSShgFedrationReportAdd(
    @Req() request: Request,
    @Body() ujsShgFedrationReportDTO: UJSSHGFedrationReportDTO
  ) {
    return this.ujsService.UJSShgFedrationReportAdd(request, ujsShgFedrationReportDTO);
  }
  // list Fedration Report
  @Get('ListShgFedrationReport')
  @UseGuards(JwtAuthGuard)
  async listShgFedrationReport(@Req() request: Request) {
    return this.ujsService.UJSShgFedrationReportList(request);
  }
  // ------------------------ --- Fedration  ------------------------------------
  // add Fedration 
  @Post("AddShgFedration")
  @UseGuards(JwtAuthGuard)
  async UJSShgFedrationAdd(
    @Req() request: Request,
    @Body() ujsShgFedrationDTO: UJSSHGFedrationDTO
  ) {
    return this.ujsService.UJSShgFedrationAdd(request, ujsShgFedrationDTO);
  }
  // list Fedration
  @Get('ListShgFedration')
  @UseGuards(JwtAuthGuard)
  async listShgFedration(@Req() request: Request) {
    return this.ujsService.UJSShgFedrationList(request);
  }
  // ------------------------ ---shg mom  ------------------------------------
  // add shg mom
  @Post("AddShgMom")
  @UseGuards(JwtAuthGuard)
  async UJSShgMomAdd(
    @Req() request: Request,
    @Body() ujsShgMomDTO: UJSShgMomDTO
  ) {
    return this.ujsService.UJSShgMomAdd(request, ujsShgMomDTO);
  }
  // listshg mom
  @Get('ListShgMom')
  @UseGuards(JwtAuthGuard)
  async listShgMom(@Req() request: Request) {
    return this.ujsService.UJSShgMomList(request);
  }
  // ------------------------ ---GroupDataUpload  ------------------------------------
  // add GroupDataUpload
  @Post("AddShgGroupDataUpload")
  @UseGuards(JwtAuthGuard)
  async UJSShgGroupDataUploadMonthAdd(
    @Req() request: Request,
    @Body() ujsShgGroupDataUploadMonthDTO: UJSShgGroupDataUploadMonthDTO
  ) {
    return this.ujsService.UJSShgGroupDataUploadMonthAdd(request, ujsShgGroupDataUploadMonthDTO);
  }
  // listGroupDataUpload
  @Get('ListShgGroupDataUpload')
  @UseGuards(JwtAuthGuard)
  async listShgGroupDataUploadMonth(@Req() request: Request) {
    return this.ujsService.UJSShgGroupDataUploadMonthList(request);
  }
  // ------------------------ ---Member saving  ------------------------------------
  // add Member saving
  @Post("AddShgMemberSaving")
  @UseGuards(JwtAuthGuard)
  async UJSShgMemberSavingAdd(
    @Req() request: Request,
    @Body() ujsShgMemberSavingDTO: UJSShgMemberSavingDTO
  ) {
    return this.ujsService.UJSShgMemberSavingAdd(request, ujsShgMemberSavingDTO);
  }
  // listMember saving
  @Get('ListShgMemberSaving')
  @UseGuards(JwtAuthGuard)
  async listShgMemberSaving(@Req() request: Request) {
    return this.ujsService.UJSShgMemberSavingList(request);
  }
  // ------------------------ ---Group Details info   ------------------------------------
  // add Group Details info 
  @Post("AddShgGroupDetailInfo")
  @UseGuards(JwtAuthGuard)
  async UJSShgGroupDetailInfoAdd(
    @Req() request: Request,
    @Body() ujsShgGroupDetailsInfoDTO: UJSShgGroupDetailsInfoDTO
  ) {
    return this.ujsService.UJSShgGroupDetailInfoAdd(request, ujsShgGroupDetailsInfoDTO);
  }
  // listGroup Details info 
  @Get('ListShgGroupDetailInfo')
  @UseGuards(JwtAuthGuard)
  async listShgGroupDetailInfo(@Req() request: Request) {
    return this.ujsService.UJSShgGroupDetailInfoList(request);
  }
  // ------------------------ ---Groupsummary   ------------------------------------
  // add Group summary
  @Post("AddShgGroupSummary")
  @UseGuards(JwtAuthGuard)
  async UJSShgGroupSummaryAdd(
    @Req() request: Request,
    @Body() ujsShgGroupDSummaryDTO: UJSShgGroupSummaryDTO
  ) {
    return this.ujsService.UJSShgGroupSummaryAdd(request, ujsShgGroupDSummaryDTO);
  }
  // listGroupsummary 
  @Get('ListShgGroupSummary')
  @UseGuards(JwtAuthGuard)
  async listShgGroupSummary(@Req() request: Request) {
    return this.ujsService.UJSShgGroupSummaryList(request);
  }
  // ------------------------ --Internal Loan Summary   ------------------------------------
  // add Internal Loan Summary
  @Post("AddShgInternalLoanSummary")
  @UseGuards(JwtAuthGuard)
  async UJSShInternalLoanSummaryAdd(
    @Req() request: Request,
    @Body() ujsShgInternalLoanSummaryDTO: UJSShgInternalLoanSummaryDTO
  ) {
    return this.ujsService.UJSShgInternalLoanSummaryAdd(request, ujsShgInternalLoanSummaryDTO);
  }
  // listInternal Loan Summary
  @Get('ListShgInternalLoanSummary')
  @UseGuards(JwtAuthGuard)
  async listSInternalLoanSummary(@Req() request: Request) {
    return this.ujsService.UJSShgInternalLoanSummaryList(request);
  }
  // update internal loan
  @Post("UpdateShgInternalLoan")
  @UseGuards(JwtAuthGuard)
  async UJSShgInternalLoanUpdate(
    @Req() request: Request,
    @Body() ujsShgInternalLoanUpdateDTO: UJSShgInternalLoanUpdateDTO
  ) {
    return this.ujsService.UJSShgInternalLoanUpdate(
      request,
      ujsShgInternalLoanUpdateDTO
    );
  }
  // delete internal loan
  @Post("DeleteShgInternalLoan")
  @UseGuards(JwtAuthGuard)
  async UJSShgInternalLoanDelete(
    @Req() request: Request,
    @Body() ujsShgInternalLoanDeleteDTO: UJSShgInternalLoanDeleteDTO
  ) {
    return this.ujsService.UJSShgInternalLoanDelete(
      request,
      ujsShgInternalLoanDeleteDTO
    );
  }
  // ------------------------ --shg loan   ------------------------------------
  // add shg loan
  @Post("AddShgLoan")
  @UseGuards(JwtAuthGuard)
  async UJSShgLoanAdd(
    @Req() request: Request,
    @Body() ujsShggLoanDTO: UJSShgLoanDTO
  ) {
    return this.ujsService.UJSShgLoanAdd(request, ujsShggLoanDTO);
  }
  // listshg loan
  @Get('ListShgLoan')
  @UseGuards(JwtAuthGuard)
  async listSgLoan(@Req() request: Request) {
    return this.ujsService.UJSShgLoanList(request);
  }
  // ------------------------ -- Meeting track   ------------------------------------
  // add  Meeting track
  @Post("AddShgMeetingTrack")
  @UseGuards(JwtAuthGuard)
  async UJSShgMeetingTrackAdd(
    @Req() request: Request,
    @Body() ujsShgMeetingTrackDTO: UJSShgMeetingTrackDTO
  ) {
    return this.ujsService.UJSShgMeetingTrackAdd(request, ujsShgMeetingTrackDTO);
  }
  // list Meeting track
  @Get('ListShgMeetingTrack')
  @UseGuards(JwtAuthGuard)
  async listSgMeetingTrack(@Req() request: Request) {
    return this.ujsService.UJSShgMeetingTrackList(request);
  }
  // ------------------------ -- other income   ------------------------------------
  // add  other income
  @Post("AddShgOtherIncome")
  @UseGuards(JwtAuthGuard)
  async UJSShgOtherIncomeAdd(
    @Req() request: Request,
    @Body() ujsShgOtherIncomeDTO: UJSShgOtherIncomeDTO
  ) {
    return this.ujsService.UJSShgOtherIncomeAdd(request, ujsShgOtherIncomeDTO);
  }
  // list other income
  @Get('ListShgOtherIncome')
  @UseGuards(JwtAuthGuard)
  async listSgOtherIncome(@Req() request: Request) {
    return this.ujsService.UJSShgOtherIncomeList(request);
  }
  // ------------------------ -- Till Now Data   ------------------------------------
  // add  Till Now Data
  @Post("AddShgTillNowData")
  @UseGuards(JwtAuthGuard)
  async UJSShgTillNowDataAdd(
    @Req() request: Request,
    @Body() ujsShgTillNowDataDTO: UJSShgTillNowDataDTO
  ) {
    return this.ujsService.UJSShgTillNowDataAdd(request, ujsShgTillNowDataDTO);
  }
  // list Till Now Data
  @Get('ListShgTillNowData')
  @UseGuards(JwtAuthGuard)
  async listSgTillNowData(@Req() request: Request) {
    return this.ujsService.UJSShgTillNowDataList(request);
  }
}
