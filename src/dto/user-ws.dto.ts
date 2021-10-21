import { Socket } from "socket.io";

export class UserWsDto{
  uid:string
  ws:Socket
}