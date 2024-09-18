import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('state')
export class UJSStateEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'state', type: 'varchar' })
    state: string;
    @Column({ name: 'district', type: 'varchar' })
    district: string;
}
