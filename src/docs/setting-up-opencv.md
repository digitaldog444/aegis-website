# Setting up OpenCV

Run the following command on your raspberry pi:

```
apt install python3-opencv
apt install python3-flask
```

Add the following code to a python script to see if your webcam is working:

```
import cv2
from flask import Flask, Response

app = Flask(__name__)

def generate_frames():
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        print("Camera not opened")
        return
    while True:
        success, frame = cap.read()
        if not success:
            break
        ret, buffer = cv2.imencode('.jpg', frame)
        if not ret:
            continue
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
    cap.release()

@app.route('/')
def index():
    return '''
    <html>
    <head><title>Live Stream</title></head>
    <body>
        <h1>Video Feed</h1>
        <img src="/video_feed">
    </body>
    </html>
    '''

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```
