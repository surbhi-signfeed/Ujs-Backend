import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_group_summary')
export class UJSShgGroupSummaryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true })
  total_shg: number;

  @Column({ type: 'int', nullable: true })
  total_meeting: number;

  @Column({ type: 'decimal', nullable: true })
  total_saving: number;

  @Column({ type: 'decimal', nullable: true })
  total_federation: number;

  @Column({ type: 'decimal', nullable: true })
  total_internal_loan: number;

  @Column({ type: 'decimal', nullable: true })
  total_bank_loan: number;
  }
