import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('lkcampaignlayout')
export class SignFeedCMSCampaignLayoutEntity{

    @PrimaryGeneratedColumn()
    LkCampaignLayoutID:number
    @Column({ name: 'CampaignID',type: 'int' })
    CampaignID:number
    @Column({ name: 'LayoutID',type: 'int' })
    LayoutID:number
    @Column({ name: 'DisplayOrder',type: 'int' })
    DisplayOrder:number

}
