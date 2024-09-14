import {IsNotEmpty} from "class-validator";

export class CMSDisplayDeleteDTO{
    @IsNotEmpty()
    displayid:number

}