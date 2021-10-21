import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket, Server } from 'socket.io';
import { Logger } from '@nestjs/common';
import { AppService } from "./app.service";
import { ApiService } from "./api/api.service";
import { UserInfo } from "os";
import { UserWsDto } from "./dto/user-ws.dto";
@WebSocketGateway()
export class WsGateway {
  constructor(public appService:AppService,private apiService:ApiService) {
  }

  @WebSocketServer()
  server: Server;

  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('light')
  handleMessage(client: Socket, payload: string): void {


    console.log('!!!!!!!!!!!!!!!!!')
    this.server.emit('msgToClient', payload);
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    client.emit('config',this.apiService.getConfig())
    this.appService.USERS.push({
      uid:client.id,
      ws:client
    } as UserWsDto)

  }

}
