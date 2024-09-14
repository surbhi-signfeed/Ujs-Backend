import {IsNotEmpty} from "class-validator";

export class AdminResetUserPasswordDTO {
  @IsNotEmpty()
  id: number
  @IsNotEmpty()
  password: string

}