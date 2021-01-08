var bg,backimg;
var runner;
var gamestate = "homepage";
var button;
function preload(){
  backimg = loadImage('gameimg/front page.jpg');
  runnerimg = loadAnimation("gameimg/runner1.png","gameimg/runner2.png");
  zombieimg = loadAnimation("gameimg/zombie1.png","gameimg/zombie2.png","gameimg/zombie3.png","gameimg/zombie4.png");
  newbg = loadImage("gameimg/background.jpg");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
 
}

function draw() {
  background(255,255,255);  
  
  if(gamestate === "homepage"){
    bg = createSprite(displayWidth/2,displayHeight/2,50,50);
    bg.addImage(backimg)
    bg.scale = 2;
    button = createButton('Play');
    button.position(displayWidth/2,displayHeight/2);
  }
 if(mousePressedOver(button)){
   gamestate = 'Play';
 }
  if(gamestate === "Play"){
    newbg = createSprite(displayWidth/2,displayHeight/2,50,50);
    if(newbg.x < 0){
      newbg.x = bg.width/2;
    }
    newbg.velocityX = -3;
    runner = createSprite(displayWidth/2-80,displayHeight/2+200,50,50);
    runner.addAnimation("running",runnerimg);
    runner.velocityX = 6;
    runner.scale = 0.3;
  
  }
  drawSprites();
}

function movezombie(){
  if(frameCount%100===0){
    var zombie = createSprite(displayWidth/2+50,displayHeight/2+70,50,50);
    zombie.addAnimation("zombierunning",zombieimg);
    zombie.VelocityX = -6;
  }
}