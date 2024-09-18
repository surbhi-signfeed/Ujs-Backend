import { IsNotEmpty } from "class-validator";
export class UJSUsersDTO {
    @IsNotEmpty()
    ID: string;
    name: string;
    mobile: string;
    email: string;
    password: string;
    emp_code: string;
    active: string;
    admin_app: string;
    role: string;
   shg_grp:string
}
