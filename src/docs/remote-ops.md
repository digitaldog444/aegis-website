# 🌐 Remote Ops Interface

Project Aegis includes a **remote operations system** for controlling turrets via a browser or HTTP API. With this setup, you can:

- View live camera feeds
- Aim using joystick or touch input
- Fire your custom payload
- Send commands remotely over LAN or WAN

---

## 🧱 Architecture Overview

```txt
[User Interface]
     ↓
[Local Web Server]  ←→  [Python Control Script]
     ↓
[GPIO Pins / Servo / Payload Trigger]

    Built with Next.js or Express.js for the frontend

    Python backend using Flask or FastAPI to relay commands

    Optional: WebSocket for live updates

⚙️ Installation
Prerequisites:

    Python 3.9+

    Flask or FastAPI

    Aegis turret software installed

Run the Web Server:

cd ~/aegis-core/web
python3 server.py

Server will start on:

http://<your-pi-ip>:8000

You’ll see the control panel with:

    Pan/Tilt joystick

    Fire button

    Live video (via MJPEG or WebRTC)

🎮 Interface Features
✅ Joystick UI

    Drag to aim the turret in real time

    Pan mapped to X-axis

    Tilt mapped to Y-axis

    Touch/Mouse support

✅ Fire Button

    Sends /api/fire request

    Can be restricted with a safety toggle

✅ Live Video Feed

Stream options:
Method	Tech	Notes
MJPEG	Flask	Low latency, easy setup
WebRTC	aiortc	High quality, harder to host
Snapshot	Static JPEG	Simple fallback option
📡 REST API Reference

Send commands directly from scripts or other systems:
Move Turret

POST /api/move
Content-Type: application/json

{
  "pan": 90,
  "tilt": 45
}

Fire Payload

POST /api/fire

Enable/Disable Safety

POST /api/safety
{
  "enabled": true
}

📱 Mobile Control

The UI is responsive by default. For best mobile experience:

    Use full-screen mode

    Add to home screen as PWA (if enabled)

    Control with your thumb via virtual joystick

🔐 Access Control

To prevent unauthorized access:

    Run behind a VPN (e.g., Tailscale)

    Add Basic Auth or JWT tokens

    Optional: IP whitelisting or geofence

🌍 Public Access (Optional)

To access over the internet:

    Set up dynamic DNS (e.g. DuckDNS)

    Port forward port 8000 on your router

    Or tunnel with ngrok, localtunnel, or Cloudflare Tunnel

    ⚠️ Security Warning
    Exposing a weapon system to the public internet is inherently dangerous. Use authentication, encryption, and strict access controls.

✅ Next Steps

    Integrate Vision Tracking

    Build Your Payload System

    Secure Long-Range Networking
```
