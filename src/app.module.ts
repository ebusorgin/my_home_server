import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { WsGateway } from './ws.gateway';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from 'path';
import { ApiController } from './api/api.controller';
import { ApiService } from './api/api.service';
@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public'),
  }),],
  controllers: [AppController, ApiController],
  providers: [AppService, WsGateway, ApiService],
})
export class AppModule {}
