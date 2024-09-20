import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('Shg_till_now_data')
export class UJSShgTillNowDataEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'int', nullable: true })
    group_id: number;
  
    @Column({ type: 'int', nullable: true })
    meeting_id: number;
  
    @Column({ type: 'date', nullable: true })
    meeting_date: Date;
  
    @Column({ type: 'decimal', nullable: true })
    member_saving: number;
  
    @Column({ type: 'decimal', nullable: true })
    internal_income: number;
  
    @Column({ type: 'decimal', nullable: true })
    submit_bank_loan: number;
  
    @Column({ type: 'decimal', nullable: true })
    internal_amt1: number;
  
    @Column({ type: 'decimal', nullable: true })
    penalty1: number;
  
    @Column({ type: 'decimal', default: 0 })
    fix_loan2: number;
  
    @Column({ type: 'decimal', nullable: true, default: 0 })
    special_amt1: number;
  
    @Column({ type: 'decimal', nullable: true })
    others1: number;
  
    @Column({ type: 'decimal', nullable: true })
    distributed: number;
  
    @Column({ type: 'decimal', nullable: true })
    grp_expanses: number;
  
    @Column({ type: 'decimal', nullable: true })
    tot_submitted: number;
  
    @Column({ type: 'decimal', nullable: true })
    remaining_loan_amt: number;
  
    @Column({ type: 'decimal', nullable: true })
    bank_saving_amt: number;
  
    @Column({ type: 'decimal', nullable: true })
    cash_in_hand: number;
  
    @Column({ type: 'decimal', nullable: true })
    federation1: number;
  
    @Column({ type: 'decimal', default: 0 })
    total_clf_amount: number;

    
}
