img="";
status="";
objects=[];
function preload(){
img=loadImage("apple.png");
}

function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("s").innerHTML="Status : Detecting objects";
}
function modelLoaded(){
console.log('modelLoaded');
status=true;
objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
if(error){
console.log(error);
}
else{
console.log(results);
objects=results;
}
}

function draw(){
image(img,0,0,640,420);
if(status != "")
{
for (i=0;i<objects.length;i++)
{
document.getElementById("k").innerHTML="Number of objects on picture : "+objects.length;
document.getElementById("s").innerHTML="status : Object detected";
fill("#FF0000");
percentage=floor(objects[i].confidence*100);
text(objects[i].label+ " " +percentage+"%",objects[i].x+5,objects[i].y-50);
noFill();
stroke("#FF0000")
rect(objects[i].x-25,objects[i].y-75,objects[i].width,objects[i].height)
console.log("done")
}
}
}