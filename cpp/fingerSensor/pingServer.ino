int    HTTP_PORT   = 80;
String HTTP_METHOD = "POST";
char   HOST_NAME[] = "94.250.255.234";
String PATH_NAME   = "/set_status";


void sendBtn(int btnnum,int value){
  if(client.connect(HOST_NAME, HTTP_PORT)) {
   String queryString = "";

   queryString = queryString + "btn=" + btnnum + "&";
   queryString = queryString + "value=" + value + "&";
  client.println("POST /api/btnstatus HTTP/1.1");
  client.println("Host: "+String(HOST_NAME));
  client.println("Content-Type: application/x-www-form-urlencoded");
  client.println("Connection: close");
  client.print("Content-Length: ");
  client.println(queryString.length());
  client.println();
  client.print(queryString);
  client.println();
  client.stop();
  }else{
    Serial.println("ddddddddddddddddddddd");
    }
  }
void pingData(){


      if(client.connect(HOST_NAME, HTTP_PORT)) {
  Serial.println("start ping");
 
  String queryString = "";
  queryString = queryString + "btn1=" + btn1 + "&";
  queryString = queryString + "btn2=" + btn2 + "&";
  queryString = queryString + "btn3=" + btn3 + "&";
  queryString = queryString + "btn4=" + btn4 + "&";
  queryString = queryString + "btn5=" + btn5 + "&";
  queryString = queryString + "btn6=" + btn6 + "&";
  queryString = queryString + "btn7=" + btn7 + "&";
  queryString = queryString + "btn8=" + btn8 + "&";
  queryString = queryString + "btn9=" + btn9 + "&";
  queryString = queryString + "btn10=" + btn10 + "&";
  queryString = queryString + "btn11=" + btn11 + "&";
  queryString = queryString + "btn12=" + btn12 + "&";
  queryString = queryString + "btn13=" + btn13 + "&";
  queryString = queryString + "btn14=" + btn14 + "&";
  queryString = queryString + "btn15=" + btn15 + "&";
  queryString = queryString + "btn16=" + btn16 + "";

   
Serial.println("connected");
client.println("POST /api/set_status HTTP/1.1");
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
btn1 = doc["btn1"].as<long>();digitalWrite(22,btn1);
btn2 = doc["btn2"].as<long>();digitalWrite(24,btn2);
btn3 = doc["btn3"].as<long>();digitalWrite(26,btn3);
btn4 = doc["btn4"].as<long>();digitalWrite(28,btn4);

   Serial.println(btn1);

  } else {// if not connected:
    Serial.println("connection failed");
  }
  }
