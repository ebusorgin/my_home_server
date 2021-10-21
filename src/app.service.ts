import { Get, Injectable } from "@nestjs/common";
import { UserWsDto } from "./dto/user-ws.dto";
import { Socket } from "socket.io";

@Injectable()
export class AppService {
  public USERS = [] as UserWsDto[]
  createUser(socket:Socket){
    this.USERS.push({
      uid:socket.id,
      ws:socket
    } as UserWsDto)
  }
  deleteUser(socket:Socket){
    this.USERS = this.USERS.filter(user=>user.uid !== socket.id)
  }
}
