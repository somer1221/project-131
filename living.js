image1 = "";
statusofmodel = "";
newresults = [];

function preload() {
   image1 = loadImage('living room.jpg');
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Model Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Cocossd has been initialized");
    statusofmodel = true;
    
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
        console.log("Error occured.");
    }
        console.log(results);
        console.log("Results sent!");
        newresults = results;
    }

function draw() {
  image(image1, 0, 0, 640, 420);
    
   if(statusofmodel != "") {
    objectDetector.detect(image1, gotResults);
    for(i=0;i<results.length;i++) {
        console.log("XADJSLA;JDLAKSJDLAKSJDLAJSKDJALJSLDJHAHWKDSGDSAGDHKSGJHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
     document.getElementById("status").innerHTML = "Model Status: Objects Detected";
     fill("#FF0000");
        percentage = floor(results[i].confidence * 100);
        text(results[i].label + " " + percentage + "%", results[i].x, results[i].y);
        noFill();
        stroke("#FF0000");
        rect(results[i].x, results[i].y, results[i].width, results[i].height);
    }
  }
}
 


