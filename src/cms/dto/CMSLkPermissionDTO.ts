import { IsNotEmpty } from "class-validator";

export class CMSLkPermissionDTO {
    @IsNotEmpty()
    id:number
  UserID:number
  Pid:number
  Status:number
    
}
