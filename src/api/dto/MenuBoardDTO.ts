import {IsNotEmpty} from "class-validator";
export class MenuBoardDTO{
    @IsNotEmpty()
    item_no:string
    @IsNotEmpty()
    item_category:string
    @IsNotEmpty()
    item_description:string
    @IsNotEmpty()
    group_description:string
    @IsNotEmpty()
    sales_uom:string
    @IsNotEmpty()
    display_qty:number
    @IsNotEmpty()
    display_price:number
    @IsNotEmpty()
    display_description:string
    @IsNotEmpty()
    sub_description:string
    @IsNotEmpty()
    is_item_disable:boolean
    @IsNotEmpty()
    category_remarks:string
    @IsNotEmpty()
    sub_category:string
    category_sequence:number
    sub_category_sequence:number
    display_start_time:Date
    display_end_time:Date
    is_temp_disable:boolean
    temp_disable_func:boolean
    store:store[]

}

export class store{
    store_code:string
}