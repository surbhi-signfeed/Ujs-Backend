import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('displayGroup')
export class SignFeedCMSDisplayGroupEntity{

    @PrimaryGeneratedColumn()
    DisplayGroupID:number;
   
    @Column({ name: 'DisplayGroup',type: 'varchar' })
    DisplayGroup:string;
  
    @Column({ name: 'Description',type: 'varchar' })
    Description:string;

    @Column({ name: 'userId',type: 'int' })
    userId:number;
    @Column({ name: 'IsDisplaySpecific',type: 'int' })
    IsDisplaySpecific:number;
 
    @Column({name:'isDynamic',type:'int'})
    isDynamic: number
    @Column({name:'dynamicCriteria',type:'varchar'})
    dynamicCriteria:string
  
    @Column({ name: 'organization',type: 'varchar' })
    organization:string
  

}
