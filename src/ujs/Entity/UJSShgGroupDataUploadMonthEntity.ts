import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_data_upload')
export class UJSShgGroupDataUploadMonthEntity {
    @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'int', nullable: true })
  group_id?: number;

  @Column({ type: 'int', nullable: true })
  meeting_id?: number;

  @Column({ type: 'date', nullable: true })
  meeting_date?: Date;

  @Column({ type: 'decimal' })
  last_remaining?: number;

  @Column({ type: 'decimal' })
  tot_saving?: number;

  @Column({ type: 'decimal' })
  internal_loan?: number;

  @Column({ type: 'decimal' })
  internal_loan_int?: number;

  @Column({ type: 'decimal' })
  bank_loan_amt?: number;

  @Column({ type: 'decimal' })
  penalt_other?: number;

  @Column({ type: 'decimal'})
  fix_loan1?: number;

  @Column({ type: 'decimal' })
  bank_loan_amt1?: number;

  @Column({ type: 'decimal' })
  special_amt?: number;

  @Column({ type: 'decimal' })
  internal_amt?: number;

  @Column({ type: 'decimal' })
  grp_exp?: number;

  @Column({ type: 'decimal' })
  tot_expanse?: number;

  @Column({ type: 'decimal' })
  bank_loan_amt_sub?: number;

  @Column({ type: 'decimal' })
  bank_saving?: number;

  @Column({ type: 'decimal' })
  cash_inhand?: number;

  @Column({ type: 'decimal' })
  federation?: number;

  @Column({ type: 'decimal'})
  others?: number;

   
}
