import { IsNotEmpty } from "class-validator";

export class UJSShgMemberDTO {
    @IsNotEmpty()
    group_id: string;
    @IsNotEmpty()
    group_name: string;
    member_name: string;
    leader_name: string;
    state_name: string;
    district_name: string;
    village_name: string;
    gender: string;
    dob: string; // Date of birth, stored as string for simplicity (format: YYYY-MM-DD)
    husband_or_father_name: string;
    block_taluka: string;
    mobile: string;
    whatsapp: string;
    email: string;
    education: string;
    primary_occupation: string;
    religion: string;
    aadhar_number: string;
    voter_number: string;
    mnrega_number: string;
    house_number: string;
    pin_code: string;
    gram_panchayat: string;
    bank_name: string;
    bank_branch: string;
    bank_account: string;
    bank_ifsc: string;
    aadhar_seeding_status: string;
    loan_taken: string;
    mfi_bank_loan: string;
    annual_income: number;
    total_household_member: number;
    total_monthly_saving: number;
    total_federation_saving: number;
    category: string;
    differently_abled: string;
    status: string; // Active/Inactive, assuming it is a string for dropdown
}

