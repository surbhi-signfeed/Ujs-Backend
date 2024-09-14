import { IsNotEmpty } from "class-validator";

export class CMSPermissionDTO {
    @IsNotEmpty()
    id:number
    PermissionName :string
    ModuleId:string
    ModuleName :string
  UserID: number;
    
}
