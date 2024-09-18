import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('backup_shg_group_data_upload_month')
export class UJSBackupShgGroupDataUploadMonthEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'group_id', type: 'int', nullable: true })
  group_id: number;

  @Column({ name: 'meeting_id', type: 'int', nullable: true })
  meeting_id: number;

  @Column({ name: 'meeting_date', type: 'date', nullable: true })
  meeting_date: string;

  @Column({ name: 'last_remaining', type: 'decimal', precision: 10, scale: 2, nullable: true })
  last_remaining: number;

  @Column({ name: 'tot_saving', type: 'decimal', precision: 10, scale: 2, nullable: true })
  tot_saving: number;

  @Column({ name: 'internal_loan', type: 'decimal', precision: 10, scale: 2, nullable: true })
  internal_loan: number;

  @Column({ name: 'internal_loan_int', type: 'decimal', precision: 10, scale: 2, nullable: true })
  internal_loan_int: number;

  @Column({ name: 'bank_loan_amt', type: 'decimal', precision: 10, scale: 2, nullable: true })
  bank_loan_amt: number;

  @Column({ name: 'penalt_other', type: 'decimal', precision: 10, scale: 2, nullable: true })
  penalt_other: number;

  @Column({ name: 'fix_loan1', type: 'decimal', precision: 10, scale: 2, default: 0.00 })
  fix_loan1: number;

  @Column({ name: 'bank_loan_amt1', type: 'decimal', precision: 10, scale: 2, nullable: true })
  bank_loan_amt1: number;

  @Column({ name: 'special_amt', type: 'decimal', precision: 10, scale: 2, nullable: true })
  special_amt: number;

  @Column({ name: 'internal_amt', type: 'decimal', precision: 10, scale: 2, nullable: true })
  internal_amt: number;

  @Column({ name: 'grp_exp', type: 'decimal', precision: 10, scale: 2, nullable: true })
  grp_exp: number;

  @Column({ name: 'tot_expanse', type: 'decimal', precision: 10, scale: 2, nullable: true })
  tot_expanse: number;

  @Column({ name: 'bank_loan_amt_sub', type: 'decimal', precision: 10, scale: 2, nullable: true })
  bank_loan_amt_sub: number;

  @Column({ name: 'bank_saving', type: 'decimal', precision: 10, scale: 2, nullable: true })
  bank_saving: number;

  @Column({ name: 'cash_inhand', type: 'decimal', precision: 10, scale: 2, nullable: true })
  cash_inhand: number;

  @Column({ name: 'federation', type: 'decimal', precision: 10, scale: 2, nullable: true })
  federation: number;

  @Column({ name: 'others', type: 'decimal', precision: 10, scale: 2, nullable: true })
  others: number;
}
