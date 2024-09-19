import { IsNotEmpty, IsOptional, IsString, IsInt, IsDate, IsDecimal } from 'class-validator';
export class UJSBankAllotmentDTO {
    @IsOptional()
    @IsInt()
    id?: number;
  
    @IsNotEmpty()
    @IsInt()
    group_id: number;
  
    @IsOptional()
    @IsDate()
    Start_date?: Date;
  
    @IsOptional()
    @IsDate()
    End_date?: Date;
  
    @IsOptional()
    @IsString()
    shg_id?: string;
  
    @IsOptional()
    @IsString()
    group_name?: string;
  
    @IsOptional()
    @IsString()
    bank_name?: string;
  
    @IsOptional()
    @IsString()
    loan_no?: string;
  
    @IsOptional()
    @IsString()
    loan_type?: string;
  
    @IsOptional()
    @IsInt()
    totalEmi?: number;
  
    @IsOptional()
    @IsInt()
    remainingEmi?: number;
  
    @IsOptional()
   
    loan_amt?: number;
  
    @IsOptional()
   
    requested_loan_amt?: number;
  
    @IsOptional()
   
    interest_rate?: number;
  
    @IsOptional()
   
    interest?: number;
  
    @IsOptional()
   
    member_emi_amount?: number;
  
    @IsOptional()
    @IsString()
    settle_interest?: string;
  
    @IsOptional()
    @IsString()
    tenure?: string;
  
    @IsOptional()
   
    file_charge?: number;
  
    @IsOptional()
   
    fedration_charge?: number;
  
    @IsOptional()
   
    distribution_amt?: number;
  
    @IsOptional()
   
    total_int?: number;
  
    @IsOptional()
   
    settle_amt?: number;
  
    @IsOptional()
    @IsDate()
    loan_date?: Date;
  
    @IsOptional()
    @IsString()
    bank_ifsc?: string;
  
    @IsOptional()
    @IsDate()
    meetingDate?: Date;
  
    @IsOptional()
    @IsDate()
    sanctionDate?: Date;
  
    @IsOptional()
    @IsDate()
    distributionDate?: Date;
  
    @IsOptional()
    @IsInt()
    totalMember?: number;
  
    @IsOptional()
    @IsDate()
    updatedAt?: Date;
  
   
    status: boolean;
  
    @IsOptional()
    @IsDate()
    last_emi_collected_date?: Date;
 
   
}
