import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('SHG_Group')
export class UJSShgGroupEntity {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column({ name: 'group_id', type: 'varchar', length: 255 })
    group_id: string;

    @Column({ name: 'group_name', type: 'varchar', length: 255 })
    group_name: string;

    @Column({ name: 'group_leader', type: 'varchar', length: 255 })
    group_leader: string;

    @Column({ name: 'formation_date', type: 'date' })
    formation_date: string;

    @Column({ name: 'state_name', type: 'varchar', length: 255 })
    state_name: string;

    @Column({ name: 'district_name', type: 'varchar', length: 255 })
    district_name: string;

    @Column({ name: 'location_name', type: 'varchar', length: 255 })
    location_name: string;

    @Column({ name: 'village_name', type: 'varchar', length: 255 })
    village_name: string;

    @Column({ name: 'taluka_name', type: 'varchar', length: 255 })
    taluka_name: string;

    @Column({ name: 'bank_name', type: 'varchar', length: 255 })
    bank_name: string;

    @Column({ name: 'bank_branch', type: 'varchar', length: 255 })
    bank_branch: string;

    @Column({ name: 'bank_account', type: 'varchar', length: 255 })
    bank_account: string;

    @Column({ name: 'cash_in_hand',  type: 'varchar', length: 255 })
    cash_in_hand: string;

    @Column({ name: 'federation_amount', type: 'varchar', length: 255  })
    federation_amount:string;

    @Column({ name: 'cash_at_bank',  type: 'varchar', length: 255 })
    cash_at_bank: string;

    @Column({ name: 'total_member', type: 'int' })
    total_member: number;

    @Column({ name: 'last_meeting_date', type: 'date' })
    last_meeting_date: string;

    @Column({ name: 'status', type: 'varchar', length: 255 })
    status: string;
}
