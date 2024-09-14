import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('region')
export class SignFeedCMSRegionEntity{

    @PrimaryGeneratedColumn()
    regionId:number
    @Column({ name: 'layoutId',type: 'int' })
    layoutId:number
    @Column({ name: 'ownerId',type: 'int' })
    ownerId:number
    @Column({ name: 'name',type: 'varchar' })
    name:string
    @Column({ name: 'width',type: 'decimal' })
    width:number

    @Column({ name: 'height',type: 'decimal' })
    height:number
    @Column({ name: 'top',type: 'decimal' })
    top:number
    @Column({ name: 'left',type: 'decimal' })
    left:number
    @Column({ name: 'zIndex',type: 'int' })
    zIndex:number
    @Column({ name: 'duration',type: 'int' })
    duration:number
   

}
