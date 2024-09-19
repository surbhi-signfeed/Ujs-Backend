import { IsNotEmpty } from "class-validator";
export class UJSShgContactDTO {
    @IsNotEmpty()
    id: number;
    name: string;
    email:string;
    mobile:string;
    subject:string;
    message:string;
    contactDate:Date;
 
   
}
