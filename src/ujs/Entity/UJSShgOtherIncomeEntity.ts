import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('Shg_other_income')
export class UJSShgOtherIncomeEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 50, nullable: true })
    meeting_id: string;
  
    @Column({ type: 'int', nullable: true })
    group_id: number;
  
    @Column({ type: 'int', nullable: true })
    animator_id: number;
  
    @Column({ type: 'int', nullable: true })
    member_id: number;
  
    @Column({ type: 'varchar', length: 100, nullable: true })
    group_name: string;
  
    @Column({ type: 'varchar', length: 100, nullable: true })
    animator_name: string;
  
    @Column({ type: 'varchar', length: 100, nullable: true })
    member_name: string;
  
    @Column({ type: 'varchar', length: 100, nullable: true })
    income: string;
  
    @Column({ type: 'datetime' })
    datetime: Date;

    
}
