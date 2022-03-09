Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:100,
});
camera = document.getElementById("camera");

Webcam.attach("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("snapshot").innerHTML = "<img id='image' src='"+ data_uri+"'>";
    })
}
console.log("ml5 version", ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/PDCDQEuwN/model.json",modelloaded);

function modelloaded(){
    console.log("model is loaded");
}

 function make_prediction(){
    img = document.getElementById("image");
    classifier.classify(img, gotResult)
 }

 function gotResult(error, result){
     if(error){
         console.error(error)
 }
    
     }