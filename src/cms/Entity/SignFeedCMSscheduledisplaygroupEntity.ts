import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('lkscheduledisplaygroup')
export class SignFeedCMSscheduledisplaygroupEntity{

   
    @PrimaryGeneratedColumn()
    scheduledisplaygroupID:number;
    
    @Column({ name: 'displayGroupId',type: 'int' })
    displayGroupId:number;
  
    @Column({ name: 'eventId',type: 'int' })
    eventId:number;

 
  


}
