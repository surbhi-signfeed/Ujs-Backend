import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_fedration_report')
export class UJSSHGFedrationReportEntity {
    @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar' })
  shg_name?: string;

  @Column({ type: 'varchar' })
  dhani?: string;

  @Column({ type: 'varchar' })
  gram_panchayat?: string;

  @Column({ type: 'varchar' })
  total_member?: string;

  @Column({ type: 'decimal' })
  federation_this_month?: number;

  @Column({ type: 'decimal' })
  federation?: number;
   
}
