import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('widget')
export class SignFeedCMSWidgetEntity{

    @PrimaryGeneratedColumn()
    widgetId:number
    @Column({ name: 'playlistId',type: 'int' })
    playlistId:number
    @Column({ name: 'ownerId',type: 'int' })
    ownerId:number
    @Column({ name: 'type',type: 'varchar' })
    type:string
    @Column({ name: 'duration',type: 'int' })
    duration:number
    @Column({ name: 'displayOrder',type: 'int' })
    displayOrder:number
    @Column({ name: 'useDuration',type: 'int' })
    useDuration:number
    @Column({ name: 'calculatedDuration',type: 'int' })
    calculatedDuration:number
    @Column({ name: 'createdDt',type: 'int' })
    createdDt:number
    @Column({ name: 'modifiedDt',type: 'int' })
    modifiedDt:number
    

}
