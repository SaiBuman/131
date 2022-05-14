 function setup() {
canvas = createCanvas(600,400);
canvas.center();
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
}
