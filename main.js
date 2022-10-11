function preload(){
  classifier = ml5.imageClassifier('DoodleNet');
  }
  
  function setup(){
  canvas = createCanvas(280,280);
  canvas.center();
  background("white");
  canvas.mouseReleased(classifyCanvas);
  synth = window.speechSynthesis;
  }
  
  function draw(){

  }
  
  function clearCanvas(){
    background("white")
  }
  
  function classifyCanvas(){
    classifier.classify(canvas, gotResult);
  }