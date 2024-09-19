import { IsNotEmpty } from "class-validator";
export class UJSShgDataLockDTO {
    @IsNotEmpty()
    id: number;
    group_id: number;
    lock_date:Date;
    transaction:string;
    status:boolean;
    updatedAt:Date

}
