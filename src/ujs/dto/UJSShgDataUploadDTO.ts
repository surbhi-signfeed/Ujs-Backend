import { IsNotEmpty,IsOptional,IsNumber,IsString } from "class-validator";

export class UJSShgDataUploadDTO {
    @IsNotEmpty()
    id: number;

    @IsOptional()
    @IsNumber()
    group_id?: number;

    @IsOptional()
    @IsNumber()
    member_id?: number;

    @IsOptional()
    @IsString()
    member_name?: string;

    @IsOptional()
    @IsString()
    HusbandFather_Name?: string;

    @IsOptional()
    @IsString()
    attendance?: string;

    @IsOptional()
    
    opening?: number;

    @IsOptional()
    
    saving?: number;

    @IsOptional()
    
    special_saving?: number;

    @IsOptional()
    
    installment?: number;

    @IsOptional()
    
    interest?: number;

    @IsOptional()
    
    penalty?: number;

    @IsNotEmpty()
    
    fix_loan: number;

    @IsOptional()
    
    bank_loan?: number;

    @IsOptional()
    
    bank_interest?: number;

    @IsOptional()
    
    new_loan?: number;

    @IsOptional()
    
    remaining_loan?: number;

    @IsOptional()
  
    meeting_date?: Date;

    @IsOptional()
    @IsString()
    meeting_id?: string;

    @IsNotEmpty()
  
    datetime: Date;

    @IsNotEmpty()
    
    openingBal: number;

    @IsNotEmpty()
    
    fixLoan: number;
}
