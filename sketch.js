var player, playerImage;

var bg, bgImage;

var laser, laser2, laser3, laser4, laserImage, laser2Image, lasers, lasers2, lasersGroup;

var gameState = 0;

var doorway, doorwayImage;

var enemy, enemy2, enemy3, enemy4, enemyImage;

var death = 0;

var standImage, lastSupper,lastSupperImage, starryNight, starryNightImage;

var key1, keyImage;

var monalisa, monalisaImage;


function preload(){
  playerImage = loadImage("images/bandit.png");
  bgImage = loadImage("images/thing.jpeg");
  laserImage = loadImage("images/lasers.png");
  laser2Image = loadImage("images/lasers2.png");
  doorwayImage = loadImage("images/doorway.png");
  enemyImage = loadImage("images/enemy.png");
  standImage = loadImage("images/stand.png");
  lastSupperImage = loadImage("images/lastSupper.jpeg");
  starryNightImage= loadImage("images/starrynight.jpg");
  keyImage = loadImage("images/key.png");
  monalisaImage = loadImage("images/monalisa.jpg");

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

  doorway = createSprite(590,300,30,30);
  doorway.addImage(doorwayImage);
  doorway.scale = 0.1;
  doorway.visible = false;
  
  topEdge = createSprite(300,2,600,5);
  topEdge.visible = false;
  bottomEdge = createSprite(300,598,600,5);
  bottomEdge.visible = false;
  rightEdge = createSprite(598,300,5,600);
  rightEdge.visible = true;
  leftEdge = createSprite(2,300,5,600);
  
  lasersGroup = createGroup();
}

