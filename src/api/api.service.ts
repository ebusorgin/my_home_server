import { Injectable } from '@nestjs/common';
import { StatusDeviceDto } from "../dto/status-device.dto";
import { WsGateway } from "../ws.gateway";
import { AppService } from "../app.service";

@Injectable()
export class ApiService {
  constructor(private appService:AppService) {
  }
  private CONFIG = {
    btn1:1,
    btn2:1,
    btn3:1,
    btn4:1,
    btn5:1,
    btn6:1,
    btn7:1,
    btn8:1,
    btn9:1,
    btn10:1,
    btn11:1,
    btn12:1,
    btn13:1,
    btn14:1,
    btn15:1,
    btn16:1,
    light_hangar_gates:1,
    gate_door:0,
    is_open_door:1,
    needUsers:1
  } as StatusDeviceDto

  getConfig(){
    return this.CONFIG
  }
  sedMessageAllUsers(){
    this.appService.USERS.map((user)=>{
      user.ws.emit('config',this.CONFIG)
    })
  }
  set_status(data:StatusDeviceDto){
    this.sedMessageAllUsers();
    return JSON.stringify(this.CONFIG)
  }
  get_hangar_status (data:StatusDeviceDto) {


    this.CONFIG['is_open_door'] = +data.is_open_door
    let conf =  JSON.stringify(this.CONFIG)

    if (this.CONFIG.gate_door==1){
      this.CONFIG.gate_door = 0
    }
    this.sedMessageAllUsers();
    return conf
  }
  btnstatus (data) {
    this.CONFIG['btn'+data.btn] = data.value
    this.sedMessageAllUsers();

    return JSON.stringify(this.CONFIG);
  }

}
