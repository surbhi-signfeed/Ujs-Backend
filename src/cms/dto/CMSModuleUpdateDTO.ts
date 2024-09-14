import {IsNotEmpty} from "class-validator";

export class CMSModuleUpdateDTO{
    @IsNotEmpty()
    ModuleID:number
    Module:string
    Name:string
    Enabled :number 
    RegionSpecific :number
     Description :string 
    ImageUri :string 
    SchemaVersion :number
    ValidExtensions :string 
    PreviewEnabled: number 
    assignable: number
     render_as :string 
    settings :string 
    viewPath :string 
    class :string 
    defaultDuration :number 
    installName :string
  
   }