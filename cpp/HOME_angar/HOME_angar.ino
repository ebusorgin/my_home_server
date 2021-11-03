#include <SPI.h>
#include <Ethernet.h>
#include <TimerMs.h>
#include <ArduinoJson.h>
#include <FastLED.h>
#define NUM_LEDS 2
#define DATA_PIN 6
#define CLOCK_PIN 13
CRGB leds[NUM_LEDS];
byte mac[] = { 
  0x00, 0xAA, 0xBB, 0xCC, 0xDE, 0x02 };
IPAddress ip(192, 168, 1, 128);

EthernetClient client;
int PIN_hangar_gates = 3;//реле свет на воротах,
int PIN_gate_door = 4;//реле  дверь воротах,
int PIN_is_open_door = 5;//статус открытых дверей,
int light_hangar_gates = 1;
int gate_door = 0; 
TimerMs tmr(5000, 1, 1);

void setup() {
   FastLED.addLeds<WS2812, DATA_PIN, BRG>(leds, NUM_LEDS);
  pinMode(PIN_hangar_gates, OUTPUT);
  pinMode(PIN_gate_door, OUTPUT);
  pinMode(PIN_is_open_door, INPUT_PULLUP);
   Serial.begin(9600);
  while (!Serial);
  delay(100);
 
 
    if (Ethernet.begin(mac) == 0) {
    Serial.println("Failed to obtaining an IP address using DHCP");
    while(true);
  }
 Serial.println("status:board1:1");
   tmr.setPeriodMode();
 
}
void loop() {

  if (tmr.tick()) pingData();
  
    // Turn the LED on, then pause
//  leds[1] = CRGB(0, 0, 255);
//  FastLED.show();
//  delay(500);
//  // Now turn the LED off, then pause
//  leds[1] = CRGB::Black;
//  FastLED.show();
//  delay(500);
  
}
