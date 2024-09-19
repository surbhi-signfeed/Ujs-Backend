import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_data_lock')
export class UJSShgDataLockEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'group_id', type: 'int' })
    group_id: number;
    @Column({ name: 'lock_date', type: 'date' })
    lock_date: Date;
    @Column({ name: 'transaction', type: 'varchar' })
    transaction: string;
    @Column({ name: 'status', type: 'boolean' })
    status: boolean;
    @Column({ name: 'updatedAt', type: 'date' })
    updatedAt: Date;
   
}
