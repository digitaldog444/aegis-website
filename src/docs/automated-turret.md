import cv2
import time
import imutils
import RPi.GPIO as GPIO

# Setup

SERVO_PIN = 18 # PWM pin connected to servo
GPIO.setmode(GPIO.BCM)
GPIO.setup(SERVO_PIN, GPIO.OUT)
pwm = GPIO.PWM(SERVO_PIN, 50)
pwm.start(7.5) # Start at neutral position

# Set initial servo angle

servo_angle = 90 # Degrees

def set_servo_angle(angle):
duty = 2 + (angle / 18)
pwm.ChangeDutyCycle(duty)

# Initialize camera

cap = cv2.VideoCapture(0)
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Constants

FRAME_CENTER = 320 # Assuming 640px width
TOLERANCE = 30 # Pixels allowed before adjusting
MAX_ANGLE = 180
MIN_ANGLE = 0

try:
while True:
ret, frame = cap.read()
if not ret:
break

        frame = imutils.resize(frame, width=640)
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        faces = face_cascade.detectMultiScale(gray, 1.3, 5)

        for (x, y, w, h) in faces:
            center_x = x + w // 2

            # Draw rectangle for visual feedback
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

            if abs(center_x - FRAME_CENTER) > TOLERANCE:
                if center_x < FRAME_CENTER:
                    servo_angle += 2
                else:
                    servo_angle -= 2

                servo_angle = max(min(servo_angle, MAX_ANGLE), MIN_ANGLE)
                set_servo_angle(servo_angle)
                time.sleep(0.05)

            break  # Only track the first face

        cv2.imshow("Turret View", frame)
        if cv2.waitKey(1) == 27:  # ESC key to break
            break

except KeyboardInterrupt:
print("Interrupted")

finally:
cap.release()
pwm.stop()
GPIO.cleanup()
cv2.destroyAllWindows()
