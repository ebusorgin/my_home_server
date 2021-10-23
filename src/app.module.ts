import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { WsGateway } from "./ws.gateway";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { ApiController } from "./api/api.controller";
import { ApiService } from "./api/api.service";
import { GraphQLModule } from '@nestjs/graphql';
@Module({
  imports: [
    // GraphQLModule.forRoot({
    //   debug:true,
    //   playground:true,
    //   autoSchemaFile: join(process.cwd(),'src/schema.gql'),
    // }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public")
    })],
  controllers: [AppController, ApiController],
  providers: [AppService, WsGateway, ApiService]
})
export class AppModule {
}
