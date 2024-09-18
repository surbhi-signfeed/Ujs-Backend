import { IsNotEmpty, IsOptional, IsNumber, IsDateString } from "class-validator";

export class UJSBackupShgGroupDataUploadMonthDTO {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsNumber()
  group_id: number;

  @IsOptional()
  @IsNumber()
  meeting_id: number;

  @IsOptional()
  @IsDateString()
  meeting_date: string;

  @IsOptional()
  @IsNumber()
  last_remaining: number;

  @IsOptional()
  @IsNumber()
  tot_saving: number;

  @IsOptional()
  @IsNumber()
  internal_loan: number;

  @IsOptional()
  @IsNumber()
  internal_loan_int: number;

  @IsOptional()
  @IsNumber()
  bank_loan_amt: number;

  @IsOptional()
  @IsNumber()
  penalt_other: number;

  @IsNotEmpty()
  @IsNumber()
  fix_loan1: number;

  @IsOptional()
  @IsNumber()
  bank_loan_amt1: number;

  @IsOptional()
  @IsNumber()
  special_amt: number;

  @IsOptional()
  @IsNumber()
  internal_amt: number;

  @IsOptional()
  @IsNumber()
  grp_exp: number;

  @IsOptional()
  @IsNumber()
  tot_expanse: number;

  @IsOptional()
  @IsNumber()
  bank_loan_amt_sub: number;

  @IsOptional()
  @IsNumber()
  bank_saving: number;

  @IsOptional()
  @IsNumber()
  cash_inhand: number;

  @IsOptional()
  @IsNumber()
  federation: number;

  @IsOptional()
  @IsNumber()
  others: number;
}
