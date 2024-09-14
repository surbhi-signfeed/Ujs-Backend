import {IsNotEmpty} from "class-validator";

export class CMSLayoutUpdateDTO{
    @IsNotEmpty()
    layoutID:number
    @IsNotEmpty()
  
    description:string
    tags:string
    retired:number
    enableStat:number
    backgroundColor:string
  layout: string;
}