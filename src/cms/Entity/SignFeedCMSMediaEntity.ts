import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('media')
export class SignFeedCMSMediaEntity{

    @PrimaryGeneratedColumn()
    mediaID:number
    @Column({ name: 'name',type: 'varchar' })
    name:string
    @Column({ name: 'type',type: 'varchar' })
    type:string
    @Column({ name: 'duration',type: 'int' })
    duration:number
    @Column({ name: 'originalFilename',type: 'varchar' })
    originalFilename:string
    @Column({ name: 'storedAs',type: 'varchar' })
    storedAs:string
    @Column({ name: 'MD5',type: 'varchar' })
    MD5:string
    @Column({ name: 'FileSize',type: 'bigint' })
    FileSize:number
    @Column({ name: 'userID',type: 'int' })
    userID:number
    @Column({ name: 'retired',type: 'int' })
    retired:number
    @Column({ name: 'isEdited',type: 'int' })
    isEdited:number
    @Column({ name: 'editedMediaID',type: 'int' })
    editedMediaID:number
    @Column({ name: 'moduleSystemFile',type: 'int' })
    moduleSystemFile:number
    @Column({ name: 'valid',type: 'int' })
    valid:number
    @Column({ name: 'expires',type: 'int' })
    expires:number
    @Column({ name: 'released',type: 'int' })
    released:number
    @Column({ name: 'apiRef',type: 'varchar' })
    apiRef:string
    @Column({ name: 'createdDt',type: 'datetime' })
    createdDt:Date
    @Column({ name: 'modifiedDt',type: 'datetime' })
    modifiedDt:Date
  files: string;
  @Column({ name: 'organization',type: 'varchar' })
  organization:string

}
