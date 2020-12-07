var player, playerImage;

var bg, bgImage;

var laser, laser2, laserImage, laser2Image;

var gameState = 0;

function preload(){
  playerImage = loadImage("images/bandit.png");
  bgImage = loadImage("images/thing.jpeg");
  laserImage = loadImage("images/lasers.png");
  laser2Image = loadImage("images/lasers2.png");

}

function setup() {
  createCanvas(600, 600);

  bg = createSprite(300,300,600,600);
  bg.addImage(bgImage);
  bg.scale = 3;
  bg.visible = false;

  player = createSprite(200,200,50,50);
  player.addImage(playerImage);
  player.scale = 0.2;

  laser = createSprite(500,597,30,10);
  laser.addImage(laserImage);
  laser.visible = false;

  laser2 = createSprite(300,3,10,50);
  laser2.addImage(laser2Image);
  laser2.visible = false;

  

  topEdge = createSprite(300,2,600,5);
  topEdge.visible = false;
  bottomEdge = createSprite(300,598,600,5);
  bottomEdge.visible = false;
  
}

function draw() {
  background(0);
  if(gameState === 0){
    player.visible = false;
    stroke("blue");
    fill("blue");
    text("HELLO!", 275,300);
    text("You have been assigned the task of stealing the priceless Mona Lisa from the Louvre Museum",75,320)
    text("You must bypass all the security measures in order to procure the artifact",110,340);
    stroke("red");
    fill("red");
    text("PRESS SPACE TO BEGIN", 230,360);

    if(keyDown("space")){
      gameState = 1;
      player.visible = true;
      bg.visible = true;
      player.x = 50;
      player.y = 200;
      laser.visible = true;
      laser.velocityY=-5;
      laser2.visible = true;
      laser2.velocityY=5;
    }
  }

  if(gameState === 1){
  if(keyDown(UP_ARROW)){
    player.y = player.y-5;
  }
  if(keyDown(DOWN_ARROW)){
    player.y = player.y+5;
  }
  if(keyDown(LEFT_ARROW)){
    player.x = player.x - 5;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+5;
  }

  if(player.isTouching(laser) || player.isTouching(laser2)){
    player.x = 50;
    player.y = 200;
  }
  }
  
  
  laser.bounceOff(topEdge);
  laser.bounceOff(bottomEdge);
  laser2.bounceOff(topEdge);
  laser2.bounceOff(bottomEdge);
  
  drawSprites();
}







  
