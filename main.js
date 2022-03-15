noseX = 0;
noseY = 0;
function preload() {
 clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('Posenet is Initialized');
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}
function draw() {
    image(video, 0, 0, 500, 500);
    image(clown_nose, noseX - 35, noseY - 35, 112.5, 112.5);
}
function take_snapshot() {
    save("FilteredImage.png");
}
