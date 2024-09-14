import {IsNotEmpty} from "class-validator";

export class CMSDisplayGroupDeleteDTO{
    @IsNotEmpty()
    DisplayGroupID:number
}