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
 }
