# 🌐 Secure Networking for Project Aegis

This guide outlines networking strategies to **safely and reliably operate your turret system remotely**.

Whether you're controlling over LAN, accessing your unit from miles away, or setting up mesh-based off-grid systems, this page has you covered.

---

## 📡 Connection Modes

| Mode                 | Description                               | Difficulty | Secure? |
| -------------------- | ----------------------------------------- | ---------- | ------- |
| Local LAN            | Control within same Wi-Fi network         | Easy       | ✅      |
| VPN (e.g. Tailscale) | Control from anywhere over encrypted mesh | Medium     | ✅✅✅  |
| Port Forwarding      | Open access to your Pi via your router    | Medium     | ⚠️❌    |
| Mesh (LoRa/WiFi)     | Off-grid, short-range comms               | Advanced   | ✅      |

---

## 🧭 Mode 1: LAN Access

Find your Pi’s IP address:

```bash
hostname -I

Visit the dashboard:

http://192.168.1.42:8000

Make sure both your Pi and control device are on the same Wi-Fi network.
🔐 Mode 2: Tailscale VPN (Recommended)

Create a free tailscale.com account and install on your Pi:

curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up

You’ll now be able to reach your turret from anywhere using its Tailscale IP:

http://100.x.x.x:8000

    ✅ Advantages:

        Fully encrypted

        No port forwarding

        Works behind CGNAT, firewalls

🌍 Mode 3: Public Port Forwarding (Not Recommended)

Log into your router and forward port 8000 to your Pi’s IP.

Example config:

    Internal IP: 192.168.1.42

    Port: 8000

    Protocol: TCP

Then access it via:

http://your-public-ip:8000

    ⚠️ You MUST add authentication if using this method (e.g., Basic Auth or JWT).
    Consider HTTPS via reverse proxy like Nginx or Caddy.

🛰️ Mode 4: Off-Grid Mesh Comms (Advanced)

For tactical, decentralized, or disconnected environments:
Option A: ESP-NOW / LoRa Mesh

    Use LoRa32, Heltec, or ESP32 radios

    Send JSON commands over serial

    Range: 500m–10km line of sight

Option B: Ad-Hoc Wi-Fi Mesh

    Use Wi-Fi adapters in AP/Ad-Hoc mode

    Create static IP mesh (no internet needed)

    Optionally run lightweight MQTT broker or UDP commands

Option C: Ham Radio / APRS (Experimental)

    Encode messages into APRS packets

    Decode and relay fire/move commands over RF

    ⚠️ Check local licensing laws before use

🔐 Security Tips

    🔒 Always enable firewall rules on the Pi:

    sudo ufw allow 8000
    sudo ufw enable

    ✅ Use Tailscale ACLs to limit who can access your turret

    ✅ Never expose /api/fire endpoints unauthenticated

    🔐 Store keys/tokens in .env files and avoid hardcoding

🛠 Example: Auto-Connect Script

Make your Pi reconnect to Tailscale at boot:

sudo nano /etc/rc.local

# Add before exit 0
tailscale up --authkey YOUR_KEY_HERE

You can also monitor uptime and connectivity via Tailscale’s admin panel.
✅ What's Next?

    Set Up the Remote Control UI

    Integrate Vision + Fire Control

    Design & Trigger Custom Payloads

    Join the Aegis Network
```
