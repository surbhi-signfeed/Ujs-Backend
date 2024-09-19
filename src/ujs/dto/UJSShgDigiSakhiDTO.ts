import { IsNotEmpty,IsOptional,IsNumber,IsString } from "class-validator";

export class UJSShgDigiSakhiDTO {
    @IsNotEmpty()
    id: number;
  
   
    @IsString()
    state: string;
  
   
    @IsString()
    district: string;
  
   
    @IsString()
    block: string;
  
   
    @IsString()
    gp_name: string;
  
   
    @IsString()
    villege_name: string;
  
   
    @IsString()
    vle_name: string;
  
   
    @IsString()
    mobile: string;
  
   

    email: string;
  
   
    @IsString()
    application_ref_no: string;
  
   
    @IsString()
    cscId: string;
}
