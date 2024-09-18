import { IsNotEmpty, IsOptional, IsInt, IsString, IsDecimal, IsDate, IsNumber } from 'class-validator';

export class UJSSHGLoanRepaymentDTO {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsOptional()
  @IsString()
  meeting_id?: string;

  @IsNotEmpty()
  @IsDecimal()
  emi_amount: number;

  @IsNotEmpty()
  @IsDecimal()
  interest: number;

  @IsOptional()
  @IsInt()
  member_id?: number;

  @IsOptional()
  @IsString()
  member_name?: string;

  @IsOptional()
  @IsInt()
  group_id?: number;

  @IsOptional()
  @IsInt()
  animator_id?: number;

  @IsOptional()
  @IsInt()
  emi_no?: number;

  @IsNotEmpty()
  @IsDate()
  emi_date: Date;

  @IsOptional()
  @IsDate()
  meetingDate?: Date;
}
