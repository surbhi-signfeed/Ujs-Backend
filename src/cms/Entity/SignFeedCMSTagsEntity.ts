import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('tag')
export class SignFeedCMSTagsEntity{

    @PrimaryGeneratedColumn()
    tagId:number
    @Column({ name: 'tag',type: 'varchar' })
    tag:string

}
