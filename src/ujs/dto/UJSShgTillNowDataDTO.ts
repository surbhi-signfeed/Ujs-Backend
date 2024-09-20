import {IsNotEmpty,IsOptional} from "class-validator";

export class UJSShgTillNowDataDTO{
    @IsOptional()
 
  id?: number;

  @IsOptional()
 
  group_id?: number;

  @IsOptional()
 
  meeting_id?: number;

  @IsOptional()
 
  meeting_date?: Date;

  @IsOptional()

  member_saving?: number;

  @IsOptional()

  internal_income?: number;

  @IsOptional()

  submit_bank_loan?: number;

  @IsOptional()

  internal_amt1?: number;

  @IsOptional()

  penalty1?: number;

  @IsNotEmpty()

  fix_loan2: number;

  @IsOptional()

  special_amt1?: number;

  @IsOptional()

  others1?: number;

  @IsOptional()

  distributed?: number;

  @IsOptional()

  grp_expanses?: number;

  @IsOptional()

  tot_submitted?: number;

  @IsOptional()

  remaining_loan_amt?: number;

  @IsOptional()

  bank_saving_amt?: number;

  @IsOptional()

  cash_in_hand?: number;

  @IsOptional()

  federation1?: number;

  @IsNotEmpty()

  total_clf_amount: number;
 
    
    
}