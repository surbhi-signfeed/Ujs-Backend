import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_bank')
export class UJSBankEntity {
    @PrimaryGeneratedColumn()
    
    id: number;
  
    @Column({ type: 'varchar',  nullable: true })
    bank_name: string;
  
    @Column({ type: 'decimal',  nullable: true })
    interest_rate: number;
  
    @Column({ type: 'decimal', nullable: true })
    filecharge: number;
  
    @Column({ type: 'decimal', nullable: true })
    fedrationcharge: number;
  }
