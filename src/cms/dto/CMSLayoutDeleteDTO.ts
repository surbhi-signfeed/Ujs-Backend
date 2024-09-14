import {IsNotEmpty} from "class-validator";

export class CMSLayoutDeleteDTO{
    @IsNotEmpty()
    layoutID:number
}