import {IsNotEmpty} from "class-validator";

export class CMSResolutionDeleteDTO{
    @IsNotEmpty()
    resolutionID:number
}