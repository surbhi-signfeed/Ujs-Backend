import { IsNotEmpty } from "class-validator";
export class UJSShgAuditingDTO {
    @IsNotEmpty()
    id: number;
    meeting_id:string;
    animator_id:number;
    auditor_name:string;
    group_id:number;
    fromdate:Date;
    todate:Date;
    auditdate:Date;
    created_date:Date;
 
   
}
