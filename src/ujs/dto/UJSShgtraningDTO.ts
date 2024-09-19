import { IsNotEmpty } from "class-validator";
export class UJSSHGTraningDTO {
    @IsNotEmpty()
    id: number;
   meeting_id:number;
   animator_id:number;
   group_id:number;
   traning:string;
   traningDate:string;
   created_Date:string;
 
   
}
