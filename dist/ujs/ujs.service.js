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
exports.UjsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const UJSDepartmentEntity_1 = require("./Entity/UJSDepartmentEntity");
let UjsService = class UjsService {
    constructor(logger, connection, UJSDepartmentRepository) {
        this.logger = logger;
        this.connection = connection;
        this.UJSDepartmentRepository = UJSDepartmentRepository;
    }
    async UJSDepartmentAdd(request, ujsDepartmentDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkDepartment = await this.UJSDepartmentRepository.findOne({
            where: {
                department_name: ujsDepartmentDTO.department_name,
            },
        });
        if (checkDepartment) {
            return {
                message: "Department Already Exist",
                status: 400,
            };
        }
        else {
            const addUJSDepartment = new UJSDepartmentEntity_1.UJSDepartmentEntity();
            addUJSDepartment.department_name = ujsDepartmentDTO.department_name;
            addUJSDepartment.status = ujsDepartmentDTO.status;
            await this.UJSDepartmentRepository.save(addUJSDepartment);
            return { departmentList: addUJSDepartment, message: "success", status: 200 };
        }
    }
    async UJSDepartmentList(request) {
        let departmentList = await this.UJSDepartmentRepository.find({});
        return { department: departmentList, message: "success", status: 200 };
    }
    async UJSDepartmentUpdate(request, ujsDepartmentUpdateDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkDepartment = await this.UJSDepartmentRepository.findOne({
            where: {
                ID: ujsDepartmentUpdateDTO.ID,
            },
        });
        if (checkDepartment) {
            checkDepartment.department_name = ujsDepartmentUpdateDTO.department_name;
            checkDepartment.status = ujsDepartmentUpdateDTO.status;
            await this.UJSDepartmentRepository.save(checkDepartment);
            return { department: checkDepartment, message: "success", status: 200 };
        }
        else {
            return { message: "Department ID Does Not Exist", status: 400 };
        }
    }
    async UJSDepartmentDelete(request, ujsDepartmentDeleteDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkDepartment = await this.UJSDepartmentRepository.findOne({
            where: {
                ID: ujsDepartmentDeleteDTO.ID,
            },
        });
        if (checkDepartment) {
            let checkUjsDepartment;
            checkUjsDepartment = this.connection.query(`delete from department where ID='${ujsDepartmentDeleteDTO.ID}'`);
            await this.UJSDepartmentRepository.delete(checkDepartment);
            return { message: "success", status: 200 };
        }
        else {
            return { message: "Department Does Not Exist", status: 400 };
        }
    }
};
exports.UjsService = UjsService;
exports.UjsService = UjsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(common_1.Logger)),
    __param(1, (0, typeorm_1.InjectDataSource)()),
    __param(2, (0, typeorm_1.InjectRepository)(UJSDepartmentEntity_1.UJSDepartmentEntity)),
    __metadata("design:paramtypes", [common_1.Logger, Object, typeorm_2.Repository])
], UjsService);
//# sourceMappingURL=ujs.service.js.map