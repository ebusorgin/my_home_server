import { Body, Controller, Get, Post } from "@nestjs/common";
import { StatusDeviceDto } from "../dto/status-device.dto";
import { ApiService } from "./api.service";

@Controller('api')
export class ApiController {
  constructor(private readonly apiService:ApiService) {
  }

  @Post('set_status')
  set_status(@Body() statusDeviceDto:StatusDeviceDto):string{
      return this.apiService.set_status(statusDeviceDto)
  }
  @Post('get_hangar_status')
  get_hangar_status(@Body() statusDeviceDto:StatusDeviceDto):string{
    return this.apiService.get_hangar_status(statusDeviceDto)
  }
  @Post('btnstatus')
  btnstatus(@Body() statusDeviceDto:StatusDeviceDto):string{
    return this.apiService.btnstatus(statusDeviceDto)
  }

}
