
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImage=loadImage("images/iron.png");
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg)
  bg.scale=2

  iron=createSprite(200,585,20,20)
  iron.addImage(ironImage)
  iron.scale=0.3
  ground=createSprite(200,585,900,10)
ground.visible=false
  
  
 
}

function draw() {
  
  if(keyDown("left"))
  iron.x -= 4
  if(keyDown("right"))
  iron.x += 4
  if(keyDown("space"))
  iron.velocityY=-12
  iron.velocityY  +=0.5
  iron.collide(ground)
    
    drawSprites();
   
}

