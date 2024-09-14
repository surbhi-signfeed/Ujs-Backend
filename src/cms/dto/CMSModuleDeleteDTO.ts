import {IsNotEmpty} from "class-validator";

export class CMSModuleDeleteDTO{
    @IsNotEmpty()
    ModuleID:number

}