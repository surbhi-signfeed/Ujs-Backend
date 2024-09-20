import {IsNotEmpty,IsOptional} from "class-validator";

export class UJSShgOtherIncomeDTO{
    @IsOptional()
  
    id?: number;
  
    @IsOptional()
   
    meeting_id?: string;
  
    @IsOptional()
  
    group_id?: number;
  
    @IsOptional()
  
    animator_id?: number;
  
    @IsOptional()
  
    member_id?: number;
  
    @IsOptional()
   
    group_name?: string;
  
    @IsOptional()
   
    animator_name?: string;
  
    @IsOptional()
   
    member_name?: string;
  
    @IsOptional()
   
    income?: string;
  
    @IsNotEmpty()
   
    datetime: Date;
  
 
    
    
}