# 🛠️ Project Aegis Hardware Guide

This document provides everything you need to assemble the **Project Aegis turret platform** — from motors and sensors to structural components and payload mounts.

---

## 🧩 Core Components

| Component       | Recommended Model               | Purpose                    |
| --------------- | ------------------------------- | -------------------------- |
| Microcontroller | Raspberry Pi 4 / 3B+            | Runs turret logic + vision |
| Camera          | Pi Camera V2 / HQ Cam / USB Cam | Target tracking & vision   |
| Pan Servo       | MG995 / MG996R                  | Left/right motion          |
| Tilt Servo      | SG90 / MG90S                    | Up/down motion             |
| Power Supply    | 5V 3A (or USB-C PD)             | Powers Pi & servos         |
| Frame           | 3D printed / Laser cut          | Holds all components       |
| Mounting Plate  | Universal servo horn / platform | Attaches payload           |

---

## 🧠 Optional Add-ons

| Module            | Use Case                           |
| ----------------- | ---------------------------------- |
| IR Sensor / PIR   | Passive motion detection           |
| Ultrasonic sensor | Proximity sensing / obstacle avoid |
| Laser pointer     | Visual targeting                   |
| Paintball marker  | Physical marker payload            |
| LoRa module       | Long-range wireless comms          |
| Tailscale VPN     | Secure remote access               |
| Battery pack      | Portable/off-grid operation        |

---

## 🧰 Wiring Diagram

```txt
+--------------------+
|  Raspberry Pi 4    |
|                    |
|  GPIO 17 → Pan Servo (MG995)        |
|  GPIO 18 → Tilt Servo (SG90)        |
|  GPIO 27 → Trigger/Fire Relay       |
|  GND      → All components (common) |
|  5V       → Servo power rail (low load) |
+--------------------+

    For higher torque motors, use external 5V/6V supply and a MOSFET or relay to isolate Pi.

🔩 Mechanical Assembly
1. Pan/Tilt Mount

    Use an L-bracket or printed turret base

    Pan servo at the base, tilt servo on top

    Attach camera and payload to tilt plate

2. Payload Mounting

    Design a modular mounting plate (e.g., 3D printed)

    Use M3 screws or servo horns

    Payloads can be swapped dynamically with plug-in headers

3. Housing

    Use laser-cut acrylic, aluminum extrusion, or printed PLA/ABS

    Weatherproofing optional for outdoor use

🔋 Power Recommendations
Component	Typical Current	Notes
Pi 4	~0.6A idle, ~2A full load	Use official 5V 3A PSU
MG995 Servo	~500mA per move, peak 2A	Use 5-6V external PSU
Camera	~250mA	Powered from Pi

    ⚠️ Don't power large servos directly from the Pi 5V rail. Use a UBEC or separate supply.

🧪 Testing Hardware

Test servos with Python:

import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(17, GPIO.OUT)
servo = GPIO.PWM(17, 50)
servo.start(7.5)

# Sweep left-right
for angle in [5, 7.5, 10, 12.5]:
    servo.ChangeDutyCycle(angle)
    time.sleep(0.5)

🧱 Modular Expansion
Port / GPIO	Expansion Idea
I2C	OLED screen or IMU
SPI	LoRa radio
UART	GPS or telemetry
GPIO	LEDs, triggers, alarms
USB	Flashlight, secondary cam
🖨️ 3D Print Files

Download official STL files:

https://projectaegis.dev/downloads/3d/

Includes:

    Pan/Tilt assembly

    Payload mounts

    Cable routing clamps

    Screw templates

🔧 Tools You’ll Need

    Small Phillips screwdriver

    Breadboard + jumper wires

    Multimeter (for testing voltage)

    Soldering iron (optional)

    3D printer or laser cutter (optional but recommended)

✅ What’s Next?

    Install Aegis OS

    Control with Remote UI

    Build Your Payload

    Connect Over VPN
```
