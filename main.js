function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
  
      classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/v_sl95BzE/model.json' , console.log('Loaded'));
    
}
function draw(){
    image(video , 0,0,300,300)
}