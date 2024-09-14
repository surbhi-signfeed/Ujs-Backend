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
exports.PlayerController = void 0;
const common_1 = require("@nestjs/common");
const player_service_1 = require("./player.service");
const playerDTO_1 = require("./dto/playerDTO");
let PlayerController = class PlayerController {
    constructor(playerService, logger) {
        this.playerService = playerService;
        this.logger = logger;
    }
    async RegisterDisplay(request, playerDTO) {
        this.logger.log('Register Display API Called');
        return this.playerService.RegisterDisplay(request, playerDTO);
    }
    async DisplaySchedule(request, playerDTO) {
        this.logger.log('Register Display API Called');
        return this.playerService.DisplaySchedule(request, playerDTO);
    }
};
exports.PlayerController = PlayerController;
__decorate([
    (0, common_1.Post)('RegisterDisplay'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, playerDTO_1.PlayerDTO]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "RegisterDisplay", null);
__decorate([
    (0, common_1.Post)('Schedule'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, playerDTO_1.PlayerDTO]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "DisplaySchedule", null);
exports.PlayerController = PlayerController = __decorate([
    (0, common_1.Controller)('player'),
    __param(1, (0, common_1.Inject)(common_1.Logger)),
    __metadata("design:paramtypes", [player_service_1.PlayerService, common_1.Logger])
], PlayerController);
//# sourceMappingURL=player.controller.js.map