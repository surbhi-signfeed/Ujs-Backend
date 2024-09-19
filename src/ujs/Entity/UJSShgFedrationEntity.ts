import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shg_federation')
export class UJSSHGFedrationEntity {
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

    @Column({ type: 'int' })
    amount?: number;

    @Column({ type: 'date' })
    datetime?: Date;

}
