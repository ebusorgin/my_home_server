import { Get, Injectable } from "@nestjs/common";
import { UserWsDto } from "./dto/user-ws.dto";

@Injectable()
export class AppService {
  public USERS = [] as UserWsDto[]


}
