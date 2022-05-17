status1 = "";
function setup() {
canvas = createCanvas(600,400);
canvas.center();
objectDetector = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function modelLoaded() {
    console.log("Model Loaded !");
    status1 = true ;
    objectDetector.detect(img,gotResult) ;
}

function gotResult(error,results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
}

function preload() {
    img = loadImage("dog_cat.jpg");
}

function draw() {
    image(img,0,0,600,400);
    fill("#FF0000");
    text("Dog" , 75 , 65);
    textSize(30);
    noFill();
    stroke("#FF0000");
    strokeWeight(2)
    rect(90,70,300,280);
    text("Cat" , 270 , 100 );
    rect(270,100,280,265);
}
