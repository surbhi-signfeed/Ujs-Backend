import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_bank_loan')
export class UJSBankLoanEntity {
    @PrimaryGeneratedColumn()
   
    id: number;
  
    @Column({ type: 'varchar',  nullable: true })
    loan_no: string;
  
    @Column({ type: 'varchar',  nullable: true })
    bank_name: string;
  
    @Column({ type: 'varchar', nullable: true })
    meeting_id: string;
  
    @Column({ type: 'int', nullable: true })
    group_id: number;
  
    @Column({ type: 'int', nullable: true })
    member_id: number;
  
    @Column({ type: 'int', nullable: true })
    animator_id: number;
  
    @Column({ type: 'varchar',  nullable: true })
    member_name: string;
  
    @Column({ type: 'varchar',  nullable: true })
    group_name: string;
  
    @Column({ type: 'varchar',  nullable: true })
    animator_name: string;
  
    @Column({ type: 'varchar',  nullable: true })
    loan_amt: string;
  
    @Column({ type: 'decimal', nullable: true })
    interest_rate: number;
  
    @Column({ type: 'decimal', nullable: true })
    interest: number;
  
    @Column({ type: 'decimal', nullable: true })
    settle_interest: number;
  
    @Column({ type: 'varchar',  nullable: true })
    loan_period: string;
  
    @Column({ type: 'datetime'})
    loan_date: Date;
  
    @Column({ type: 'varchar', nullable: true })
    loan_type: string;
  
    @Column({ type: 'decimal', nullable: true })
    settle_amount: number;
  
    @Column({ type: 'decimal', nullable: true })
    total_emi: number;
  
    @Column({ type: 'int', nullable: true })
    current_emi: number;
  
    @Column({ type: 'date', nullable: true })
    meetingDate: Date;}
