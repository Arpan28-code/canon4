var canon,canonImg,canonBall,canonBallImg,coins,coinsImg,ship,shipImg,background,backgroundImg;
var boundary1,boundary2,boundary3,boundary4;
var score=0;

function preload(){
canonImg = loadImage("Images/Canon0.png")
canonBallImg = loadImage("Images/canonBall0.png")
coinsImg = loadImage("Images/coin1.png")
shipImg = loadImage("Images/Player0.png")
backgroundImg = loadImage("Images/pic.jpg")


}



function setup() {
 createCanvas(displayWidth,displayHeight);
canon= createSprite(displayWidth/2,displayHeight/2,50,50);
canon.addImage("ufoBlue_1",canonImg);
canon.scale = 1.5;
canonBall= createSprite(displayWidth/2,displayHeight/2,10,10);
canonBall.addImage("eightball_1",canonBallImg);
canonBall.scale = 0.5
coins= createSprite(random(50,displayWidth-50),random(1,displayHeight),25,25);
coins.addImage("coin_gold_1",coinsImg);
coins.scale = 0.5;
ship= createSprite(displayWidth/2,displayHeight/2-200,25,25);
ship.addImage("ship16_1",shipImg);
ship.scale=1;
boundary1 = createSprite(displayWidth/2,1,displayWidth,5);
boundary2 = createSprite(displayWidth,displayHeight/2,5,displayHeight);
boundary3 = createSprite(displayWidth/2,displayHeight,displayWidth,5);
boundary4 = createSprite(1,displayHeight/2,5,displayHeight);

}

function draw() {
  background(backgroundImg);
 
//Text("Score"+":"+ score,100,100);
ship.bounceOff(canon);
ship.bounceOff(boundary1);
ship.bounceOff(boundary2);
ship.bounceOff(boundary3);
ship.bounceOff(boundary4);


coins.bounceOff(boundary1);
coins.bounceOff(boundary2);
coins.bounceOff(boundary3);
coins.bounceOff(boundary4);
coins.bounceOff(canon);

canonBall.bounceOff(boundary1);
canonBall.bounceOff(boundary2);
canonBall.bounceOff(boundary3);
canonBall.bounceOff(boundary4);
canonBall.bounceOff(canon);   


//if (ship.istouching(coins)) {
//  score = score+2;
//}


  drawSprites();
}
function keyPressed(){

  if(keyCode===87 && coins.velocityX !== 0){

ship.velocityY=-4;


}
  if(keyCode===83 && coins.velocityX !== 0){
  ship.velocityY=6; }
  if(keyCode===68 && coins.velocityX !== 0){

    ship.velocityX=5;

  }
  if(keyCode===65 && coins.velocityX !== 0){

    ship.velocityX=-5;

  }
  if(keyCode===69 && coins.velocityX !== 0){

    ship.velocityX=0;
    ship.velocityY=0;

  }
  if (keyCode===32 && coins.velocityX===0) {
    coins.velocityX=random(-6,15)
    coins.velocityY=random(-3,15)
    coins.lifetime = 1000;
    canonBall.velocityX = random(-7,20)
    canonBall.velocityY = random(-8,18)
    canonBall.lifetime = canonBall.velocityX * displayWidth/2;
    
  }
   

 
}