import {IsNotEmpty} from "class-validator";

export class CMSContactUsDTO{
  
    name:string
    email:string
    organization:string
    message:string
}