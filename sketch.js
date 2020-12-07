var quitB,playB,punchB,kickB,smashB,jumpPunchB,fightE1B,fightE2B,fightE3B,fightE4B,fightE5B,start1B,start2B,start3B,start4B,start5B;
var playerDownImg,playerFaceImg,playerKnockImg;
var lock1,lock2,lock3,lock4,lockOpen,key;
var lock1Img,lockOpenImg,keyImg;

var countDown1 = 30;
var countDown2 = 30;
var countDown3 = 30;
var countDown4 = 30;
var countDown5 = 30;
var pauseState = 30;
var healthP = 100;
var healthE1 = 100;
var healthE2 = 100;
var healthE3 = 100;
var healthE4 = 100;
var healthE5 = 100;
var score = 0;

var healthSpriteP,healthSpriteE1,healthSpriteE2,healthSpriteE3,healthSpriteE4,healthSpriteE5,healthImg;

var hp1,hp2,hp3,hp4,hp5,hp6,time,stamina1,stamina2,stamina3,stamina4,stamina5,stamina6,hpP,hpE1,hpE2,hpE3,hpE4,hpE5;

var gameState = 0;
var playerState = 0;
var enymy1State = 0;
var enymy2State = 0;
var enymy3State = 0;
var enymy4State = 0;
var enymy5State = 0;
var winState = 0;
var lockState = 0;

var player,enymy1,enymy2,enymy3,enymy4,enymy5,enymyKing,backimage;

var backimageImg1,backimageImg2,backimageImg3,backimageImg4,backimageImg5,backimageImg6,backimageImg7,vsImage;

var playerSmashImg,playerPunchImg,playerKickImg ; 

var enymy1DownImg,enymy1KickImg,enymy1PunchImg,enymy1SmashImg,enymy1WinImg,enymy2DownImg,enymy2KickImg,enymy2PunchImg,enymy2SmashImg,enymy2WinImg,enymy3DownImg,enymy3KickImg,enymy3PunchImg,enymy3SmashImg,enymy3WinImg,enymy4DownImg,enymy4KickImg,enymy4PunchImg,enymy4SmashImg,enymy4WinImg
,enymy5DownImg,enymy5KickImg,enymy5PunchImg,enymy5SmashImg,enymy5WinImg,enymy5KnockImg,enymyKingDownImg,enymyKingDownKickImg,enymyKingFacehitImg,enymyKingHunderedImg,enymyKingJumpPunchImg,enymyKingKickImg,enymyKingPunchImg,enymyKingSmashImg,enymyKingWinImg,enymyKingKnockImg;

var enymy1OImg,enymy2OImg,enymy3OImg,enymy4OImg,enymy5OImg;
var enymy1O,enymy2O,enymy3O,enymy4O,enymy5O;

var enymy1Img = [enymy1DownImg,enymy1KickImg,enymy1PunchImg,enymy1SmashImg,enymy1WinImg];
var enymy2Img = [enymy2DownImg,enymy2KickImg,enymy2PunchImg,enymy2SmashImg,enymy2WinImg];
var enymy3Img = [enymy3DownImg,enymy3KickImg,enymy3PunchImg,enymy3SmashImg,enymy3WinImg];
var enymy4Img = [enymy4DownImg,enymy4KickImg,enymy4PunchImg,enymy4SmashImg,enymy4WinImg];
var enymy5Img = [enymy5DownImg,enymy5KickImg,enymy5PunchImg,enymy5SmashImg,enymy5WinImg,enymy5KnockImg];
var enymyKingImg = [enymyKingDownImg,enymyKingDownKickImg,enymyKingFacehitImg,enymyKingHunderedImg,
  enymyKingJumpPunchImg,enymyKingKickImg,enymyKingPunchImg,enymyKingSmashImg,enymyKingWinImg,enymyKingKnockImg];

