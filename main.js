//https://teachablemachine.withgoogle.com/models/NjbRAO7UM/

Webcam.set({
    width:300,
    height:325,
    image_format:'png',
    png_quality: 90
})

webcam=document.getElementById("webcam")
Webcam.attach(webcam)

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="take_image" src="'+data_uri+'">';
    })
}

console.log("ml5", ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NjbRAO7UM/model.json', modelloaded)
function modelloaded(){
    console.log("Model has been loaded.")
}