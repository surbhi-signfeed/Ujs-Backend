import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('SHG_Member')
export class UJSShgMemberEntity {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column({ name: 'group_id', type: 'varchar', length: 255 })
    group_id: string;

    @Column({ name: 'group_name', type: 'varchar', length: 255 })
    group_name: string;

    @Column({ name: 'member_name', type: 'varchar', length: 255 })
    member_name: string;

    @Column({ name: 'leader_name', type: 'varchar', length: 255 })
    leader_name: string;

    @Column({ name: 'state_name', type: 'varchar', length: 255 })
    state_name: string;

    @Column({ name: 'district_name', type: 'varchar', length: 255 })
    district_name: string;

    @Column({ name: 'village_name', type: 'varchar', length: 255 })
    village_name: string;

    @Column({ name: 'gender', type: 'varchar', length: 50 })
    gender: string;

    @Column({ name: 'dob', type: 'date' })
    dob: string; // Date of birth

    @Column({ name: 'husband_or_father_name', type: 'varchar', length: 255 })
    husband_or_father_name: string;

    @Column({ name: 'block_taluka', type: 'varchar', length: 255 })
    block_taluka: string;

    @Column({ name: 'mobile', type: 'varchar', length: 15 })
    mobile: string;

    @Column({ name: 'whatsapp', type: 'varchar', length: 15 })
    whatsapp: string;

    @Column({ name: 'email', type: 'varchar', length: 255 })
    email: string;

    @Column({ name: 'education', type: 'varchar', length: 255 })
    education: string;

    @Column({ name: 'primary_occupation', type: 'varchar', length: 255 })
    primary_occupation: string;

    @Column({ name: 'religion', type: 'varchar', length: 255 })
    religion: string;

    @Column({ name: 'aadhar_number', type: 'varchar', length: 12 })
    aadhar_number: string;

    @Column({ name: 'voter_number', type: 'varchar', length: 255 })
    voter_number: string;

    @Column({ name: 'mnrega_number', type: 'varchar', length: 255 })
    mnrega_number: string;

    @Column({ name: 'house_number', type: 'varchar', length: 255 })
    house_number: string;

    @Column({ name: 'pin_code', type: 'varchar', length: 10 })
    pin_code: string;

    @Column({ name: 'gram_panchayat', type: 'varchar', length: 255 })
    gram_panchayat: string;

    @Column({ name: 'bank_name', type: 'varchar', length: 255 })
    bank_name: string;

    @Column({ name: 'bank_branch', type: 'varchar', length: 255 })
    bank_branch: string;

    @Column({ name: 'bank_account', type: 'varchar', length: 255 })
    bank_account: string;

    @Column({ name: 'bank_ifsc', type: 'varchar', length: 11 })
    bank_ifsc: string;

    @Column({ name: 'aadhar_seeding_status', type: 'varchar', length: 255 })
    aadhar_seeding_status: string;

    @Column({ name: 'loan_taken', type: 'varchar', length: 255 })
    loan_taken: string;

    @Column({ name: 'mfi_bank_loan', type: 'varchar', length: 255 })
    mfi_bank_loan: string;

    @Column({ name: 'annual_income', type: 'decimal', precision: 10, scale: 2 })
    annual_income: number;

    @Column({ name: 'total_household_member', type: 'int' })
    total_household_member: number;

    @Column({ name: 'total_monthly_saving', type: 'decimal', precision: 10, scale: 2 })
    total_monthly_saving: number;

    @Column({ name: 'total_federation_saving', type: 'decimal', precision: 10, scale: 2 })
    total_federation_saving: number;

    @Column({ name: 'category', type: 'varchar', length: 255 })
    category: string;

    @Column({ name: 'differently_abled', type: 'varchar', length: 255 })
    differently_abled: string;

    @Column({ name: 'status', type: 'varchar', length: 50 })
    status: string; // Active/Inactive
}
