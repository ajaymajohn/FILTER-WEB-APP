noseX=0;
noseY=0;

function preload() {
    moustache = loadImage('https://i.postimg.cc/BZcK68T5/mostache.jpg');
}

function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();


    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
     if(results.length > 0){
         console.log(results);
         noseX=results[0].pose.nose.x-15;
         noseY=results[0].pose.nose.y+5;
         console.log("nose x =" + noseX);
         console.log("nose y =" + noseY);
     }
}

function draw() {
    image(video,0,0,300,300);
    image(moustache,noseX,noseY,30,30);
}


function take_snapshot() {
    save('myFilterImage.png');
}