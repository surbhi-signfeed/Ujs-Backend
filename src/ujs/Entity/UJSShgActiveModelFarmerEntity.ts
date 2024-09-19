import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_active_model_farmer')
export class UJSShgActiveModelFarmerEntity {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column({ type: 'varchar', length: 255 })
    farmer_name: string;

    @Column({ type: 'varchar', length: 255 })
    village: string;
    @Column({ type: 'varchar', length: 255 })
    mobile: string;
 

    
}
