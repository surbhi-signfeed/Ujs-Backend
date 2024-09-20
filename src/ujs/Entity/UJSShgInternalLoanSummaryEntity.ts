import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_internal_loan_summary')
export class UJSShgInternalLoanSummaryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true })
  group_id: number;

  @Column({ type: 'varchar', nullable: true })
  shg_id: string;

  @Column({ type: 'varchar',  nullable: true })
  group_name: string;

  @Column({ type: 'decimal', nullable: true })
  loan_amt: number;

  @Column({ type: 'int', nullable: true })
  tenure: number;

  @Column({ type: 'decimal', nullable: true })
  interest: number;

  @Column({ type: 'decimal', nullable: true })
  recover_amt: number;

  @Column({ type: 'date', nullable: true })
  datetime: Date;

  @Column({ type: 'int', nullable: true })
  status: number;
  }
