import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('daypart')
export class SignFeedCMSDaypartEntity{
    @PrimaryGeneratedColumn()
    dayPartId: number;

    @Column({ name: 'name', type: 'varchar' })
    name: string;

    @Column({ name: 'description', type: 'varchar' })
    description: string;

    @Column({ name: 'userid', type: 'int' })
    userid: number;

    @Column({ name: 'startTime', type: 'int' })
    startTime: number;

    @Column({ name: 'endTime', type: 'int' })
    endTime: number;

    @Column({ name: 'isRetired', type: 'int' })
    isRetired:number;

    @Column({ name: 'exceptions', type: 'varchar' })
    exceptions: string;

    @Column({ name: 'isAlways', type: 'varchar' })
    isAlways: string;

    @Column({ name: 'isCustom', type: 'int' })
    isCustom: number;
    @Column({ name: 'organization',type: 'varchar' })
    organization:string
   

}
