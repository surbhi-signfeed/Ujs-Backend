import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('organization')
export class AdminUserOrganizationEntity{

    @PrimaryGeneratedColumn()
    id:number
    @Column({ name: 'OrganizationName',type: 'varchar' })
    OrganizationName:string

    @Column({ name: 'OrganizationAddress1',type: 'varchar' })
    OrganizationAddress1:string

     @Column({ name: 'OrganizationAddress2',type: 'varchar' })
    OrganizationAddress2:string
     @Column({ name: 'City',type: 'varchar' })
    City:string
     @Column({ name: 'State',type: 'varchar' })
    State:string 
    @Column({ name: 'Country',type: 'varchar' })
    Country:string 
    @Column({ name: 'GSTNo',type: 'varchar' })
    GSTNo:string
    @Column({ name: 'Status',type: 'boolean' })
    Status:boolean
   

}
