import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('signage_settings')
export class SignFeedSignageSettingEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({ name: 'server_key',type: 'varchar' })
    server_key:string;
}
