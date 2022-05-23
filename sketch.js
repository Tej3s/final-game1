var play = 1
var end = 0;
var gameState;
var backgroundImg, background
var dinosaurImg, dinosaur
var obstaclesgroup, obstacle
function preload()
{
  backgroundImg = loadImage("download.jpg")
  dinosaurImg = loadImage("dinosaur.jpg")
  obstacleImg = loadImage("pngtree-cartoon-anti-collision-column-png-downoald-image_1257142(1).jpg")
}

function setup() {
  createCanvas(880,880)
  background = loadImage (backgroundImg);

  dinosaur = createSprite(200,380,400,20)
  dinosaur.addImage(dinosaurImg);
  ground = createSprite(200,390,400,10);
  ground.x = ground.width/2;
  ground.velocityX = -2;
  ground.visible = false
  obstaclesgroup = createGroup();
  ground2 = createSprite(200,390,400,10);
  ground2.visible = false
}

function draw() 
{ 
  if (keyDown("space")&&dinosaur.y >> 390){
    dinosaur.velocityY = - 10
  }
  dinosaur.velocityY = dinosaur.velocityY + 0.8
  if (ground.x < 0){
    ground.x = ground.width/2
  }
  if (gameState === play){
    ground.velocityX =-2;
    if (obstaclesgroup.isTouching(dinosaur)){
      gameState === end
    }
  }
  else if (gameState === end){
    ground.velocityX = 0;
  }
  dinosaur.collide(ground2);
  drawSprites();
}

function spawnObstacles(){
  obstacle = createSprite(200,390,50,50);
  obstacle.addImage(obstacleImg);
  obstacle.scale = 0.3
  obstaclesgroup.add(obstacle);
  
}
