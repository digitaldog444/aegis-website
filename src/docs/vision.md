# 👁️ Computer Vision Targeting

The **Vision Module** enables your Aegis turret to autonomously detect, track, and respond to objects using a camera feed and OpenCV. This allows for automated surveillance, tracking moving targets, and triggering fire control logic when specific criteria are met.

---

## 📦 Requirements

Install required packages on your Raspberry Pi:

```bash
sudo apt update
sudo apt install python3-opencv
pip install numpy

Optional (for USB cameras):

sudo apt install fswebcam

📸 Camera Setup

Enable your camera via raspi-config or use a USB webcam.

Test the feed:

libcamera-hello

For USB:

fswebcam image.jpg

🧪 Basic Object Detection Example

Create a simple Python script to detect motion:

# vision.py
import cv2

cap = cv2.VideoCapture(0)
_, frame1 = cap.read()
_, frame2 = cap.read()

while cap.isOpened():
    diff = cv2.absdiff(frame1, frame2)
    gray = cv2.cvtColor(diff, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (5,5), 0)
    _, thresh = cv2.threshold(blur, 20, 255, cv2.THRESH_BINARY)
    dilated = cv2.dilate(thresh, None, iterations=3)
    contours, _ = cv2.findContours(dilated, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    for c in contours:
        if cv2.contourArea(c) < 1000:
            continue
        (x, y, w, h) = cv2.boundingRect(c)
        cv2.rectangle(frame1, (x,y), (x+w, y+h), (0,255,0), 2)

    cv2.imshow("Turret Vision", frame1)
    frame1 = frame2
    _, frame2 = cap.read()

    if cv2.waitKey(10) == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()

🎯 Target Lock & Servo Control

Extend the script to calculate the center of the bounding box and translate it into pan/tilt angles for the servos.

target_x = x + w // 2
target_y = y + h // 2

# map target_x, target_y to servo angles
pan_angle = map(target_x, 0, frame_width, 0, 180)
tilt_angle = map(target_y, 0, frame_height, 0, 180)

move(pan_angle, tilt_angle)

Add logic to:

    Only track the largest contour

    Ignore false positives using frame stability checks

    Trigger fire control after lock confirmation

🧠 Face Detection (Optional)

You can enable face tracking using OpenCV’s pretrained classifiers:

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
faces = face_cascade.detectMultiScale(gray, 1.1, 4)

for (x, y, w, h) in faces:
    # Draw box and track
    cv2.rectangle(frame, (x, y), (x+w, y+h), (255,0,0), 2)

⚙️ Running Autonomous Mode

Launch the turret in auto mode:

python3 turret.py --mode auto

This uses:

    Live camera feed

    Motion detection

    Servo tracking

    Target acquisition logic

    Optional: fire trigger after threshold

🛡️ Safety & Ethics

Project Aegis does not support hostile or unethical use of automated targeting systems. You must:

    Use dummy payloads in testing

    Never deploy against people or animals

    Comply with all local and international laws

    This module is provided for education, research, and lawful defense automation only.

✅ What’s Next?

    Remote Control Integration

    Add Custom Payload Support

    Secure Remote Deployment
```
