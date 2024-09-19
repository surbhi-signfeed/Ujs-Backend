import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_mom')
export class UJSShgMomEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: 'varchar' })
    meeting_id?: string;
    @Column({ type: 'int' })
    group_id?: number;
    @Column({ type: 'int' })
    animator_id?: number;
    @Column({ type: 'varchar' })
    group_name?: string;

    @Column({ type: 'varchar' })
    animator_name?: string;

    @Column({ type: 'varchar' })
    mom?: string;

    @Column({ type: 'date' })
    datetime?: Date;
   
}
