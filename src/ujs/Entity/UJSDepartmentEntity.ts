import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('Department')
export class UJSDepartmentEntity{

    @PrimaryGeneratedColumn()
    ID:number
    @Column({ name: 'department_name',type: 'varchar' })
    department_name:string
    @Column({ name: 'status',type: 'boolean' })
    status:boolean
    

}
