"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const schedule_1 = require("@nestjs/schedule");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const LoggingInterceptor_1 = require("./LoggingInterceptor");
const core_1 = require("@nestjs/core");
const player_module_1 = require("./player/player.module");
const cms_module_1 = require("./cms/cms.module");
const api_module_1 = require("./api/api.module");
const auth_module_1 = require("./admin/auth/auth.module");
const adminlogin_module_1 = require("./admin/adminlogin/adminlogin.module");
const media_controller_1 = require("./media/media.controller");
const media_service_1 = require("./media/media.service");
const media_module_1 = require("./media/media.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public'),
                exclude: ['/api/(.*)'],
            }),
            schedule_1.ScheduleModule.forRoot(),
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: () => ({
                    type: 'mysql',
                    host: '127.0.0.1',
                    port: 3306,
                    username: 'root',
                    password: '1234',
                    database: 'suru',
                    entities: [(0, path_1.join)(__dirname, '**', '*Entity.{ts,js}')],
                    synchronize: false,
                    logging: true,
                    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
                    migrationsRun: true
                })
            }),
            player_module_1.PlayerModule,
            schedule_1.ScheduleModule.forRoot(),
            cms_module_1.CmsModule,
            api_module_1.ApiModule,
            auth_module_1.AuthModule,
            adminlogin_module_1.AdminloginModule,
            media_module_1.MediaModule,
        ],
        controllers: [app_controller_1.AppController, media_controller_1.MediaController],
        providers: [app_service_1.AppService, common_1.Logger, {
                provide: core_1.APP_INTERCEPTOR,
                useClass: LoggingInterceptor_1.LoggingInterceptor,
            }, media_service_1.MediaService,],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map