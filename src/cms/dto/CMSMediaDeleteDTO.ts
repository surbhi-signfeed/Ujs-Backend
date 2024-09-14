import {IsNotEmpty} from "class-validator";

export class CMSMediaDeleteDTO{
    @IsNotEmpty()
    mediaID:number
}