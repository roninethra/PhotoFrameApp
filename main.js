function preload(){
img= loadImage("unnamed.png");
}
function setup(){
    canvas= createCanvas(640,480);
    canvas.position(110,250);
    video= createCapture(VIDEO);
    video.hide();
    tint_color= "";
    image(img, 0, 405, 75, 75);
    image(img, 0, 0, 75, 75);
    image(img, 560, 405, 75, 75);
    image(img, 560, 0, 75, 75);
    fill("blue");
    circle(35, 375, 60);
    circle(35, 100, 60);
    circle(100, 35, 60);
    circle(100, 450, 60);
    circle(535, 450, 60);
    circle(535, 35, 60);
    circle(600, 105, 60);
    circle(600, 375, 60);
    fill("red");
    rect(130, 5, 375, 55);
    rect(130, 425, 375, 55);
    rect(10, 130, 55, 215);
    rect(575, 135, 55, 210);
}

function draw(){
    image(video,70,65,500,350);
    tint(tint_color);
}

function take_snapshot(){
    save("PictureFromP5.png");
}

function applytint(){
    tint_color= document.getElementById("tintinput").value;
}