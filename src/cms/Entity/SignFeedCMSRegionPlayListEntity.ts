import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('lkregionplaylist')
export class SignFeedCMSRegionPlayListEntity{

    @PrimaryGeneratedColumn()
    regionId:number
    @Column({ name: 'playlistId',type: 'int' })
    playlistId:number
    @Column({ name: 'displayOrder',type: 'int' })
    displayOrder:number

}
