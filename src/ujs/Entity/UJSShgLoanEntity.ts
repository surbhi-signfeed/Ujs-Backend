import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_loan')
export class UJSShgLoanEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 50, nullable: true })
    meeting_id: string;
  
    @Column({ type: 'varchar', length: 100, nullable: true })
    loan_id: string;
  
    @Column({ type: 'int', nullable: true })
    member_id: number;
  
    @Column({ type: 'int', nullable: true })
    group_id: number;
  
    @Column({ type: 'varchar', length: 30, nullable: true })
    shg_id: string;
  
    @Column({ type: 'int', nullable: true })
    animator_id: number;
  
    @Column({ type: 'varchar', length: 100, nullable: true })
    member_name: string;
  
    @Column({ type: 'varchar', length: 100, nullable: true })
    group_name: string;
  
    @Column({ type: 'varchar', length: 100, nullable: true })
    animator_name: string;
  
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    loan_amt: number;
  
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    interest: number;
  
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    settle_interest: number;
  
    @Column({ type: 'varchar', length: 100, nullable: true })
    loan_period: string;
  
    @Column({ type: 'varchar', length: 100, nullable: true })
    loan_type: string;
  
    @Column({ type: 'date', nullable: true })
    loan_date: Date;
  
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    settle_amount: number;
  
    @Column({ type: 'int', nullable: true })
    total_emi: number;
  
    @Column({ type: 'int', nullable: true })
    current_emi: number;
  
    @Column()
    update_at: Date;
  
    @Column({ type: 'date', nullable: true })
    meetingDate: Date;
  
    @Column({ type: 'int', default: 1 })
    status: number;
  }
