import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_groups')
export class UJSShgGroupEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    shg_id: string;

    @Column({ nullable: true })
    group_name: string;

    @Column({ nullable: true })
    group_leader: string;

    @Column({ nullable: true })
    state: string;

    @Column({ nullable: true })
    district: string;

    @Column({ nullable: true })
    location: string;

    @Column({ nullable: true })
    village: string;

    @Column({ nullable: true })
    block_taluk: string;

    @Column({ nullable: true })
    pincode: string;

    @Column({ type: 'int', nullable: true })
    animator_id: number;

    @Column({ nullable: true })
    animator: string;

    @Column({ nullable: true })
    bank_name: string;

    @Column({ nullable: true })
    bank_branch: string;

    @Column({ nullable: true })
    bank_ac: string;

    @Column({ nullable: true })
    formationDate: string;

    @Column({ nullable: true })
    fed_amt: string;

    @Column({ nullable: true })
    cashatbank: string;

    @Column({ nullable: true })
    amount: string;

    @Column({ nullable: true })
    totalMember: string;

    @Column({ type: 'int', nullable: true })
    transactionstatus: number;

    @Column({ type: 'int', nullable: true })
    month: number;

    @Column({ type: 'date', nullable: true })
    monthlymeeting: Date;

    @Column({ default: true })
    status: boolean;

    @Column({ type: 'decimal', nullable: true })
    TotalmonthlySaving: number;

    @Column({ type: 'int', nullable: true })
    totalMeeting: number;

    @Column({ type: 'decimal', nullable: true })
    savingAmt: number;

    @Column({ type: 'decimal', nullable: true })
    totalInternalLoan: number;

    @Column({ type: 'decimal', nullable: true })
    totalInternalLoanRecover: number;

    @Column({ type: 'decimal', nullable: true })
    totalInternalLoanInterest: number;

    @Column({ type: 'decimal', nullable: true })
    totalExpanses: number;

    @Column({ type: 'decimal', nullable: true })
    TotalBankLoan: number;

    @Column({ type: 'decimal', nullable: true })
    totalbankloanrecover: number;
    @Column({ type: 'date', nullable: true })
    updatedAt: Date;
    @Column({ type: 'decimal', nullable: true })
    TotalBankLoanInterest: number;
}