function draw() {
  background(0);
  
  if(gameState === 0){
    player.visible = false;
    textSize(12);
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
      doorway.visible = true;
      player.x = 50;
      player.y = 200;
      laser.visible = true;
      laser.velocityY=-5;
      laser2.visible = true;
      laser2.velocityY=5;
    }
  }

  if(gameState === 1){
  

  if(player.isTouching(laser) || player.isTouching(laser2)){
    player.x = 50;
    player.y = 200;
    death++;
  }

  if(player.isTouching(doorway)){
    gameState = 2;
    player.x = 50;
    player.y = 500;
    laser.destroy();
    laser2.destroy();
    enemy = createSprite(300,300,20,20);
    enemy.addImage(enemyImage);
    enemy.velocityX=10;

    enemy2 = createSprite(300,300,20,20);
    enemy2.addImage(enemyImage);
    enemy2.velocityY = 10;

    enemy3 = createSprite(300,300,20,20);
    enemy3.addImage(enemyImage);
    enemy3.velocityX = 10;
    enemy3.velocityY = -10;

    enemy4 = createSprite(300,300,20,20);
    enemy4.addImage(enemyImage);
    enemy4.velocityX = -10;
    enemy4.velocityY = 10;

    enemy5 = createSprite(300,300,20,20);
    enemy5.addImage(enemyImage);
    enemy5.velocityX = -10;
    enemy5.velocityY = -10;

    enemy6 = createSprite(300,300,20,20);
    enemy6.addImage(enemyImage);
    enemy6.velocityX = 10;
    enemy6.velocityY = 10;

    enemy7 = createSprite(300,300,20,20);
    enemy7.addImage(enemyImage);
    enemy7.velocityX=-10;

    enemy8 = createSprite(300,300,20,20);
    enemy8.addImage(enemyImage);
    enemy8.velocityY=-10;

    doorway.x = 300;
    doorway.y = 10;
   }
  }
  if(gameState === 2){
    enemy8.bounceOff(topEdge);
    enemy8.bounceOff(bottomEdge);
    enemy7.bounceOff(leftEdge);
    enemy7.bounceOff(rightEdge);
    enemy5.bounceOff(topEdge);
    enemy5.bounceOff(bottomEdge);
    enemy5.bounceOff(rightEdge);
    enemy5.bounceOff(leftEdge);
    enemy6.bounceOff(topEdge);
    enemy6.bounceOff(bottomEdge);
    enemy6.bounceOff(rightEdge);
    enemy6.bounceOff(leftEdge);
    enemy4.bounceOff(topEdge);
    enemy4.bounceOff(bottomEdge);
    enemy4.bounceOff(rightEdge);
    enemy4.bounceOff(leftEdge);
    enemy3.bounceOff(topEdge);
    enemy3.bounceOff(bottomEdge);
    enemy3.bounceOff(rightEdge);
    enemy3.bounceOff(leftEdge);
    enemy2.bounceOff(topEdge);
    enemy2.bounceOff(bottomEdge);
    enemy.bounceOff(leftEdge);
    enemy.bounceOff(rightEdge);
    
    if(player.isTouching(enemy) || player.isTouching(enemy2) || player.isTouching(enemy3) || player.isTouching(enemy4)|| player.isTouching(enemy5) || player.isTouching(enemy6) || player.isTouching(enemy7) || player.isTouching(enemy8)){
      player.x = 20;
      player.y = 450;
      death++;
    }

    if(player.isTouching(doorway)){
      gameState = 3;
      player.x = 20;
      player.y = 450;

      key1 = createSprite(30,330,20,20);
      key1.addImage(keyImage);
      key1.scale = 0.5;

      key2 = createSprite(550,330,20,20);
      key2.addImage(keyImage);
      key2.scale = 0.5;

      stand = createSprite(40,40,20,20);
      stand.addImage(standImage);
      stand.scale = 0.2;

      lastSupper = createSprite(40,40,20,20);
      lastSupper.addImage(lastSupperImage);
      lastSupper.scale = 0.3;

      stand2 = createSprite(560,40,20,20);
      stand2.addImage(standImage);
      stand2.scale = 0.2;

      starryNight = createSprite(560,30,20,20);
      starryNight.addImage(starryNightImage);
      starryNight.scale = 0.05;

      laser3 = createSprite(300,300,600,20);
      laser3.shapeColor = "red";

      laser4 = createSprite(500,300,20,600);
      laser4.shapeColor = "red";
      laser4.velocityX = -5;

     
     }
  }
    if(gameState === 3){
      console.log(key1.x);
      if(player.isTouching(laser3) || player.isTouching(laser4)){
      death++
      player.x = 20;
      player.y = 450;
      laser4.x = 300;
      laser4.y = 300;
    }
    if(player.isTouching(key1)){
      laser4.destroy();
      key1.destroy();
    }

    if(player.isTouching(key2)){
      laser3.destroy();
      key2.destroy();
    }
    if(player.isTouching(doorway)){
      gameState = 4;
      console.log(gameState);
      stand.destroy();
      stand2.destroy();
      starryNight.destroy();
      lastSupper.destroy();
      player.x =  50;
      player.y = 460;
    }
  }
  if(gameState === 4){
    spawnLasers();
    if(player.isTouching(lasersGroup)){
      player.x = 50;
      player.y = 460;
      death ++;
    }
    if(player.isTouching(doorway)){
      gameState = 5;
      doorway.destroy();
      player.x = 300;
      player.y = 500;

      stand3 = createSprite(300,200,20,20);
      stand3.addImage(standImage);
      stand3.scale = 0.3;

      monalisa = createSprite(300,200,20,20);
      monalisa.addImage(monalisaImage);
      monalisa.scale = 0.1;
    }
  }
  if(gameState === 5){
    if(player.isTouching(monalisa)){
      gameState = 6;
      monalisa.destroy();
      stand3.destroy();
     }
  }
 

  
  
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
  
  laser.bounceOff(topEdge);
  laser.bounceOff(bottomEdge);
  laser2.bounceOff(topEdge);
  laser2.bounceOff(bottomEdge);
 
  
  drawSprites();

  if(gameState === 6){
    background(0);
    fill("blue");
    stroke("blue");
    text("AMAZING JOB!! You completed the game!!",150,200);
  }
  
  textSize(20);
  stroke("blue");
  fill("blue");
  text("death count:" + death, 450,20)
}

function spawnLasers(){
  if(frameCount%40===0){
    for(var i = 0; i<601; i = i + 100){
      lasers = createSprite(i,300,20,600);
      lasers2 = createSprite(300,i,600,20);
      lasers.shapeColor = "red";
      lasers2.shapeColor = "red";
      lasers.lifetime = 20;
      lasers2.lifetime = 20;
      lasersGroup.add(lasers);
     lasersGroup.add(lasers2);
    }
    
  }
  
}







  
