import { IsNotEmpty } from "class-validator";
export class UJSRoleDTO {
    @IsNotEmpty()
    roll_id: number;
    role_name: string;
    status:string
 
   
}
