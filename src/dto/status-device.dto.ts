import { Field, Int, ObjectType } from "@nestjs/graphql";

export class StatusDeviceDto {
  btn1: number
  btn2: number
  btn3: number
  btn4: number
  btn5: number
  btn6: number
  btn7: number
  btn8: number
  btn9: number
  btn10: number
  btn11: number
  btn12: number
  btn13: number
  btn14: number
  btn15: number
  btn16: number
  light_hangar_gates: number
  gate_door: number
  is_open_door: number
  needUsers: number
  event_alarm_hangar: number
  event_alarm_home: number
}

@ObjectType()
export class deviceStatus {
  @Field(type=>Int)
  btn1: number
  btn2: number
  btn3: number
  btn4: number
  btn5: number
  btn6: number
  btn7: number
  btn8: number
  btn9: number
  btn10: number
  btn11: number
  btn12: number
  btn13: number
  btn14: number
  btn15: number
  btn16: number
  light_hangar_gates: number
  gate_door: number
  is_open_door: number
  needUsers: number
}