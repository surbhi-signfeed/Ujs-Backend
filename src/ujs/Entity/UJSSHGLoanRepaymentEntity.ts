import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SHG_loan_repayment')
export class UJSSHGLoanRepaymentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'meeting_id', type: 'varchar', length: 50, nullable: true })
  meeting_id?: string;

  @Column({ name: 'emi_amount', type: 'decimal', precision: 10, scale: 2, default: '0.00' })
  emi_amount: number;

  @Column({ name: 'interest', type: 'decimal', precision: 10, scale: 2, default: '0.00' })
  interest: number;

  @Column({ name: 'member_id', type: 'int', nullable: true })
  member_id?: number;

  @Column({ name: 'member_name', type: 'varchar', length: 100, nullable: true })
  member_name?: string;

  @Column({ name: 'group_id', type: 'int', nullable: true })
  group_id?: number;

  @Column({ name: 'animator_id', type: 'int', nullable: true })
  animator_id?: number;

  @Column({ name: 'emi_no', type: 'int', nullable: true })
  emi_no?: number;

  @Column({ name: 'emi_date', type: 'datetime' })
  emi_date: Date;

  @Column({ name: 'meetingDate', type: 'datetime', nullable: true })
  meetingDate?: Date;
}
