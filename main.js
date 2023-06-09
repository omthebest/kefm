 img="";
 objects=[];
 status="";
 function preload(){
img=loadImage('dog_cat.jpg');
}

function setup(){
canvas=createCanvas(640,420);
canvas.center();
object_Detector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status : dectecting objects";
}

function modelLoaded(){
console.log("model is loaded yehrdsgcyuwsjzhgvdiwyejdsvhbbfchdshzbhdwiushdbzx");
status=true;
object_Detector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function draw(){
image(img,0,0,640,420);
if(status !=""){
    for(jk = 0; jk < objects.length; jk++){
    document.getElementById("status").innerHTML="Status : objects detected";
    fill("#FF0000");
    percent=Math.floor(objects[jk].confidence * 100);
    text(objects[jk].label + " " + percent + "%",objects[jk].x + 15,objects[jk].y + 15);
    noFill();
    stroke("#ff0000");
    rect(objects[jk].x,objects[jk].y,objects[jk].width,objects[jk].height);
    }
}
}