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
const SignFeedCMSResolutionEntity_1 = require("./Entity/SignFeedCMSResolutionEntity");
let UjsService = class UjsService {
    constructor(logger, connection, SignFeedCMSResolutionEntityRepository) {
        this.logger = logger;
        this.connection = connection;
        this.SignFeedCMSResolutionEntityRepository = SignFeedCMSResolutionEntityRepository;
    }
    async SignfeedCMSResolutionList(request) {
        let resolutionList = await this.SignFeedCMSResolutionEntityRepository.find({});
        return { resolution: resolutionList, message: "success", status: 200 };
    }
    async SignfeedCMSResolutionAdd(request, cmsResolutionDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkResolution = await this.SignFeedCMSResolutionEntityRepository.findOne({
            where: {
                intended_width: cmsResolutionDTO.width,
                intended_height: cmsResolutionDTO.height,
            },
        });
        if (checkResolution) {
            return {
                message: "Resolution with Height & Width Already Exist",
                status: 400,
            };
        }
        else {
            const addCMSResolution = new SignFeedCMSResolutionEntity_1.SignFeedCMSResolutionEntity();
            addCMSResolution.resolution = cmsResolutionDTO.name;
            addCMSResolution.organization = cmsResolutionDTO.organization;
            addCMSResolution.width = cmsResolutionDTO.width;
            addCMSResolution.height = cmsResolutionDTO.height;
            addCMSResolution.intended_width = cmsResolutionDTO.width;
            addCMSResolution.intended_height = cmsResolutionDTO.height;
            addCMSResolution.version = 2;
            addCMSResolution.enabled = cmsResolutionDTO.enabled;
            await this.SignFeedCMSResolutionEntityRepository.save(addCMSResolution);
            return { resolution: addCMSResolution, message: "success", status: 200 };
        }
    }
    async SignfeedCMSResolutionUpdate(request, cmsResolutionUpdateDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkResolution = await this.SignFeedCMSResolutionEntityRepository.findOne({
            where: {
                resolutionID: cmsResolutionUpdateDTO.id,
            },
        });
        if (checkResolution) {
            checkResolution.resolution = cmsResolutionUpdateDTO.name;
            checkResolution.width = cmsResolutionUpdateDTO.width;
            checkResolution.height = cmsResolutionUpdateDTO.height;
            checkResolution.intended_width = cmsResolutionUpdateDTO.width;
            checkResolution.intended_height = cmsResolutionUpdateDTO.height;
            checkResolution.enabled = cmsResolutionUpdateDTO.enabled;
            await this.SignFeedCMSResolutionEntityRepository.save(checkResolution);
            return { resolution: checkResolution, message: "success", status: 200 };
        }
        else {
            return { message: "Resolution ID Does Not Exist", status: 400 };
        }
    }
    async SignfeedCMSResolutionDelete(request, cmsResolutionDeleteDTO) {
        const ipAddress = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
        const currentDateTime = new Date();
        const unixTimestamp = Math.floor(currentDateTime.getTime() / 1000);
        let checkResolution = await this.SignFeedCMSResolutionEntityRepository.findOne({
            where: {
                resolutionID: cmsResolutionDeleteDTO.resolutionID,
            },
        });
        if (checkResolution) {
            let checkLayouCampaign;
            checkLayouCampaign = this.connection.query(`delete from resolution where resolutionID='${cmsResolutionDeleteDTO.resolutionID}'`);
            await this.SignFeedCMSResolutionEntityRepository.delete(checkResolution);
            return { message: "success", status: 200 };
        }
        else {
            return { message: "Resolution Does Not Exist", status: 400 };
        }
    }
};
exports.UjsService = UjsService;
exports.UjsService = UjsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(common_1.Logger)),
    __param(1, (0, typeorm_1.InjectDataSource)()),
    __param(2, (0, typeorm_1.InjectRepository)(SignFeedCMSResolutionEntity_1.SignFeedCMSResolutionEntity)),
    __metadata("design:paramtypes", [common_1.Logger, Object, typeorm_2.Repository])
], UjsService);
//# sourceMappingURL=ujs.service.js.map