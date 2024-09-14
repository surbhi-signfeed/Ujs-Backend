import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('campaign')
export class SignFeedCMSCampaignEntity{

    @PrimaryGeneratedColumn()
    CampaignID:number
    @Column({ name: 'Campaign',type: 'varchar' })
    Campaign:string
    @Column({ name: 'IsLayoutSpecific',type: 'int' })
    IsLayoutSpecific:number
    @Column({ name: 'UserID',type: 'int' })
    UserID:number
    @Column({ name: 'tags',type: 'varchar' })
  tags: string;
  @Column({ name: 'organization',type: 'varchar' })
  organization:string

}
