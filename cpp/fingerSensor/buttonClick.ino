void lightStep(int sensor,int outPin,int *btn,int num) {
   delay(50);
     if (digitalRead(sensor) == HIGH) {
       if (*btn==1) *btn = 0;else *btn = 1;
    digitalWrite(outPin, *btn); 
    sendBtn(num,*btn);
    delay(1000);
      }
  }
  
void buttonClick() {
//  digitalWrite(22, 0); 
//  digitalWrite(24, 0);
//  digitalWrite(26, 0);
//  digitalWrite(28, 0);
   if (digitalRead(23) == HIGH) lightStep(23,22,&btn1,1);
   if (digitalRead(25) == HIGH) lightStep(25,24,&btn2,2);
   if (digitalRead(27) == HIGH) lightStep(27,26,&btn3,3);
   if (digitalRead(29) == HIGH) lightStep(29,28,&btn4,4);
//
//
//   Serial.println(analogRead(A0));
//  if (analogRead(A0)>=300) {
//    delay(500);
//     if (analogRead(A0)>=300) {
//         delay(500);
//      if (analogRead(A0)>=300) {
//         digitalWrite(6, HIGH);
//    for (int i = 0; i < 39; i++){
//      
//      
//      tone(SPEAKER, notes[i], times[i]*2);
//      digitalWrite(26, LOW); 
//      digitalWrite(24, LOW); 
//      digitalWrite(22, LOW); 
//      delay((times[i]*2)/2);
//      noTone(SPEAKER);
//      digitalWrite(26, HIGH);
//      digitalWrite(24, HIGH); 
//      digitalWrite(22, HIGH);
//      delay((times[i]*2)/2);
//      }
//      digitalWrite(26, HIGH);
//      digitalWrite(24, LOW); 
//      digitalWrite(22, LOW);
//       
//  } else {
//     digitalWrite(6, LOW);
//    }
//    
//        }
//      }
     
    
    
}
