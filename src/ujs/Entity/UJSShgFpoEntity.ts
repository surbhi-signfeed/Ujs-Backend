import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_fpo')
export class UJSShgFpoEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column({ type: 'varchar' })
    member_sharholder?: string;
  
    @Column({ type: 'varchar' })
    husband_name?: string;
  
    @Column({ type: 'varchar' })
    village_name?: string;
  
    @Column({ type: 'varchar' })
    gender?: string;
  
    @Column({ type: 'decimal'})
    share_amt?: number;
  
    @Column({ type: 'varchar' })
    no_of_share?: string;
  
    @Column({ type: 'varchar' })
    folio_share_distinct_no?: string;
  
    @Column({ type: 'varchar' })
    land_holdeing?: string;
  
    @Column({ type: 'varchar'})
    land_record?: string;
  
    @Column({ type: 'varchar'})
    mobile?: string;
  
    @Column({ type: 'varchar'})
    remarks?: string;
   
}
