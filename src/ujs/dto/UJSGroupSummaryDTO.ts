import {IsNotEmpty,IsOptional} from "class-validator";

export class UJSShgGroupSummaryDTO{
    @IsNotEmpty()
    @IsOptional()

  id?: number;

  @IsOptional()

  total_shg?: number;

  @IsOptional()

  total_meeting?: number;

  @IsOptional()

  total_saving?: number;

  @IsOptional()

  total_federation?: number;

  @IsOptional()

  total_internal_loan?: number;

  @IsOptional()

  total_bank_loan?: number;
    
}