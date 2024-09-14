import {IsNotEmpty} from "class-validator";

export class CMSWidgetOptionsDTO{
    @IsNotEmpty()
    id:number
}