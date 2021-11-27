imamge = "";
statusofmodel = "";

function preload() {
 //image = loadImage('');
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Model Status: Detecting Objects"
}



function modelLoaded() {
    console.log("CocoSSD 'not sure how to spell' has been initialized");
    statusofmodel = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
        console.log("Error occured.")
    }
        console.log(results);
        console.log("Results sent!")
    }