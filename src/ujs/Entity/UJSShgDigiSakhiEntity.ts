import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_digital_sakhi')
export class UJSShgDigiSakhiEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column({ type: 'varchar',})
    state?: string;
  
    @Column({ type: 'varchar',})
    district?: string;
  
    @Column({ type: 'varchar',})
    block?: string;
  
    @Column({ type: 'varchar', })
    gp_name?: string;
  
    @Column({ type: 'varchar', })
    villege_name?: string;
  
    @Column({ type: 'varchar', })
    vle_name?: string;
  
    @Column({ type: 'varchar' })
    mobile?: string;
  
    @Column({ type: 'varchar', })
    email?: string;
  
    @Column({ type: 'varchar', })
    application_ref_no?: string;
  
    @Column({ type: 'varchar'})
    cscId?: string;
   
}
