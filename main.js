leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;



function setup(){
canvas = createCanvas(500,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function draw(){
image(video,0,0,500,500);
}

function preload(){
song = loadSound("song1.mp3");

}

song = "";

function play(){
song.play();
song.setVolume(1);
song.rate(1);
}

function pause(){
    song.pause();
}

function modelLoaded(){
    console.log("modelLoaded!");
}

function gotPoses(results){
 if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("leftWrist x = "+leftWristX+"leftWrist y = "+leftWristY);
        console.log("rightWrist x = "+rightWristX+"rightWrist y = "+rightWristY);


    }
}