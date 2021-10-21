int    HTTP_PORT   = 80;
String HTTP_METHOD = "GET";
char   HOST_NAME[] = "94.250.255.234";
String PATH_NAME   = "/get_hangar_status";



void pingData(){
int is_open_door = digitalRead(PIN_is_open_door);
 Serial.println(is_open_door);
      if(client.connect(HOST_NAME, HTTP_PORT)) {
  Serial.println("start ping");
 
  String queryString = "?";
  queryString = queryString + "is_open_door=" + is_open_door + "&";
  queryString = queryString + "gate_door=" + gate_door + "&";
   
    client.println(HTTP_METHOD + " " + PATH_NAME + queryString +" HTTP/1.1");
    client.println("Host: " + String(HOST_NAME));
    client.println("Connection: close");
    client.println(); // end HTTP header
   
//while(client.connected()) {
//      if(client.available()){
//        // read an incoming byte from the server and print it to serial monitor:
//        char c = client.read();
//        Serial.print(c);
//      }
//    }

 char endOfHeaders[] = "\r\n\r\n";
  if (!client.find(endOfHeaders)) {
    Serial.println(F("Invalid response"));
    client.stop();
    return;
  }





  DynamicJsonDocument doc(512);

  // Parse JSON object
  DeserializationError error = deserializeJson(doc, client);
  if (error) {
    Serial.print(F("deserializeJson() failed: "));
    Serial.println(error.f_str());
    client.stop();
    return;
  }
  client.stop();
int gate_door_temp = doc["gate_door"].as<long>();

if (gate_door_temp==1){
  gate_door=0;

  digitalWrite(PIN_gate_door, HIGH);
  delay(200);
  digitalWrite(PIN_gate_door, LOW);
  
  }


light_hangar_gates = doc["light_hangar_gates"].as<long>();
digitalWrite(PIN_hangar_gates, light_hangar_gates);

  

  } else {// if not connected:
    Serial.println("connection failed");
  }
  }
