# Raspberry Pi remote-controlled (RC) car

To build a Raspberry Pi remote-controlled (RC) car from scratch, you'll need to combine hardware assembly, motor control, and network-based remote input (like via a phone or browser). Here’s a full guide to help you go from zero to a fully working RC car.
🧰 PARTS LIST
💡 Core Components

    Raspberry Pi 3/4/Zero W (must have Wi-Fi)

    16GB+ MicroSD card (with Raspberry Pi OS)

    Power Bank (5V 2A+) or Li-ion battery + 5V regulator

🚗 RC Car Base

    Chassis (2-wheel or 4-wheel drive kit)

    DC motors (x2 or x4) (usually included in kits)

    Motor driver (e.g. L298N, TB6612FNG, or L9110S)

🔌 Electronics

    Jumper wires

    Breadboard or custom wiring

    Optional: Ultrasonic sensor (for later autonomy)

    Optional: Raspberry Pi Camera Module

🛠 STEP-BY-STEP GUIDE
🔧 Step 1: Assemble the Hardware

    Mount the motors and wheels on the chassis.

    Secure the motor driver and Raspberry Pi on the car body using screws or zip ties.

    Connect the motors to the motor driver:

        Left motor → OUT1/OUT2

        Right motor → OUT3/OUT4

🔌 Step 2: Wire the Motor Driver to Pi
For L298N:
Motor Driver Raspberry Pi GPIO
IN1 GPIO17
IN2 GPIO18
IN3 GPIO22
IN4 GPIO23
ENA/ENB 5V (or use PWM GPIOs)
GND GND

Power:

    Motor driver VCC: 6V–12V (from separate battery)

    Raspberry Pi powered via USB (power bank)

💻 Step 3: Prepare the Raspberry Pi
On your Pi:

sudo apt update
sudo apt install python3-gpiozero python3-flask

Enable SSH and Wi-Fi so you can control it remotely.
🧪 Step 4: Test Motor Code (Python)

from gpiozero import Motor
from time import sleep

left = Motor(forward=17, backward=18)
right = Motor(forward=22, backward=23)

left.forward()
right.forward()
sleep(2)
left.stop()
right.stop()

🌐 Step 5: Add Web-Based Remote Control

Here’s a simple Flask web server to control your car from a browser.
rc_car.py

from flask import Flask
from gpiozero import Motor

app = Flask(**name**)

left = Motor(forward=17, backward=18)
right = Motor(forward=22, backward=23)

@app.route('/')
def index():
return '''
<h1>RC Car Control</h1>
<a href="/forward">⬆ Forward</a><br>
<a href="/left">⬅ Left</a>
<a href="/stop">⏹ Stop</a>
<a href="/right">➡ Right</a><br>
<a href="/backward">⬇ Backward</a>
'''

@app.route('/forward')
def forward():
left.forward()
right.forward()
return "Moving forward"

@app.route('/backward')
def backward():
left.backward()
right.backward()
return "Moving backward"

@app.route('/left')
def left_turn():
left.backward()
right.forward()
return "Turning left"

@app.route('/right')
def right_turn():
left.forward()
right.backward()
return "Turning right"

@app.route('/stop')
def stop():
left.stop()
right.stop()
return "Stopped"

if **name** == '**main**':
app.run(host='0.0.0.0', port=5000)

Then run:

python3 rc_car.py

Visit http://<pi-ip>:5000 on your phone or laptop.
🧠 Optional Features

    Add a camera and stream video with picamera2 or mjpg-streamer

    Control via mobile joystick (HTML + JS frontend)

    Use a gamepad or Bluetooth controller

    Integrate obstacle avoidance sensors

🛡 Pro Tips

    Always isolate motor power and Pi power to avoid brownouts.

    Use a 5V buck converter if you're powering both from a Li-ion battery.

    Secure all wires — a loose wire while driving = reboot time.

    Test direction of motors manually before coding logic.

🧪 Example Use Cases

    Web-controlled toy car

    Base for self-driving experiments

    Educational robotics demo

    Surveillance bot with streaming cam
