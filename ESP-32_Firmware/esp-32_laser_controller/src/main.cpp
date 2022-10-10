#include <Arduino.h>
#include <TMC2209.h>

// Define the pins used for the TMC2209 UART interface
#define RXD2 16
#define TXD2 17

const int32_t VELOCITY = 10000; // 10,000 steps per second?

// Instantiate TMC2209
TMC2209 stepper_driver;

const long SERIAL2_BAUD_RATE = 500000;

void setup()
{
  Serial.begin(115200);
  stepper_driver.setup(Serial2,SERIAL2_BAUD_RATE);  
}
void loop() {
  // put your main code here, to run repeatedly:
  
  if (stepper_driver.isSetupAndCommunicating())
  {
    delay(10000);
    Serial.println("Stepper driver is setup and communicating!");
    Serial.println("Try turning driver power off to see what happens.");
    stepper_driver.enable();
    stepper_driver.moveAtVelocity(VELOCITY);
  }
  else if (stepper_driver.isCommunicatingButNotSetup())
  {
    Serial.println("Stepper driver is communicating but not setup!");
    Serial.println("Running setup again...");
    delay(1000);
    stepper_driver.setup(Serial2,SERIAL2_BAUD_RATE);
  }
  else
  {
    delay(1000);
    Serial.println("Stepper driver is not communicating!");
    Serial.println("Try turning driver power on to see what happens.");
  }
}