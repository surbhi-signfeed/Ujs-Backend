import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('widgetoption')
export class SignFeedCMSWidgetOptionEntity{

    @PrimaryGeneratedColumn()
    widgetId:number
    @Column({ name: 'type',type: 'varchar' })
    type:string
    @Column({ name: 'option',type: 'varchar' })
    option:string
    @Column({ name: 'value',type: 'text' })
    value:string

}
