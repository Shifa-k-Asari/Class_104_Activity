https://teachablemachine.withgoogle.com/models/8H8vMRj31/2 

Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});

my_camera = document.getElementById("camera");

Webcam.attach(my_camera);