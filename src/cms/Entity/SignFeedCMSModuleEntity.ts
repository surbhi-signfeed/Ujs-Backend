import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('module')
export class SignFeedCMSModuleEntity{

    @PrimaryGeneratedColumn()
    ModuleID:number
    @Column({ name: 'Module',type: 'varchar' })
    Module:string
    @Column({ name: 'Name',type: 'varchar' })
    Name:string
    @Column({ name: 'Enabled',type: 'int' })
    Enabled:number
    @Column({ name: 'RegionSpecific',type: 'int' })
    RegionSpecific:number
    @Column({ name: 'Description',type: 'varchar' })
    Description:string
    @Column({ name: 'ImageUri',type: 'varchar' })
    ImageUri:string
    @Column({ name: 'SchemaVersion',type: 'int' })
    SchemaVersion:number
    @Column({ name: 'ValidExtensions',type: 'varchar' })
    ValidExtensions:string
    @Column({ name: 'PreviewEnabled',type: 'int' })
    PreviewEnabled:number
    @Column({ name: 'assignable',type: 'int' })
    assignable:number
    @Column({ name: 'render_as',type: 'varchar' })
    render_as:string
    @Column({ name: 'settings',type: 'text' })
    settings:string
    @Column({ name: 'viewPath',type: 'varchar' })
    viewPath:string
    @Column({ name: 'class',type: 'varchar' })
    class:string
    @Column({ name: 'defaultDuration',type: 'int' })
    defaultDuration:number
    @Column({ name: 'installName',type: 'varchar' })
    installName:string
    @Column({ name: 'organization',type: 'varchar' })
    organization:string
}
