import {IsNotEmpty} from "class-validator";

export class CMSDisplayAuthorizeDTO{
    @IsNotEmpty()
    displayId:number
    @IsNotEmpty()
    licensed:number
}