function preload(){
playerSmashImg = loadAnimation("image/player/smashPlayer/smash1.png","image/player/smashPlayer/smash2.png","image/player/smashPlayer/smash3.png","image/player/smashPlayer/smash4.png","image/player/smashPlayer/smash5.png","image/player/smashPlayer/smash6.png","image/player/smashPlayer/smash7.png");
playerPunchImg = loadAnimation("image/player/punchPlayer/punch1.png","image/player/punchPlayer/punch2.png","image/player/punchPlayer/punch3.png","image/player/punchPlayer/punch4.png","image/player/punchPlayer/punch5.png");
playerKickImg = loadAnimation("image/player/kickPlayer/kick1.png","image/player/kickPlayer/kick2.png","image/player/kickPlayer/kick3.png","image/player/kickPlayer/kick4.png","image/player/kickPlayer/kick5.png","image/player/kickPlayer/kick6.png","image/player/kickPlayer/kick7.png","image/player/kickPlayer/kick8.png");
playerDownImg = loadAnimation("image/player/playerDown/player1.PNG","image/player/playerDown/player2.PNG","image/player/playerDown/player3.PNG","image/player/playerDown/player4.PNG","image/player/playerDown/player5.PNG")
playerFaceImg = loadAnimation("image/player/playerFaceHit/player1.png","image/player/playerFaceHit/player2.png","image/player/playerFaceHit/player3.png")
playerKnockImg = loadAnimation("image/player/playerKnock/player1.png","image/player/playerKnock/player2.png","image/player/playerKnock/player3.png","image/player/playerKnock/player4.png","image/player/playerKnock/player5.png","image/player/playerKnock/player6.png","image/player/playerKnock/player7.png","image/player/playerKnock/player8.png")
vsImage = loadImage("image/vs.jpg");

enymy1DownImg = loadAnimation("image/enymy/enymy1/enymyDown/enymy1.PNG","image/enymy/enymy1/enymyDown/enymy2.PNG","image/enymy/enymy1/enymyDown/enymy3.PNG","image/enymy/enymy1/enymyDown/enymy4.PNG","image/enymy/enymy1/enymyDown/enymy5.PNG");
enymy1KickImg = loadAnimation("image/enymy/enymy1/enymyKick/enymy1.png","image/enymy/enymy1/enymyKick/enymy2.png","image/enymy/enymy1/enymyKick/enymy3.png");
enymy1PunchImg = loadAnimation("image/enymy/enymy1/enymyPunch/enymy1.png","image/enymy/enymy1/enymyPunch/enymy2.png","image/enymy/enymy1/enymyPunch/enymy3.png","image/enymy/enymy1/enymyPunch/enymy4.png","image/enymy/enymy1/enymyPunch/enymy5.png");
enymy1SmashImg = loadAnimation("image/enymy/enymy1/enymySmash/enymy1.png","image/enymy/enymy1/enymySmash/enymy2.png","image/enymy/enymy1/enymySmash/enymy3.png","image/enymy/enymy1/enymySmash/enymy4.png","image/enymy/enymy1/enymySmash/enymy5.png");
enymy1WinImg = loadAnimation("image/enymy/enymy1/enymyWin/enymy1.png","image/enymy/enymy1/enymyWin/enymy2.png","image/enymy/enymy1/enymyWin/enymy3.png","image/enymy/enymy1/enymyWin/enymy4.png","image/enymy/enymy1/enymyWin/enymy5.png");

enymy2DownImg = loadAnimation("image/enymy/enymy2/enymyDown/enymy1.PNG","image/enymy/enymy2/enymyDown/enymy2.PNG","image/enymy/enymy2/enymyDown/enymy3.PNG","image/enymy/enymy2/enymyDown/enymy4.PNG","image/enymy/enymy2/enymyDown/enymy5.PNG")
enymy2KickImg = loadAnimation("image/enymy/enymy2/enymyKick/enymy1.PNG","image/enymy/enymy2/enymyKick/enymy2.PNG","image/enymy/enymy2/enymyKick/enymy3.PNG","image/enymy/enymy2/enymyKick/enymy4.PNG");
enymy2PunchImg = loadAnimation("image/enymy/enymy2/enymyPunch/enymy1.png","image/enymy/enymy2/enymyPunch/enymy2.png","image/enymy/enymy2/enymyPunch/enymy3.png","image/enymy/enymy2/enymyPunch/enymy4.png","image/enymy/enymy2/enymyPunch/enymy5.png");
enymy2SmashImg = loadAnimation("image/enymy/enymy2/enymySmash/enymy1.PNG","image/enymy/enymy2/enymySmash/enymy2.PNG","image/enymy/enymy2/enymySmash/enymy3.PNG","image/enymy/enymy2/enymySmash/enymy4.PNG","image/enymy/enymy2/enymySmash/enymy5.PNG","image/enymy/enymy2/enymySmash/enymy6.PNG","image/enymy/enymy2/enymySmash/enymy7.PNG","image/enymy/enymy2/enymySmash/enymy8.PNG")
enymy2WinImg = loadAnimation("image/enymy/enymy2/enymyWin/enymy1.PNG","image/enymy/enymy2/enymyWin/enymy2.PNG","image/enymy/enymy2/enymyWin/enymy3.PNG","image/enymy/enymy2/enymyWin/enymy4.PNG")

playerStart = loadAnimation("image/player/punchPlayer/punch1.png","image/player/punchPlayer/punch1.png");
//enymy1Start = loadAnimation("image/enymy/enymy1/enymyPunch/enymy1.png","image/enymy/enymy1/enymyPunch/enymy2.png");

backimageImg1 = loadImage("image/background/running background.webp");
backimageImg2 = loadImage("image/background/beckground.gif");
backimageImg3 = loadImage("image/background/background1.jpg");
backimageImg4 = loadImage("image/background/background2.jpg");
backimageImg5 = loadImage("image/background/background3.jpg");
backimageImg6 = loadImage("image/background/background4.jpg");
backimageImg7 = loadImage("image/background/background5.jpg");

enymy1OImg = loadImage("image/enymy/enymy Out Icon/enymy1.PNG");
enymy2OImg = loadImage("image/enymy/enymy Out Icon/enymy2.PNG");
enymy3OImg = loadImage("image/enymy/enymy Out Icon/enymy3.PNG");
enymy4OImg = loadImage("image/enymy/enymy Out Icon/enymy4.PNG");
enymy5OImg = loadImage("image/enymy/enymy Out Icon/enymy5.PNG");

lock1Img = loadImage("image/lock.png");
lockOpenImg = loadImage("image/lock2.png");
keyImg = loadImage("image/key.png");
healthImg = loadImage("image/hp.png");

enymy1Start = loadImage("image/enymy/enymy1/enymyPunch/enymy1.png");
enymy2Start = loadImage("image/enymy/enymy2/enymyPunch/enymy1.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);

  quitB = createButton("Quit");
  quitB.position(5,15);

  playB = createButton("Play");
  playB.position(displayWidth/2,displayHeight/2);
  playB.style("font-size","30px");
  playB.style("color","red");

  punchB = createButton("Punch");
  punchB.position(displayWidth/2,displayHeight/2-50);
  punchB.style("font-size","20px");
  punchB.style("color","green");

  kickB = createButton("kick");
  kickB.position(displayWidth/2,displayHeight/2-100);
  kickB.style("font-size","20px");
  kickB.style("color","green");
  
  smashB = createButton("Smash");
  smashB.position(displayWidth/2,displayHeight/2-150);
  smashB.style("font-size","20px");
  smashB.style("color","green");

  fightE1B = createButton("Fight with KEN");
  fightE1B.position(displayWidth/2-500,displayHeight/2);

  fightE2B = createButton("Fight with DHELSIM");
  fightE2B.position(displayWidth/2-300,displayHeight/2);

  fightE3B = createButton("Fight with RYU");
  fightE3B.position(displayWidth/2-100,displayHeight/2);

  fightE4B = createButton("Fight with FEILONG");
  fightE4B.position(displayWidth/2+100,displayHeight/2);

  fightE5B = createButton("Fight with THAWK");
  fightE5B.position(displayWidth/2+300,displayHeight/2);
  
  start1B = createButton("Start");
  start1B.position(displayWidth-100,displayHeight-50);

  start2B = createButton("Start");
  start2B.position(displayWidth-100,displayHeight-50);

  start3B = createButton("Start");
  start3B.position(displayWidth-100,displayHeight-50);

  start4B = createButton("Start");
  start4B.position(displayWidth-100,displayHeight-50);

  start5B = createButton("Start");
  start5B.position(displayWidth-100,displayHeight-50);
  //backimage = createSprite(displayWidth/2,displayHeight/2);
  //backimage.

  //enymy1O = createSprite(200,220,20,20);
  //enymy1O = addAnimation("enymy1O",enymy1OImg);

  //enymy1 = createSprite(200,300,20,20);
  //enymy1.addAnimation("enymy1",enymy1Start);

  player =  createSprite(500,500,20,20);
  
  enymy1O = createSprite(321,351,200,200);
  enymy1O.addImage(enymy1OImg);
  enymy2O = createSprite(535,353,200,200);
  enymy2O.addImage(enymy2OImg);
  enymy3O = createSprite(721,355,200,200);
  enymy3O.addImage(enymy3OImg);
  enymy4O = createSprite(935,353,200,200);
  enymy4O.addImage(enymy4OImg);
   enymy5O = createSprite(1130,357,200,200);
   enymy5O.addImage(enymy5OImg);

lock1 = createSprite(enymy2O.x,enymy2O.y+10);
lock1.addImage(lock1Img);
lock1.scale = 0.7

lock2 = createSprite(enymy3O.x,enymy3O.y+10);
lock2.addImage(lock1Img);
lock2.scale = 0.7

lock3 = createSprite(enymy4O.x,enymy4O.y+10);
lock3.addImage(lock1Img);
lock3.scale = 0.7

lock4 = createSprite(enymy5O.x,enymy5O.y+10);
lock4.addImage(lock1Img);
lock4.scale = 0.7

lockOpen = createSprite(300,200,20,20);
lockOpen.addImage(lockOpenImg);

key = createSprite(400,200,20,20);
key.addImage(keyImg);

enymy1 = createSprite(displayWidth-500,800,20,20);
enymy2 = createSprite(displayWidth-500,800,20,20);
enymy2.addImage(enymy2Start);
//enymy1.addImage(enymy1Start);

healthSpriteP = createSprite(150,100,20,20);
healthSpriteP.addImage(healthImg);
healthSpriteP.scale = 0.5;

healthSpriteE1 = createSprite(displayWidth-150,100,20,20);
healthSpriteE1.addImage(healthImg);
healthSpriteE1.scale = 0.5;

hpE1 = map(healthE1,0,100,0,width);
hpP = map(healthP,0,100,0,width); 

hp1 = createSprite(165,90,hpP,30);
hp1.shapeColor = "red";

hp2 = createSprite(displayWidth-137,90,hpE1,30);
hp2.shapeColor = "red";
}

function draw() {
  background(255,255,255);
//Hide();
hp2.width = healthE1+healthE1;
hp1.width = healthP+healthP;

if(playerState === 1 && player.isTouching(enymy1)){
  playerState = 0;
  enymy1.x += 50;
  healthE1 -= 5;
  hp2.x += 5;
  score += 100;
  }

if(playerState === 2 && player.isTouching(enymy1)){
  playerState = 0;
  enymy1.x += 50;
  healthE1 -= 10;
  hp2.x += 10;
  score += 200;
}

if(playerState === 3 && player.isTouching(enymy1)){
  playerState = 0;
  enymy1.x += 50;
  enymy1.addAnimation(enymy1KickImg);
  healthE1 -= 20;
  hp2.x += 20;
  score += 500;
}

  if(playerState === 0 && player.isTouching(enymy1)){
    playerState = 0;
  player.x -= 50;
enymy1State = 2;
playerState = 0;
healthP -= 5;
hp1.x -= 5;
score -= 100;
} 

if(enymy1State === 0){
  //enymy1.visible = true;
  enymy1.addImage(enymy1Start);
}

if(enymy1State === 1){
  enymy1.addAnimation(enymy1PunchImg);
}

if(enymy1State === 2){
  enymy1.addAnimation(enymy1KickImg);
}

if(enymy1State === 3){
  enymy1.addAnimation(enymy1SmashImg);
}

if(enymy1State === 4){
  enymy1.addAnimation(enymy1DownImg);
}

if(enymy1State === 5){
  enymy1.addAnimation(enymy1WinImg);
}

if(playerState === 0){
  player.addAnimation("player",playerStart);
  //pauseState = 30;
}

if(playerState === 4){
  player.addAnimation(playerDownImg);
}

if(playerState === 5){
  player.addAnimation(playerFaceImg);
}

if(playerState === 6){
  player.addAnimation(playerKnockImg);
}

if(gameState === 0){
  playB.show();
  punchB.hide();
  kickB.hide();
  smashB.hide();
  fightE1B.hide();
  fightE2B.hide();
  fightE3B.hide();
  fightE4B.hide();
  fightE5B.hide();
  start1B.hide();
  start2B.hide();
  start3B.hide();
  start4B.hide();
  start5B.hide();
  player.visible = false;
  enymy1O.visible = false;
  enymy2O.visible = false;
  enymy3O.visible = false;
  enymy4O.visible = false;
  enymy5O.visible = false;
  lock1.visible = false;
  lock2.visible = false;
  lock3.visible = false;
  lock4.visible = false;
  lockOpen.visible = false;
  key.visible = false;
  enymy1.visible = false;
  hp1.visible = false;
  hp2.visible = false;
  healthSpriteE1.visible = false;
  healthSpriteP.visible = false; 
//player.x = 500;
playerState = 0;
enymy1State = 0;

score = 0;

//enymy1.x = displayWidth-500;
  //enymy1.visible = false;
 image(backimageImg1,displayWidth/6-280,displayHeight/6-130,displayWidth,displayHeight-20);
}

if(gameState === 1){
  image(backimageImg2,displayWidth/6-280,displayHeight/6-130,displayWidth,displayHeight-20);
  enymy1O.visible = true;
  enymy2O.visible = true;
  enymy3O.visible = true;
  enymy4O.visible = true;
  enymy5O.visible = true;
  
 }

if(gameState === "enymy1Show"){
 // enymy1.visible = true;
 // enymy1.addAnimation(enymy1PunchImg);
  player.visible = true;
  player.addAnimation(playerPunchImg);
  //countDown -= 1;
  image(vsImage,displayWidth/2,player.y-100,200,200);
  countDown1 -= 1;
   if(countDown1 <= 0){
    gameState = 2;
  }
}


if(gameState === "enymy2Show"){
  //enymy1.visible = true;
  //enymy1.addAnimation(enymy1PunchImg);
   player.visible = true;
  player.addAnimation(playerPunchImg);
  // countDown -= 1;
  image(vsImage,displayWidth/2,player.y-100,200,200);
  countDown2 -= 1;
  if(countDown2 <= 0){
    gameState = 3;
  }
}

if(gameState === "enymy3Show"){
  // enymy1.visible = true;
  // enymy1.addAnimation(enymy1PunchImg);
   player.visible = true;
  player.addAnimation(playerPunchImg);
  // countDown -= 1;
  image(vsImage,displayWidth/2,player.y-100,200,200);
  countDown3 -= 1;
  if(countDown3 <= 0){
    gameState = 4;
  }
}

if(gameState === "enymy4Show"){
  // enymy1.visible = true;
  // enymy1.addAnimation(enymy1PunchImg);
   player.visible = true;
  player.addAnimation(playerPunchImg);
  // countDown -= 1;
  image(vsImage,displayWidth/2,player.y-100,200,200);
  countDown4 -= 1;
  if(countDown4 <= 0){
    gameState = 5;
  }
}

if(gameState === "enymy5Show"){
  // enymy1.visible = true;
  // enymy1.addAnimation(enymy1PunchImg);
   player.visible = true;
  player.addAnimation(playerPunchImg);
  // countDown -= 1;
  image(vsImage,displayWidth/2,player.y-100,200,200);

  countDown5 -= 1;
  if(countDown5 <= 0){
    gameState = 6;
  }
}

if(gameState === 2){
  player.visible = true;
  enymy1.visible = true;
  player.y = 700;
  enymy1.y = 700;
  punchB.show();
  kickB.show();
  smashB.show();
  Move();
  image(backimageImg3,displayWidth/6-280,displayHeight/6-130,displayWidth,displayHeight-20);
enymy1O.visible = false;
enymy2O.visible = false;  
enymy3O.visible = false;
enymy4O.visible = false;
enymy5O.visible = false;
hp1.visible = true;
hp2.visible = true;
healthSpriteE1.visible = true;
healthSpriteP.visible = true;
text("score : "+score,displayWidth/2,200);
textSize = 32;
}

if(gameState === 3){
  player.visible = true;
  //enymy2.visible = true;
  player.y = 480;
  punchB.show();
  kickB.show();
  smashB.show();
  Move();
  image(backimageImg4,displayWidth/6-280,displayHeight/6-130,displayWidth,displayHeight-20);
  enymy1O.visible = false;
enymy2O.visible = false;  
enymy3O.visible = false;
enymy4O.visible = false;
enymy5O.visible = false;
}

if(gameState === 4){
  player.visible = true;
  //enymy3.visible = true;
  player.y = 700;
  punchB.show();
  kickB.show();
  smashB.show();
  Move();
  image(backimageImg5,displayWidth/6-280,displayHeight/6-130,displayWidth,displayHeight-20);
  enymy1O.visible = false;
  enymy2O.visible = false;  
  enymy3O.visible = false;
  enymy4O.visible = false;
  enymy5O.visible = false;
}

if(gameState === 5){
  player.visible = true;
  //enymy4.visible = true;
  player.y = 700;
  punchB.show();
  kickB.show();
  smashB.show();
  Move();
  image(backimageImg6,displayWidth/6-280,displayHeight/6-130,displayWidth,displayHeight-20);
  enymy1O.visible = false;
  enymy2O.visible = false;  
  enymy3O.visible = false;
  enymy4O.visible = false;
  enymy5O.visible = false;
}

if(gameState === 6){
  player.visible = true;
  //enymy5.visible = true;
  player.y = 700;
  punchB.show();
  kickB.show();
  smashB.show();
  Move();
  image(backimageImg7,displayWidth/6-280,displayHeight/6-130,displayWidth,displayHeight-20);
  enymy1O.visible = false;
  enymy2O.visible = false;  
  enymy3O.visible = false;
  enymy4O.visible = false;
  enymy5O.visible = false;
}

if(gameState === 7){
  text("you lost",displayWidth/2,displayHeight/2);
  player.visible = false;
  enymy1.visible = false;
  countDown1 = 30;
  countDown2 = 30;
  countDown3 = 30;
  countDown4 = 30;
  countDown5 = 30;
  pauseState = 30;
  player.x = 500;
  player.y = 500;
  enymy1.x = displayWidth-player.x;
  healthE1 = 100;
  healthP = 100;
  hp2.visible = true;
  hp2.x = displayWidth-137;
  hp1.x = 165;
  gameState = 0;
}

if(gameState === 8){
  textSize = 20;
  text("you win",displayWidth/2,displayHeight/2);
  lockState = 1;
}

if(healthE1 <= 0){
enymy1State.visible = false;
playerState.visible = false;
hp2.visible = false;
gameState = 7;
//gameState = 0;
}

if(healthP <= 0){
  enymy1State.visible = false;
  playerState.visible = false;
  hp2.visible = false;
  gameState = 7;
}

if(healthE1 <= 0 && score >= 2000){
  gameState = 8;
}

playB.mousePressed(()=>{
  playBClick();
});

fightE1B.mousePressed(()=>{
  fightE1BClick();
});

fightE2B.mousePressed(()=>{
  fightE2BClick();
});

fightE3B.mousePressed(()=>{
  fightE3BClick();
});

fightE4B.mousePressed(()=>{
  fightE4BClick();
});

fightE5B.mousePressed(()=>{
  fightE5BClick();
});

start1B.mousePressed(()=>{
  Start1BClick();
  lock1.visible = false;
  lock2.visible = false;
  lock3.visible = false;
  lock4.visible = false;
});

start2B.mousePressed(()=>{
  Start2BClick();
  lock1.visible = false;
  lock2.visible = false;
  lock3.visible = false;
  lock4.visible = false;
});

start3B.mousePressed(()=>{
  Start3BClick();
  lock1.visible = false;
  lock2.visible = false;
  lock3.visible = false;
  lock4.visible = false;
});

start4B.mousePressed(()=>{
  Start4BClick();
  lock1.visible = false;
  lock2.visible = false;
  lock3.visible = false;
  lock4.visible = false;
});

start5B.mousePressed(()=>{
  Start5BClick();
  lock1.visible = false;
  lock2.visible = false;
  lock3.visible = false;
  lock4.visible = false;
});

punchB.mousePressed(()=>{
  punchBClick();
});

kickB.mousePressed(()=>{
  kickBClick();
});

smashB.mousePressed(()=>{
  smashBClick();
});

quitB.mousePressed(()=>{
  gameState = 0;
  countDown1 = 30;
  countDown2 = 30;
  countDown3 = 30;
  countDown4 = 30;
  countDown5 = 30;
  pauseState = 30;
  player.x = 500;
  player.y = 500;
  enymy1.x = displayWidth-player.x;
  healthE1 = 100;
  healthP = 100;
})

  drawSprites();
}

//image(variable Name, xposition,yposition,width,height);
function playBClick(){
  gameState = 1;
  playB.hide();
  if(lockState === 0){
  lock1.visible = true;
  lock2.visible = true;
  lock3.visible = true;
  lock4.visible = true;
  text("score 2000 to unlock next level",enymy1O.x,enymy1O.y-100);
  textColor = "red";
}
  if(lockState === 1){
    fightE2B.show();
    lock2.visible = true;
  lock3.visible = true;
  lock4.visible = true;
  }
  if(lockState === 2){
    fightE2B.show();
    fightE3B.show();
  lock3.visible = true;
  lock4.visible = true;
  }
  if(lockState === 3){
    fightE4B.show();
    fightE2B.show();
    fightE3B.show();
    lock4.visible = true;
  }
  if(lockState === 4){
    fightE5B.show();
    fightE4B.show();
    fightE2B.show();
    fightE3B.show();
  }
fightE1B.show();
countDown1 = 30;
countDown2 = 30;
countDown3 = 30;
countDown4 = 30;
countDown5 = 30;
pauseState = 0;
//fightE2B.show();
//fightE3B.show();
//fightE4B.show();
//fightE5B.show();
enymy1O.x = 321;
enymy1O.y = 351;
enymy2O.x = 535;
enymy2O.y = 353;
enymy3O.x = 721;
enymy3O.y = 355;
enymy4O.x = 935;
enymy4O.y = 353;
enymy5O.x = 1130;
enymy5O.y = 357;
}

function fightE1BClick(){
start1B.show();
start2B.hide();
start3B.hide();
start4B.hide();
start5B.hide();
}

function fightE2BClick(){
start2B.show();
start1B.hide();
start3B.hide();
start4B.hide();
start5B.hide();
}

function fightE3BClick(){
start3B.show();
start2B.hide();
start1B.hide();
start4B.hide();
start5B.hide();
}

function fightE4BClick(){
start4B.show();
start2B.hide();
start3B.hide();
start1B.hide();
start5B.hide();
}

function fightE5BClick(){
start5B.show();
start2B.hide();
start3B.hide();
start4B.hide();
start1B.hide();
}

function Start1BClick(){
  start5B.hide();
  start2B.hide();
  start3B.hide();
  start4B.hide();
  start1B.hide();

  fightE1B.hide();
  fightE2B.hide();
  fightE3B.hide();
  fightE4B.hide();
  fightE5B.hide(); 

  enymy1O.visible = true;
  enymy1O.x = displayWidth/2+player.x;
  enymy1O.y = player.y;
  enymy2O.visible = false;
  enymy3O.visible = false;
  enymy4O.visible = false;
  enymy5O.visible = false;

  gameState = "enymy1Show";
  //gameState = 2;
}

function Start2BClick(){
  fightE1B.hide();
  fightE2B.hide();
  fightE3B.hide();
  fightE4B.hide();
  fightE5B.hide(); 

  start5B.hide();
  start2B.hide();
  start3B.hide();
  start4B.hide();
  start1B.hide();

  enymy2O.visible = true;
  enymy2O.x = displayWidth/2+player.x;
  enymy2O.y = player.y;
  enymy1O.visible = false;
  enymy3O.visible = false;
  enymy4O.visible = false;
  enymy5O.visible = false;

  gameState = "enymy2Show";
  //gameState = 3;
}

function Start3BClick(){
  fightE1B.hide();
  fightE2B.hide();
  fightE3B.hide();
  fightE4B.hide();
  fightE5B.hide(); 

  start5B.hide();
  start2B.hide();
  start3B.hide();
  start4B.hide();
  start1B.hide();

  enymy3O.visible = true;
  enymy3O.x = displayWidth/2+player.x;
  enymy3O.y = player.y;
  enymy2O.visible = false;
  enymy1O.visible = false;
  enymy4O.visible = false;
  enymy5O.visible = false;

  gameState = "enymy3Show";
  //gameState = 4;
}

function Start4BClick(){
  fightE1B.hide();
  fightE2B.hide();
  fightE3B.hide();
  fightE4B.hide();
  fightE5B.hide();  

  start5B.hide();
  start2B.hide();
  start3B.hide();
  start4B.hide();
  start1B.hide();

  enymy4O.visible = true;
  enymy4O.x = displayWidth/2+player.x;
  enymy4O.y = player.y;
  enymy2O.visible = false;
  enymy3O.visible = false;
  enymy1O.visible = false;
  enymy5O.visible = false;

  gameState = "enymy4Show";
  //gameState = 5;
}

function Start5BClick(){
  fightE1B.hide();
  fightE2B.hide();
  fightE3B.hide();
  fightE4B.hide();
  fightE5B.hide();  

  start5B.hide();
  start2B.hide();
  start3B.hide();
  start4B.hide();
  start1B.hide();

  enymy5O.visible = true;
  enymy5O.x = displayWidth/2+player.x;
  enymy5O.y = player.y;
  enymy2O.visible = false;
  enymy3O.visible = false;
  enymy4O.visible = false;
  enymy1O.visible = false;

  gameState = "enymy5Show";
  //gameState = 6;
}

function punchBClick(){
  playerState = 1;
  player.addAnimation("player",playerPunchImg);
  
  //if(playerState === 1){
  //p//layer.visible = false;
  //  if(pauseState <= 0){
    //playerState = playerState;
   // player.visible = false;
  //}else{
//    pauseState = pauseState-0.5;
  //}
//}
}

function kickBClick(){
  playerState = 2;
  player.addAnimation("player",playerKickImg);
  
  //if(playerState === 2){
  //p//layer.visible = false;
  //  if(pauseState <= 0){
    //playerState = playerState;
   // player.visible = false;
  //}else{
//    pauseState = pauseState-0.5;
  //}
//}
}

function smashBClick(){
  playerState = 3;
  player.addAnimation("player",playerSmashImg);
  
  //if(playerState === 3){
  //player.visible = false;
  //  //if(pauseState <= 0){
  // 
     //playerState = playerState;
    //player.visible = false;
 // }//else{
 //   pauseState = pauseState-0.5;
  //
}


function Move(){
  if(player.x >= 10 && player.x <= displayWidth-10){
  if(keyDown(RIGHT_ARROW)){
    player.x += 10;
  }

  if(keyDown(LEFT_ARROW)){
    player.x -= 10;
  }
}else if(player.x <= 10){
  player.x = 20;
}
}