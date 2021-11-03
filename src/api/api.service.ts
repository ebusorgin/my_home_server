import { Injectable } from '@nestjs/common';
import { StatusDeviceDto } from "../dto/status-device.dto";

import { AppService } from "../app.service";
import { getSunrise, getSunset } from 'sunrise-sunset-js';

@Injectable()
export class ApiService {
  constructor(private appService:AppService) {
    setInterval(()=>{this.updateDate()},2000)
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
    needUsers:1,
    event_alarm_hangar:0
  } as StatusDeviceDto
  public sunset
  public sunrise

  updateDate(){
    this.sunset = getSunset(53.229219, 56.833872);//закат
    this.sunrise = getSunrise(53.229219, 56.833872);//восход
    let OffLight = new Date()>this.sunrise&&new Date()<this.sunset
    if (OffLight){
      this.CONFIG.btn7 = 1
      this.CONFIG.light_hangar_gates = 1
    }else{
      this.CONFIG.btn7 = 0
      this.CONFIG.light_hangar_gates = 0
    }
  }
  getConfig(){
    return this.CONFIG
  }
  alarmHangar(){
    this.CONFIG.event_alarm_hangar = 0
  }
  alarmHome(){
    this.CONFIG.event_alarm_home = 0
  }
  setConfig(cfg:StatusDeviceDto){
    this.CONFIG = cfg
  }
  sedMessageAllUsers(){
    this.appService.USERS.map((user)=>{
      user.ws.emit('config',this.CONFIG)
    })
  }
  set_status(){
    console.log('BASE')
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
    console.log(data)
    this.CONFIG['btn'+data.btn] = +data.value
    console.log(this.CONFIG)
    this.sedMessageAllUsers();

    return JSON.stringify(this.CONFIG);
  }

}
