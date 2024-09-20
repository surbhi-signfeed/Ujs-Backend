import { IsNotEmpty,IsOptional } from "class-validator";

export class UJSShgGroupDTO {
    @IsNotEmpty()
    id: number;

    @IsOptional()
   
    shg_id: string;

    @IsOptional()
   
    group_name: string;

    @IsOptional()
   
    group_leader: string;

    @IsOptional()
   
    state: string;

    @IsOptional()
   
    district: string;

    @IsOptional()
   
    location: string;

    @IsOptional()
   
    village: string;

    @IsOptional()
   
    block_taluk: string;

    @IsOptional()
   
    pincode: string;
    @IsOptional()
   
    updatedAt: Date;

    @IsOptional()
   
    animator_id: number;

    @IsOptional()
   
    animator: string;

    @IsOptional()
   
    bank_name: string;

    @IsOptional()
   
    bank_branch: string;

    @IsOptional()
   
    bank_ac: string;

    @IsOptional()
   
    formationDate: string;

    @IsOptional()
   
    fed_amt: string;

    @IsOptional()
   
    cashatbank: string;

    @IsOptional()
   
    amount: string;

    @IsOptional()
   
    totalMember: string;

    @IsOptional()
   
    transactionstatus: number;

    @IsOptional()
   
    month: number;

    @IsOptional()
   
    monthlymeeting: Date;

    @IsNotEmpty()
   
    status: number;

    @IsOptional()
    
    TotalmonthlySaving: number;

    @IsOptional()
   
    totalMeeting: number;

    @IsOptional()
    
    savingAmt: number;

    @IsOptional()
    
    totalInternalLoan: number;

    @IsOptional()
    
    totalInternalLoanRecover: number;

    @IsOptional()
    
    totalInternalLoanInterest: number;

    @IsOptional()
    
    totalExpanses: number;

    @IsOptional()
    
    TotalBankLoan: number;

    @IsOptional()
    
    totalbankloanrecover: number;

    @IsOptional()
    
    TotalBankLoanInterest: number;
}
