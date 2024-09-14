import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('resolution')
export class SignFeedCMSResolutionEntity{

    @PrimaryGeneratedColumn()
    resolutionID:number
    @Column({ name: 'resolution',type: 'varchar' })
    resolution:string
    @Column({ name: 'organization',type: 'varchar' })
    organization:string
    @Column({ name: 'width',type: 'int' })
    width:number
    @Column({ name: 'height',type: 'int' })
    height:number
    @Column({ name: 'intended_width',type: 'int' })
    intended_width:number
    @Column({ name: 'intended_height',type: 'int' })
    intended_height:number
    @Column({ name: 'version',type: 'int' })
    version:number
    @Column({ name: 'enabled',type: 'int' })
    enabled:number
    @Column({ name: 'userId',type: 'int' })
    userId:number

}
