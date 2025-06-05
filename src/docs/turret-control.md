# 🎯 Turret Control Module

The **Turret Control Module** is the heart of your Project Aegis build. It connects hardware-level servo control with your software interface, enabling precise movement for both manual and autonomous systems.

This guide covers wiring, basic control scripts, calibration, and extensions.

---

## 🔌 GPIO Wiring

You'll need two servo motors: one for **pan** (horizontal rotation) and one for **tilt** (vertical movement).

| Servo      | GPIO Pin | Physical Pin               |
| ---------- | -------- | -------------------------- |
| Pan Servo  | GPIO 17  | Pin 11                     |
| Tilt Servo | GPIO 18  | Pin 12                     |
| GND        | —        | Pin 6                      |
| 5V         | —        | External power recommended |

> ⚠️ **Important:** Do not power the servos directly from the Pi’s 5V rail. Use a separate 5V supply capable of 2A+.

---

## 🧪 Basic Python Control Script

Install `RPi.GPIO` and `time` (usually preinstalled):

```bash
sudo apt update
sudo apt install python3-rpi.gpio

Create a simple control script:

# turret.py
import RPi.GPIO as GPIO
import time

PAN_PIN = 17
TILT_PIN = 18

GPIO.setmode(GPIO.BCM)
GPIO.setup(PAN_PIN, GPIO.OUT)
GPIO.setup(TILT_PIN, GPIO.OUT)

pan = GPIO.PWM(PAN_PIN, 50)
tilt = GPIO.PWM(TILT_PIN, 50)

pan.start(7.5)   # neutral
tilt.start(7.5)

def move(pan_angle, tilt_angle):
    pan_duty = 2.5 + (pan_angle / 18)
    tilt_duty = 2.5 + (tilt_angle / 18)
    pan.ChangeDutyCycle(pan_duty)
    tilt.ChangeDutyCycle(tilt_duty)
    time.sleep(0.3)

try:
    while True:
        angle = int(input("Enter angle (0-180): "))
        move(angle, angle)
except KeyboardInterrupt:
    print("Exiting...")
finally:
    pan.stop()
    tilt.stop()
    GPIO.cleanup()

🎛️ Angle Calibration

Typical servo range is 0° to 180°, but may vary.
Angle	Duty Cycle
0°	~2.5%
90°	~7.5%
180°	~12.5%

You may need to adjust these values based on your specific servo’s limits.
🧠 Modular Control API

Project Aegis includes a modular Python controller:

cd ~/aegis-core
python3 turret.py --mode remote

Modes:

    remote: Controlled via web interface

    auto: Computer vision + tracking

    test: Manual CLI interface

Example CLI command:

python3 turret.py --pan 90 --tilt 45

🔌 REST Control Interface

The turret also supports REST-based HTTP commands:

POST /api/move
{
  "pan": 60,
  "tilt": 30
}

This allows remote control from your app, phone, or another device.
🧩 Extending

    Add a third servo for rotation or payload release

    Integrate with joystick input (e.g. Xbox controller)

    Add logging for telemetry and diagnostics

⚠️ Safety & Responsiveness

    Use try/except to gracefully handle servo errors

    Never exceed servo range (typically 0–180°)

    Limit movement speed if using fragile payloads

✅ Next Steps

    Build the Remote Ops Interface

    Integrate Autonomous Targeting

    Configure Your Fire Control System

Built by the Aegis community to empower decentralized defense.
```
