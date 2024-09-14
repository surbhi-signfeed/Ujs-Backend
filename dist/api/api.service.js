"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const MenuBoardEntity_1 = require("./Entity/MenuBoardEntity");
const typeorm_2 = require("typeorm");
const SignFeedCMSDisplayEntity_1 = require("../cms/Entity/SignFeedCMSDisplayEntity");
const SocketGateWay_1 = require("./SocketGateWay");
let ApiService = class ApiService {
    constructor(logger, connection, MenuBoardEntityRepository, SignFeedCMSDisplayEntityRepository, socketGateWay) {
        this.logger = logger;
        this.connection = connection;
        this.MenuBoardEntityRepository = MenuBoardEntityRepository;
        this.SignFeedCMSDisplayEntityRepository = SignFeedCMSDisplayEntityRepository;
        this.socketGateWay = socketGateWay;
    }
    async MenuBoard(menuBoardDTO) {
        try {
            for (let item of menuBoardDTO) {
                for (let store_item of item.store) {
                    let checkItem = await this.MenuBoardEntityRepository.findOne({
                        where: {
                            item_no: item.item_no, store_code: store_item.store_code
                        }
                    });
                    if (checkItem) {
                        checkItem.item_category = item.item_category;
                        checkItem.item_category = item.item_category;
                        checkItem.item_description = item.item_description;
                        checkItem.group_description = item.group_description;
                        checkItem.sales_uom = item.sales_uom;
                        checkItem.display_qty = item.display_qty;
                        checkItem.display_price = item.display_price;
                        checkItem.display_description = item.display_description;
                        checkItem.sub_description = item.sub_description;
                        checkItem.is_item_disable = item.is_item_disable;
                        checkItem.category_remarks = item.category_remarks;
                        checkItem.sub_category = item.sub_category;
                        checkItem.category_sequence = item.category_sequence;
                        checkItem.sub_category_sequence = item.sub_category_sequence;
                        checkItem.display_start_time = item.display_start_time;
                        checkItem.display_end_time = item.display_end_time;
                        checkItem.is_temp_disable = item.is_temp_disable;
                        checkItem.temp_disable_func = item.temp_disable_func;
                        await this.MenuBoardEntityRepository.save(checkItem);
                    }
                    else {
                        const addMenuBoad = new MenuBoardEntity_1.MenuBoardEntity();
                        addMenuBoad.item_no = item.item_no;
                        addMenuBoad.item_category = item.item_category;
                        addMenuBoad.item_description = item.item_description;
                        addMenuBoad.group_description = item.group_description;
                        addMenuBoad.sales_uom = item.sales_uom;
                        addMenuBoad.display_qty = item.display_qty;
                        addMenuBoad.display_price = item.display_price;
                        addMenuBoad.display_description = item.display_description;
                        addMenuBoad.sub_description = item.sub_description;
                        addMenuBoad.is_item_disable = item.is_item_disable;
                        addMenuBoad.category_remarks = item.category_remarks;
                        addMenuBoad.sub_category = item.sub_category;
                        addMenuBoad.category_sequence = item.category_sequence;
                        addMenuBoad.sub_category_sequence = item.sub_category_sequence;
                        addMenuBoad.display_start_time = item.display_start_time;
                        addMenuBoad.display_end_time = item.display_end_time;
                        addMenuBoad.is_temp_disable = item.is_temp_disable;
                        addMenuBoad.temp_disable_func = item.temp_disable_func;
                        addMenuBoad.store_code = store_item.store_code;
                        await this.MenuBoardEntityRepository.save(addMenuBoad);
                    }
                }
            }
            let displayList = await this.SignFeedCMSDisplayEntityRepository.find();
            for (let displayitem of displayList) {
                let menuItemData = await this.MenuBoardEntityRepository.find({
                    where: {
                        store_code: displayitem.BroadCastAddress
                    }
                });
                if (menuItemData) {
                    this.socketGateWay.server.emit(`${displayitem.MacAddress}`, menuItemData);
                }
            }
            return { message: 'Success', status: 200 };
        }
        catch (error) {
            return { message: 'Error', status: 400 };
        }
    }
    async MenuBoardItemLock(menuBoardItemLockDTO) {
        try {
            let checkItem = await this.MenuBoardEntityRepository.findOne({
                where: {
                    item_no: menuBoardItemLockDTO.item_no, store_code: menuBoardItemLockDTO.store_code
                }
            });
            if (checkItem) {
                checkItem.is_temp_disable = true;
                await this.MenuBoardEntityRepository.save(checkItem);
                return { message: 'Success', status: 200 };
            }
            else {
                return { message: 'Item Does Not Exist', status: 400 };
            }
        }
        catch (error) {
            return { message: 'Error', status: 400 };
        }
    }
};
exports.ApiService = ApiService;
exports.ApiService = ApiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(common_1.Logger)),
    __param(1, (0, typeorm_1.InjectDataSource)()),
    __param(2, (0, typeorm_1.InjectRepository)(MenuBoardEntity_1.MenuBoardEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(SignFeedCMSDisplayEntity_1.SignFeedCMSDisplayEntity)),
    __metadata("design:paramtypes", [common_1.Logger, Object, typeorm_2.Repository,
        typeorm_2.Repository,
        SocketGateWay_1.SocketGateWay])
], ApiService);
//# sourceMappingURL=api.service.js.map