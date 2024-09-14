import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('playlist')
export class SignFeedCMSPlayListEntity{

    @PrimaryGeneratedColumn()
    playlistId:number
    @Column({ name: 'name',type: 'varchar' })
    name:string
    @Column({ name: 'ownerId',type: 'int' })
    ownerId:number
   
}
