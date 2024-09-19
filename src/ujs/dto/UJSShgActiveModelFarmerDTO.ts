import { IsNotEmpty } from "class-validator";
export class UJSSHGActiveModelFarmerDTO {
    @IsNotEmpty()
    id: number;
    farmer_name: string;
    village:string;
    mobile:string
 
   
}
