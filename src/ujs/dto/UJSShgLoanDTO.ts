import {IsNotEmpty,IsOptional} from "class-validator";

export class UJSShgLoanDTO{
    @IsOptional()
   
    id?: number;
  
    @IsOptional()
   
    meeting_id?: string;
  
    @IsOptional()
   
    loan_id?: string;
  
    @IsOptional()
   
    member_id?: number;
  
    @IsOptional()
   
    group_id?: number;
  
    @IsOptional()
   
    shg_id?: string;
  
    @IsOptional()
   
    animator_id?: number;
  
    @IsOptional()
   
    member_name?: string;
  
    @IsOptional()
   
    group_name?: string;
  
    @IsOptional()
   
    animator_name?: string;
  
    @IsOptional()
  
    loan_amt?: number;
  
    @IsOptional()
  
    interest?: number;
  
    @IsOptional()
  
    settle_interest?: number;
  
    @IsOptional()
   
    loan_period?: string;
  
    @IsOptional()
   
    loan_type?: string;
  
    @IsOptional()
  
    loan_date?: Date;
  
    @IsOptional()
  
    settle_amount?: number;
  
    @IsOptional()
   
    total_emi?: number;
  
    @IsOptional()
   
    current_emi?: number;
  
    @IsOptional()
  
    meetingDate?: Date;
  
    @IsOptional()
   
    status?: number;
    @IsOptional()
   
    update_at?: Date;
    
    
}