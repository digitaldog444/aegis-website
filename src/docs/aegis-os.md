# 🧠 Aegis OS – Full System Image for Project Aegis

**Aegis OS** is a lightweight, preconfigured Linux image designed to run Project Aegis out-of-the-box. It includes:

- ⚙️ Pre-installed turret control software
- 🧠 OpenCV and servo drivers
- 🌐 Remote Ops web interface
- 🔐 Tailscale VPN + firewall
- 🔧 CLI tools and auto-run scripts

---

## 📥 Download the Image

Get the latest `.img.xz` file from:

```txt
https://projectaegis.dev/downloads/aegis-os-latest.img.xz

    ✅ SHA256 checksums are available for verification

💾 Flash the SD Card

Use Raspberry Pi Imager or balenaEtcher:

    Select the downloaded aegis-os.img.xz

    Choose your SD card (8GB minimum, 16GB recommended)

    Flash and insert into Raspberry Pi

🛠 First Boot Configuration

    Connect a USB keyboard & HDMI screen (or enable SSH via boot/ssh)

    Power on your Pi

    Log in with default credentials:

username: aegis
password: projectaegis

    Run the setup script:

sudo /opt/aegis/setup.sh

This will:

    Enable camera, SSH, and servos

    Prompt for Wi-Fi and Tailscale setup

    Launch the turret control system in safe mode

⚙️ Included Software Stack
Component	Purpose
Python 3.11	Turret scripts, vision modules
Flask/FastAPI	Web API + Control Panel
OpenCV 4.8	Object detection + tracking
Pigpio	Low-latency servo control
Tailscale VPN	Remote secure networking
MJPEG Streamer	Camera feed to web interface
aegis-cli	Command-line control interface
🔁 Auto-Run Behavior

At boot, the OS will:

    Start the vision service (vision.py)

    Launch local server on http://<pi-ip>:8000

    If Tailscale is connected, expose control remotely

    Run in --mode safe by default (manual fire only)

📡 Network Config

Edit Wi-Fi directly on SD card before boot:

boot/wpa_supplicant.conf

Or configure manually via:

sudo raspi-config

🧠 Aegis CLI Usage

aegis status       # View system status
aegis fire         # Trigger payload
aegis pan 90       # Set pan angle
aegis tilt 45      # Set tilt angle
aegis stream start # Begin video feed

Add --verbose for debug mode.
🔐 Security Defaults

    ufw enabled: only port 8000 open

    Root login disabled via SSH

    Tailscale required for remote access

    Default mode: safety ON, manual fire only

🧩 Customization

Advanced users can:

    Swap in their own payload modules (/opt/aegis/payloads/)

    Add custom WebSocket or MQTT handlers

    Reconfigure startup with rc.local or systemd

✅ What's Next?

    Connect Over Secure VPN

    Customize Payload Logic

    Build Autonomous Vision Modes

    Launch from Web Interface
```
