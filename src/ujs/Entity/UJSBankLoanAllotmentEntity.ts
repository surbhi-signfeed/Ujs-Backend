import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_bank_loan_allotment')
export class UJSBankLoanAllotmentEntity {
    @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  group_id: number;

  @Column({ type: 'date', nullable: true })
  Start_date: Date;

  @Column({ type: 'date', nullable: true })
  End_date: Date;

  @Column({ type: 'varchar', length: 40, nullable: true })
  shg_id: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  group_name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  bank_name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  loan_no: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  loan_type: string;

  @Column({ type: 'int', nullable: true })
  totalEmi: number;

  @Column({ type: 'int', nullable: true })
  remainingEmi: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  loan_amt: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  requested_loan_amt: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  interest_rate: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  interest: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  member_emi_amount: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  settle_interest: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  tenure: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  file_charge: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  fedration_charge: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  distribution_amt: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  total_int: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  settle_amt: number;

  @Column({ type: 'date', nullable: true })
  loan_date: Date;

  @Column({ type: 'varchar', length: 20, nullable: true })
  bank_ifsc: string;

  @Column({ type: 'date', nullable: true })
  meetingDate: Date;

  @Column({ type: 'date', nullable: true })
  sanctionDate: Date;

  @Column({ type: 'date', nullable: true })
  distributionDate: Date;

  @Column({ type: 'int', nullable: true })
  totalMember: number;

  @Column({ type: 'datetime' })
  updatedAt: Date;

  @Column({ type: 'boolean', })
  status: boolean;

  @Column({ type: 'date', nullable: true })
  last_emi_collected_date: Date;}
