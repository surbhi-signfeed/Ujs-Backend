import {Logger, Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {join} from "path";
import {ScheduleModule} from "@nestjs/schedule";
import {ConfigModule} from "@nestjs/config";
import {ServeStaticModule} from "@nestjs/serve-static";
import {LoggingInterceptor} from "./LoggingInterceptor";
import {APP_INTERCEPTOR} from "@nestjs/core";
import { PlayerController } from './player/player.controller';
import { PlayerModule } from './player/player.module';
import { CmsController } from './cms/cms.controller';
import { CmsModule } from './cms/cms.module';
import { ApiController } from './api/api.controller';
import { ApiModule } from './api/api.module';
import { AuthModule } from './admin/auth/auth.module';
import { AdminloginModule } from './admin/adminlogin/adminlogin.module';

import { MenuBoardEntity } from './api/Entity/MenuBoardEntity'
import { MediaController } from './media/media.controller';
import { MediaService } from './media/media.service';
import { MediaModule } from './media/media.module';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public'),
            exclude: ['/api/(.*)'],
        }),
        ScheduleModule.forRoot(),
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                type: 'mysql',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: '1234',
                database: 'suru',
                entities: [join(__dirname, '**', '*Entity.{ts,js}')],
                synchronize: false,
                logging: true,
                migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
                migrationsRun: true
            })
        }),


        PlayerModule,
        ScheduleModule.forRoot(),
        CmsModule,
        ApiModule,
        AuthModule,
        AdminloginModule,
        MediaModule,

    ],
    controllers: [AppController, MediaController],
    providers: [AppService, Logger, {
        provide: APP_INTERCEPTOR,
        useClass: LoggingInterceptor,
    }, MediaService, ],
})
export class AppModule {
}
