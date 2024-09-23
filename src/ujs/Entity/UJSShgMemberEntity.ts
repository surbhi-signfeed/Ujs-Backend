import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_members')
export class UJSShgMemberEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 0 })
    row_arrangement: number;

    @Column({ nullable: true })
    shg_id: string;

    @Column({ nullable: true })
    member_name: string;

    @Column({ nullable: true })
    member_name_eng: string;

 

    @Column({ nullable: true })
    group_name: string;

    @Column({ nullable: true })
    animator_id: number;

    @Column({ nullable: true })
    animator_name: string;

    @Column({ nullable: true })
    leader_name: string;

    @Column({ nullable: true })
    HusbandFather_Name: string;

    @Column({ nullable: true })
    village: string;

    @Column({ nullable: true })
    mobile: string;

    @Column({ nullable: true })
    whatsapp_number: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    adhaar_number: string;

    @Column({ nullable: true })
    gender: string;

    @Column({ nullable: true })
    dob: string;

    @Column({ nullable: true })
    education: string;

    @Column({ nullable: true })
    primary_occu: string;

    @Column({ nullable: true })
    religion: string;

    @Column({ nullable: true })
    house_num: string;

    @Column({ nullable: true })
    block_taluk: string;

    @Column({ nullable: true })
    gram_punchayat: string;

    @Column({ nullable: true })
    state: string;

    @Column({ nullable: true })
    district: string;

    @Column({ nullable: true })
    pincode: string;

    @Column({ nullable: true })
    bank_name: string;

    @Column({ nullable: true })
    branch_name: string;

    @Column({ nullable: true })
    bank_ac: string;

    @Column({ nullable: true })
    bank_ifsc: string;

    @Column({ nullable: true })
    aadhar_seeding_status: string;

    @Column({ nullable: true })
    voter_num: string;

    @Column({ nullable: true })
    mngrega_num: string;

    @Column({ nullable: true })
    sub_cat: string;

    @Column({ nullable: true })
    loan_taken: string;

    @Column({ nullable: true })
    mfi_bank_loan: string;

    @Column({ nullable: true })
    annual_income: string;

    @Column({ nullable: true })
    diff_abled: string;

    @Column({ nullable: true })
    total_household_member: string;

    @Column({ nullable: true })
    member_status: string;

    @Column({ nullable: true })
    social_strata: string;

    @Column({ nullable: true })
    house_hold_above: string;

    @Column({ default: 1 })
    status: number;

    @Column({ nullable: true, type: 'decimal' })
    monthlySaving: number;

    @Column({ nullable: true, type: 'decimal' })
    fedrationSaving: number;

    @Column({ nullable: true })
    updated_at: Date;

    @Column({ type: 'decimal',  default: 0 })
    openingBal: number;

    @Column({ type: 'decimal',  default: 0 })
    fix_loan: number;
}
