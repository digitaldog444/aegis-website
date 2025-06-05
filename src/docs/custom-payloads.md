# 💥 Custom Payload Systems

Project Aegis supports a wide variety of payload types — from visual deterrents to kinetic and signal-based systems — all modular, open source, and user-controlled.

This page covers design types, wiring strategies, and software triggers.

---

## 🎯 Payload Categories

| Type         | Examples                          | Use Cases                       |
| ------------ | --------------------------------- | ------------------------------- |
| Non-lethal   | Laser pointer, strobe, buzzer     | Warning, tracking confirmation  |
| Marker       | Nerf dart, paintball, ink sprayer | Training, tagging, simulation   |
| Actuation    | Servo-based triggers, solenoids   | Triggering mechanical devices   |
| Signal-based | Radio pings, IR beacons, LoRa msg | Alerting or remote coordination |

> 🧠 You can combine payloads — e.g., a laser + camera tracker or Nerf + Wi-Fi alert.

---

## 🧰 Hardware: Triggering Methods

### 1. **Servo Trigger**

Attach a servo to pull or push a release mechanism (e.g., spring-loaded Nerf launcher):

```python
import RPi.GPIO as GPIO
import time

TRIGGER_PIN = 27
GPIO.setmode(GPIO.BCM)
GPIO.setup(TRIGGER_PIN, GPIO.OUT)

trigger = GPIO.PWM(TRIGGER_PIN, 50)
trigger.start(2.5)

def fire():
    trigger.ChangeDutyCycle(12.5)  # push
    time.sleep(0.2)
    trigger.ChangeDutyCycle(2.5)   # reset

2. MOSFET or Relay Trigger

For devices requiring more power (e.g., lights, solenoids, motors):

GPIO → NPN transistor or MOSFET gate
Device powered via 5V/12V external supply
Flyback diode across inductive loads (e.g., solenoid)

Use a GPIO pin to activate the base/gate of the transistor:

GPIO.setup(22, GPIO.OUT)
GPIO.output(22, True)  # Fire

🔥 Software Integration

In your turret control script, define a fire() function:

def fire():
    print("Firing payload!")
    # Servo or relay logic here

Then trigger it on command:

    From REST API /api/fire

    After target lock in --mode auto

    Via hotkey or web button in --mode remote

🧪 Test Mode

Use --mode test to test your fire control safely:

python3 turret.py --mode test

    Manual control of pan/tilt/fire

    Dry-run mode without vision tracking

🔐 Safety Lockouts

Add safety logic to prevent accidental firing:

safety_on = True

def fire():
    if safety_on:
        print("⚠️ SAFETY ON — ABORTED")
        return
    # else, proceed with fire sequence

You can also add a safety toggle switch (hardware or web UI).
🧠 Payload Ideas
Payload	Description
Laser pointer	For visual targeting/confirmation
Ink sprayer	Tag intruders (harmless dye)
Paintball gun	Low-impact crowd dispersal (outdoors only)
Buzzer or speaker	Audible warnings or alarms
Water blaster	Harmless test mechanism
Smoke emitter	Distraction or simulation use

    ⚠️ Legal Notice: Check your local laws regarding projectiles, lasers, and autonomous systems.

🔧 Modular Payload Framework (Coming Soon)

We're building a plug-and-play system where you can:

    Register payload modules (payload_laser.py, payload_nerf.py)

    Define behavior triggers in config (auto_on_lock: true)

    Switch payloads without changing main logic

✅ Next Steps

    Autonomous Targeting

    Remote Ops Interface

    Deploy Over Secure Network

    Designed for ethical research, defense automation, and educational use only.
    Be responsible. Be safe. Be open source.

Built by the Project Aegis team & contributors.
```
