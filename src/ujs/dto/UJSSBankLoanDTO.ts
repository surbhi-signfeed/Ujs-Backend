import { IsNotEmpty,IsOptional,IsInt } from "class-validator";
export class UJSBankLoanDTO {
    @IsOptional()
    @IsInt()
    id?: number;
  
    @IsOptional()
   
    loan_no?: string;
  
    @IsOptional()
   
    bank_name?: string;
  
    @IsOptional()
   
    meeting_id?: string;
  
    @IsOptional()
    @IsInt()
    group_id?: number;
  
    @IsOptional()
    @IsInt()
    member_id?: number;
  
    @IsOptional()
    @IsInt()
    animator_id?: number;
  
    @IsOptional()
   
    member_name?: string;
  
    @IsOptional()
   
    group_name?: string;
  
    @IsOptional()
   
    animator_name?: string;
  
    @IsOptional()
   
    loan_amt?: string;
  
    @IsOptional()
   
    interest_rate?: number;
  
    @IsOptional()
   
    interest?: number;
  
    @IsOptional()
   
    settle_interest?: number;
  
    @IsOptional()
   
    loan_period?: string;
  
    @IsNotEmpty()
 
    loan_date: Date;
  
    @IsOptional()
   
    loan_type?: string;
  
    @IsOptional()
   
    settle_amount?: number;
  
    @IsOptional()
   
    total_emi?: number;
  
    @IsOptional()
    @IsInt()
    current_emi?: number;
  
    @IsOptional()
  
    meetingDate?: Date;
 
   
}
