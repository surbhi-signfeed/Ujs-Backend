import {IsNotEmpty} from "class-validator";

export class CMSLayoutDTO{
    @IsNotEmpty()
    name:string
    description:string
    @IsNotEmpty()
    resolutionId:number
    templateID:string
    tags:string
    organization:string
}