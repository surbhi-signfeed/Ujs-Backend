import {IsNotEmpty} from "class-validator";

export class AdminUserLoginDTO {
  @IsNotEmpty()
  username: string
  @IsNotEmpty()
  password: string

}