import {IsNotEmpty} from "class-validator";

export class AdminUserDetailDTO {
  @IsNotEmpty()
  user_id: number

}