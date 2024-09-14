import {IsNotEmpty} from "class-validator";

export class CMSDaypartDeleteDTO{
    @IsNotEmpty()
    dayPartId:number
}