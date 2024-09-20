import {IsNotEmpty,IsOptional} from "class-validator";

export class UJSShgInternalLoanSummaryDTO{
    @IsOptional()
  
    id?: number;
  
    @IsOptional()
  
    group_id?: number;
  
    @IsOptional()
 
    shg_id?: string;
  
    @IsOptional()
 
    group_name?: string;
  
    @IsOptional()
   
    loan_amt?: number;
  
    @IsOptional()
  
    tenure?: number;
  
    @IsOptional()
   
    interest?: number;
  
    @IsOptional()
   
    recover_amt?: number;
  
    @IsOptional()
   
    datetime?: Date;
  
    @IsOptional()
  
    status?: number;
    
}