video="";

function preload(){
    video=createVideo('video.mp4');
}

function setup(){
canvas=createCanvas(480,280);
canvas.center();
video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}

function modelLoaded(){
    console.log("modelloaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function draw(){
    image(video,0,0,480,280);
}