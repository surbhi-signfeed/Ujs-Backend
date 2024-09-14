import {IsNotEmpty} from "class-validator";

export class CMSLayoutDetailDTO{
    @IsNotEmpty()
    layoutid:number
}