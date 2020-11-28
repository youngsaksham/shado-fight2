var playB,punchB,kickB,smashB,jumpPunchB,fightE1B,fightE2B,fightE3B,fightE4B,fightE5B,start1B,start2B,start3B,start4B,start5B;

var gameState = 0;
var playerState = 0;
var enymy1State = 0;

var player,enymy1,enymy2,enymy3,enymy4,enymy5,enymyKing,backimage;

var backimageImg1,backimageImg2,backimageImg3,backimageImg4,backimageImg5,backimageImg6,backimageImg7;

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


enymy1DownImg = loadAnimation("image/enymy/enymy1/enymyDown/enymy1.PNG","image/enymy/enymy1/enymyDown/enymy2.PNG","image/enymy/enymy1/enymyDown/enymy3.PNG","image/enymy/enymy1/enymyDown/enymy4.PNG","image/enymy/enymy1/enymyDown/enymy5.PNG");
enymy1KickImg = loadAnimation("image/enymy/enymy1/enymyKick/enymy1.png","image/enymy/enymy1/enymyKick/enymy2.png","image/enymy/enymy1/enymyKick/enymy3.png");
enymy1PunchImg = loadAnimation("image/enymy/enymy1/enymyPunch/enymy1.png","image/enymy/enymy1/enymyPunch/enymy2.png","image/enymy/enymy1/enymyPunch/enymy3.png","image/enymy/enymy1/enymyPunch/enymy4.png","image/enymy/enymy1/enymyPunch/enymy5.png");
enymy1SmashImg = loadAnimation("image/enymy/enymy1/enymySmash/enymy1.png","image/enymy/enymy1/enymySmash/enymy2.png","image/enymy/enymy1/enymySmash/enymy3.png","image/enymy/enymy1/enymySmash/enymy4.png","image/enymy/enymy1/enymySmash/enymy5.png");
enymy1WinImg = loadAnimation("image/enymy/enymy1/enymyWin/enymy1.png","image/enymy/enymy1/enymyWin/enymy2.png","image/enymy/enymy1/enymyWin/enymy3.png","image/enymy/enymy1/enymyWin/enymy4.png","image/enymy/enymy1/enymyWin/enymy5.png");

playerStart = loadAnimation("image/player/punchPlayer/punch1.png","image/player/punchPlayer/punch1.png");
enymy1Start = loadAnimation("image/enymy/enymy1/enymyPunch/enymy1.png","image/enymy/enymy1/enymyPunch/enymy2.png");

backimageImg1 = loadImage("image/background/running background.webp");
backimageImg2 = loadImage("image/background/beckground.gif");
backimageImg3 = loadImage("image/background/background1.jpg");
backimageImg4 = loadImage("image/background/background2.jpg");
backimageImg5 = loadImage("image/background/background3.jpg");
backimageImg6 = loadImage("image/background/background4.jpg");
backimageImg7 = loadImage("image/background/background5.jpg");

}

function setup() {
  createCanvas(displayWidth,displayHeight);

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

  enymy1O = createSprite(200,220,20,20);
  //enymy1O = addAnimation("enymy1O",enymy1OImg);

  enymy1 = createSprite(500,500,20,20);
  enymy1.addAnimation("enymy1",enymy1Start);

  player =  createSprite(500,500,20,20);
  
  //player.scale = 5;

}

function draw() {
  background(255,255,255);
//Hide();

if(enymy1State === 0){
  enymy1.visible = true;
//enymy1.addAnimation("enymy1",enymy1Start);
}

if(playerState === 0){
  player.addAnimation("player",playerStart);
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
  //enymy1.visible = false;
 // image(backimageImg1,displayWidth/6-280,displayHeight/6-130,displayWidth,displayHeight-20);
}

if(gameState === 1){
  image(backimageImg2,displayWidth/6-280,displayHeight/6-130,displayWidth,displayHeight-20);
}

if(gameState === 2){
  player.visible = true;
  enymy1.visible = true;
  player.y = 700;
  enymy1.y = 600;
  punchB.show();
  kickB.show();
  smashB.show();
  Move();
  image(backimageImg3,displayWidth/6-280,displayHeight/6-130,displayWidth,displayHeight-20);
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
});

start2B.mousePressed(()=>{
  Start2BClick();
});

start3B.mousePressed(()=>{
  Start3BClick();
});

start4B.mousePressed(()=>{
  Start4BClick();
});

start5B.mousePressed(()=>{
  Start5BClick();
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

  drawSprites();
}

//image(variable Name, xposition,yposition,width,height);
function playBClick(){
  gameState = 1;
  playB.hide();
fightE1B.show();
fightE2B.show();
fightE3B.show();
fightE4B.show();
fightE5B.show();
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

  gameState = "enymy5Show";
  //gameState = 6;
}

function punchBClick(){
  playerState = 1;
  player.addAnimation("player",playerPunchImg);
}

function kickBClick(){
  playerState = 2;
  player.addAnimation("player",playerKickImg);
}

function smashBClick(){
  playerState = 3;
  player.addAnimation("player",playerSmashImg);
}

function Move(){
  if(keyDown(RIGHT_ARROW)){
    player.x += 10;
  }

  if(keyDown(LEFT_ARROW)){
    player.x -= 10;
  }
}
