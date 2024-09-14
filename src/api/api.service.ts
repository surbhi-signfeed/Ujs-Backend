import {Inject, Injectable, Logger } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import {Connection} from 'mysql2'
import { MenuBoardDTO } from './dto/MenuBoardDTO';
import { MenuBoardEntity } from './Entity/MenuBoardEntity';
import {Repository} from "typeorm";
import { SignFeedCMSDisplayEntity } from 'src/cms/Entity/SignFeedCMSDisplayEntity';
import { SocketGateWay } from './SocketGateWay';
import { MenuBoardItemLockDTO } from './dto/MenuBoardItemLockDTO';

@Injectable()
export class ApiService {
    constructor(
        @Inject(Logger) private readonly logger:Logger,
        @InjectDataSource() private readonly connection:Connection,
        @InjectRepository(MenuBoardEntity)
        private readonly MenuBoardEntityRepository: Repository<MenuBoardEntity>,
        @InjectRepository(SignFeedCMSDisplayEntity)
        private readonly SignFeedCMSDisplayEntityRepository: Repository<SignFeedCMSDisplayEntity>,
        private readonly socketGateWay:SocketGateWay
    ) {}

    async MenuBoard(menuBoardDTO: MenuBoardDTO[]){
        try{
            for (let item of menuBoardDTO) {
                for (let store_item of item.store){
                    let checkItem = await this.MenuBoardEntityRepository.findOne({
                        where: {
                            item_no: item.item_no, store_code: store_item.store_code
                        }
                    })
                    if (checkItem){
                        checkItem.item_category = item.item_category
                        checkItem.item_category = item.item_category
                        checkItem.item_description = item.item_description
                        checkItem.group_description = item.group_description
                        checkItem.sales_uom = item.sales_uom
                        checkItem.display_qty = item.display_qty
                        checkItem.display_price = item.display_price
                        checkItem.display_description = item.display_description
                        checkItem.sub_description = item.sub_description
                        checkItem.is_item_disable = item.is_item_disable
                        checkItem.category_remarks = item.category_remarks
                        checkItem.sub_category = item.sub_category
                        checkItem.category_sequence = item.category_sequence
                        checkItem.sub_category_sequence = item.sub_category_sequence
                        checkItem.display_start_time = item.display_start_time
                        checkItem.display_end_time = item.display_end_time
                        checkItem.is_temp_disable = item.is_temp_disable
                        checkItem.temp_disable_func = item.temp_disable_func
                        await this.MenuBoardEntityRepository.save(checkItem);
                    }
                    else {
                        const addMenuBoad: MenuBoardEntity = new MenuBoardEntity();
                        addMenuBoad.item_no = item.item_no
                        addMenuBoad.item_category = item.item_category
                        addMenuBoad.item_description = item.item_description
                        addMenuBoad.group_description = item.group_description
                        addMenuBoad.sales_uom = item.sales_uom
                        addMenuBoad.display_qty = item.display_qty
                        addMenuBoad.display_price = item.display_price
                        addMenuBoad.display_description = item.display_description
                        addMenuBoad.sub_description = item.sub_description
                        addMenuBoad.is_item_disable = item.is_item_disable
                        addMenuBoad.category_remarks = item.category_remarks
                        addMenuBoad.sub_category = item.sub_category
                        addMenuBoad.category_sequence = item.category_sequence
                        addMenuBoad.sub_category_sequence = item.sub_category_sequence
                        addMenuBoad.display_start_time = item.display_start_time
                        addMenuBoad.display_end_time = item.display_end_time
                        addMenuBoad.is_temp_disable = item.is_temp_disable
                        addMenuBoad.temp_disable_func = item.temp_disable_func
                        addMenuBoad.store_code = store_item.store_code
                        await this.MenuBoardEntityRepository.save(addMenuBoad);
                    }

                }

            }
            let displayList = await this.SignFeedCMSDisplayEntityRepository.find()
            for (let displayitem of displayList){
                let menuItemData = await this.MenuBoardEntityRepository.find({
                    where: {
                        store_code: displayitem.BroadCastAddress
                    }
                })
                if(menuItemData){
                   this.socketGateWay.server.emit(`${displayitem.MacAddress}`, menuItemData)
                }
            }


            return {message: 'Success', status: 200}
        }
        catch (error){
            return {message: 'Error', status: 400}
        }

    }


    async MenuBoardItemLock(menuBoardItemLockDTO: MenuBoardItemLockDTO){
        try{
            let checkItem = await this.MenuBoardEntityRepository.findOne({
                where: {
                    item_no: menuBoardItemLockDTO.item_no, store_code: menuBoardItemLockDTO.store_code
                }
            })
                if(checkItem){
                    checkItem.is_temp_disable = true
                    await this.MenuBoardEntityRepository.save(checkItem);
                    return {message: 'Success', status: 200}
                }
                else{
                    return {message: 'Item Does Not Exist', status: 400}
                }
            }
        catch (error){
            return {message: 'Error', status: 400}
        }

    }

}
