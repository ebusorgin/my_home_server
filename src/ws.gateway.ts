import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket, Server } from 'socket.io';
import { Logger } from '@nestjs/common';
import { AppService } from "./app.service";
import { ApiService } from "./api/api.service";
import { StatusDeviceDto } from "./dto/status-device.dto";
@WebSocketGateway()
export class WsGateway {
  constructor(public appService:AppService,private apiService:ApiService) {
  }

  @WebSocketServer()
  server: Server;

  private logger: Logger = new Logger('WsGateway');

  @SubscribeMessage('config')
  handleMessage(client: Socket, payload: StatusDeviceDto): void {
    this.apiService.setConfig(payload)
  }



  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`User disconnected: ${client.id}`);
    this.appService.deleteUser(client)

  }

  handleConnection(client: Socket, ...args: any[]) {
    client.emit('config',this.apiService.getConfig())
    this.appService.createUser(client)

  }

}
