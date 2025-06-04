# 🛠️ Your First Turret Build

Welcome to your first hands-on experience with Project Aegis. In this guide, we’ll walk you through building a basic autonomous or remotely operated turret using affordable, widely available components.

---

## 🧰 What You’ll Need

### Hardware

- Raspberry Pi 4 (2GB or more recommended)
- Micro SD card (16GB+)
- Pi Camera Module or USB webcam
- SG90 servo motors × 2 (for pan and tilt)
- 3D-printed or laser-cut turret frame
- Power supply (5V 2.5A for Pi, separate power for servos)
- Optional: LED, laser pointer, or non-lethal projectile device (e.g. Nerf, paintball)

### Tools

- Micro USB power cable
- Jumper wires (male-to-female and male-to-male)
- Breadboard or GPIO breakout
- Screwdriver, hot glue, tape, etc.

---

## 🔌 Wiring Overview

1. **Connect the servos to GPIO:**

   - Pan Servo Signal → GPIO 17 (Pin 11)
   - Tilt Servo Signal → GPIO 18 (Pin 12)
   - Both servos need 5V and GND (separate power source recommended)

2. **Connect camera module:**

   - Plug into the CSI port (or use USB if using webcam)

3. **Power your Raspberry Pi and test your camera using:**

   ```bash
   libcamera-hello
   ```

🧠 Flash AegisOS

We recommend using AegisOS, our lightweight Linux image preconfigured with:

    Python control modules

    OpenCV vision system

    Remote web interface

    Systemd service autostart

Flash Instructions

    Download AegisOS from the official GitHub releases

    Use Balena Etcher or Raspberry Pi Imager to write the .img file to your SD card

    Insert SD card into Pi and power on

⚙️ Running the Software

SSH into your Pi (default aegis.local) and start the turret controller:

cd ~/aegis-core
python3 turret.py --mode remote

You can now control the turret via the web interface on your local network.

For autonomous targeting:

python3 turret.py --mode auto

🎯 Web Interface

    Access the remote control panel at: http://<your-pi-ip>:8000

    Live camera feed + joystick controls

    Buttons for pan/tilt/fire

    Works on desktop and mobile

🧪 Test Your Build

    Move turret using arrow keys or UI

    Check that servos respond smoothly

    Attach your payload device and test firing mechanism

    Calibrate zero position for better accuracy

🚨 Safety First

This project is for educational and defensive research purposes only. Use dummy payloads or non-lethal components while testing. Never aim at people or animals.

    ❗ Always check local laws before deploying any projectile- or vision-enabled devices.

✅ What’s Next?

    Customize Payloads

    Integrate Computer Vision

    Remote Ops Over Internet
