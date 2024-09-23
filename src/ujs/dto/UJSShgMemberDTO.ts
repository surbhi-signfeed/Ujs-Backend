import { IsNotEmpty ,IsOptional} from "class-validator";

export class UJSShgMemberDTO {
    @IsNotEmpty()
    id: number;


    row_arrangement: number;

    @IsOptional()
    shg_id: string;

    @IsOptional()
    member_name: string;

    @IsOptional()
    member_name_eng: string;

  

    @IsOptional()
    group_name: string;

    @IsOptional()
    animator_id: number;

    @IsOptional()
    animator_name: string;

    @IsOptional()
    leader_name: string;

    @IsOptional()
    HusbandFather_Name: string;

    @IsOptional()
    village: string;

    @IsOptional()
    mobile: string;

    @IsOptional()
    whatsapp_number: string;

    @IsOptional()
    email: string;

    @IsOptional()
    adhaar_number: string;

    @IsOptional()
    gender: string;

    @IsOptional()
    dob: string;

    @IsOptional()
    education: string;

    @IsOptional()
    primary_occu: string;

    @IsOptional()
    religion: string;

    @IsOptional()
    house_num: string;

    @IsOptional()
    block_taluk: string;

    @IsOptional()
    gram_punchayat: string;

    @IsOptional()
    state: string;

    @IsOptional()
    district: string;

    @IsOptional()
    pincode: string;

    @IsOptional()
    bank_name: string;

    @IsOptional()
    branch_name: string;

    @IsOptional()
    bank_ac: string;

    @IsOptional()
    bank_ifsc: string;

    @IsOptional()
    aadhar_seeding_status: string;

    @IsOptional()
    voter_num: string;

    @IsOptional()
    mngrega_num: string;

    @IsOptional()
    sub_cat: string;

    @IsOptional()
    loan_taken: string;

    @IsOptional()
    mfi_bank_loan: string;

    @IsOptional()
    annual_income: string;

    @IsOptional()
    diff_abled: string;

    @IsOptional()
    total_household_member: string;

    @IsOptional()
    member_status: string;

    @IsOptional()
    social_strata: string;

    @IsOptional()
    house_hold_above: string;

    @IsNotEmpty()
    status: number;

    @IsOptional()
    monthlySaving: number;

    @IsOptional()
    fedrationSaving: number;

    @IsOptional()
    updated_at: Date;

    @IsNotEmpty()
    openingBal: number;

    @IsNotEmpty()
    fix_loan: number;
  
}

