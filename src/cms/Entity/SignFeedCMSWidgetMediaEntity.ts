import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('lkwidgetmedia')
export class SignFeedCMSWidgetMediaEntity{

    @PrimaryGeneratedColumn()
    widgetId:number
    @Column({ name: 'mediaId',type: 'int' })
    mediaId:number

}
