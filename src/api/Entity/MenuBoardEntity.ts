import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('menu_board')
export class MenuBoardEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column({ name: 'item_no',type: 'varchar' })
    item_no:string
    @Column({ name: 'item_category',type: 'varchar' })
    item_category:string
    @Column({ name: 'item_description',type: 'varchar' })
    item_description:string
    @Column({ name: 'group_description',type: 'varchar' })
    group_description:string
    @Column({ name: 'sales_uom',type: 'varchar' })
    sales_uom:string
    @Column({ name: 'display_qty',type: 'integer' })
    display_qty:number
    @Column({ name: 'display_price',type: 'decimal' })
    display_price:number
    @Column({ name: 'display_description',type: 'varchar' })
    display_description:string
    @Column({ name: 'sub_description',type: 'varchar' })
    sub_description:string
    @Column({ name: 'store_code',type: 'varchar' })
    store_code:string
    @Column({ name: 'is_item_disable',type: 'boolean' })
    is_item_disable:boolean
    @Column({ name: 'category_remarks',type: 'varchar' })
    category_remarks:string
    @Column({ name: 'sub_category',type: 'varchar' })
    sub_category:string
    @Column({ name: 'category_sequence',type: 'integer' })
    category_sequence:number
    @Column({ name: 'sub_category_sequence',type: 'integer' })
    sub_category_sequence:number
    @Column({ name: 'display_start_time',type: 'time' })
    display_start_time:Date
    @Column({ name: 'display_end_time',type: 'time' })
    display_end_time:Date
    @Column({ name: 'is_temp_disable',type: 'boolean' })
    is_temp_disable:boolean
    @Column({ name: 'temp_disable_func',type: 'boolean' })
    temp_disable_func:boolean

}
