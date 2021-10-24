int    HTTP_PORT   = 80;
String HTTP_METHOD = "POST";
char   HOST_NAME[] = "94.250.255.234";
String PATH_NAME   = "/api/get_hangar_status";



void pingData(){
int is_open_door = digitalRead(PIN_is_open_door);

      if(client.connect(HOST_NAME, HTTP_PORT)) {
  Serial.println("connection");
 
  String queryString = "";
  queryString = queryString + "is_open_door=" + is_open_door + "&";
  queryString = queryString + "gate_door=" + gate_door + "";
   



  client.println("POST /api/get_hangar_status HTTP/1.1");
  client.println("Host: "+String(HOST_NAME));
  client.println("Content-Type: application/x-www-form-urlencoded");
  client.println("Connection: close");
  client.print("Content-Length: ");
  client.println(queryString.length());
  client.println();
  client.print(queryString);
  client.println();


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
   Serial.println(doc["gate_door"].as<long>());
int gate_door_temp = doc["gate_door"].as<long>();

if (gate_door_temp==1){
  gate_door=0;
  Serial.println("GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG");
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
