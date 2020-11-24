var playB,punchB,kickB,smashB,jumpPunchB,fightE1B,fightE2B,fightE3B,fightE4B,fightE5B,start1B,start2B,start3B,start4B,start5B;

var gameState = 0;

var player,enymy1,enymy2,enymy3,enymy4,enymy5,enymyKing,backimage;

var backimageImg1,backimageImg2,backimageImg3;
var backimageImg = [backimageImg1,backimageImg2,backimageImg3];

//var playerSmashImg1,playerSmashImg2,playerSmashImg3,playerSmashImg4,playerSmashImg5,playerSmashImg6,playerSmashImg7,playerSmashImg8;
var playerSmashImg,playerPunchImg,playerKickImg ; // = [playerSmashImg1,playerSmashImg2,playerSmashImg3,playerSmashImg4,playerSmashImg5,playerSmashImg6,playerSmashImg7,playerSmashImg8];

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

enymy1OImg = loadImage("image/enymy/enymy Out Icon/enymy1.PNG");
//enymy2DownImg = loadImage("image/enymy/enymy2/enymyDown");
//enymy2KickImg = loadImage("image/enymy/enymy2/enymyKick");
//enymy2PunchImg = loadImage("image/enymy/enymy2/enymyPunch");
//enymy2SmashImg = loadImage("image/enymy/enymy2/enymySmash");
//enymy2WinImg = loadImage("image/enymy/enymy2/enymyWin");
//
//enymy3DownImg = loadImage("image/enymy/enymy3/enymyDown");
//enymy3KickImg = loadImage("image/enymy/enymy3/enymyKick");
//enymy3PunchImg = loadImage("image/enymy/enymy3/enymyPunch");
//enymy3SmashImg = loadImage("image/enymy/enymy3/enymySmash");
//enymy3WinImg = loadImage("image/enymy/enymy3/enymyWin");
//
//enymy4DownImg = loadImage("image/enymy/enymy4/enymyDown");
//enymy4KickImg = loadImage("image/enymy/enymy4/enymyKick");
//enymy4PunchImg = loadImage("image/enymy/enymy4/enymyPunch");
//enymy4SmashImg = loadImage("image/enymy/enymy4/enymySmash");
//enymy4WinImg = loadImage("image/enymy/enymy4/enymyWin");
//
//enymy5DownImg = loadImage("image/enymy/enymy5/enymyDown");
//enymy5KickImg = loadImage("image/enymy/enymy5/enymyKick");
//enymy5PunchImg = loadImage("image/enymy/enymy5/enymyPunch");
//enymy5SmashImg = loadImage("image/enymy/enymy5/enymySmash");
//enymy5WinImg = loadImage("image/enymy/enymy5/enymyWin");
//enymy5KnockImg = loadImage("image/enymy/enymy5/enymyKnock");
//
//enymyKingDownImg = loadImage("image/enymy/enymyKing/enymyDown.PNG")
//enymyKingDownKickImg = loadImage("image/enymy/enymyKing/enymyDownKick.PNG")
//enymyKingFacehitImg = loadImage("image/enymy/enymyKing/enymyFaceHit.PNG")
////enymyKingHunderedImg = loadImage("image/enymy/enymyKing/enymyHunderedHand.PNG")
//enymyKingJumpPunchImg = loadImage("image/enymy/enymyKing/enymyJumpPunch.PNG")
//enymyKingKickImg = loadImage("image/enymy/enymyKing/enymyKick.PNG")
//enymyKingPunchImg = loadImage("image/enymy/enymyKing/enymyPunch.PNG")
//enymyKingSmashImg = loadImage("image/enymy/enymyKing/enymySmash.PNG")
//enymyKingWinImg = loadImage("image/enymy/enymyKing/enymyWin.PNG")
//enymyKingKnockImg = loadImage("image/enymy/enymyKing/enymyKnock.PNG")

//backimageloadImg = loadImage("image/beckground.gif");
//  backimagecreateImg = createImg("image/beckground.gif");
//backimageImg1 = loadGif("image/beckground.gif");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  playB = createButton("Play");
  playB.position(displayWidth/2,displayHeight/2);

  punchB = createButton("Punch");
  punchB.position(displayWidth/2,displayHeight/2-50);

  kickB = createButton("kick");
  kickB.position(displayWidth/2,displayHeight/2-100);
  
  smashB = createButton("Smash");
  smashB.position(displayWidth/2,displayHeight/2-150);

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

  enymy1 = createSprite(200,200,20,20);
  //enymy1.addAnimation("enymy1",enymy1WinImg);

  player =  createSprite(500,500,20,20);
  //player.addAnimation("player",playerPunchImg);
  //player.scale = 5;

}

function draw() {
  background(255,255,255);
//Hide();

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
  enymy1.visible = false;
}

if(gameState === 2){
  player.visible = true;
  punchB.show();
  kickB.show();
  smashB.show();
}

if(gameState === 3){
  player.visible = true;
  punchB.show();
  kickB.show();
  smashB.show();
}

if(gameState === 4){
  //player.visible = true;
  punchB.show();
  kickB.show();
  smashB.show();
}

if(gameState === 5){
  player.visible = true;
  punchB.show();
  kickB.show();
  smashB.show();
}

if(gameState === 6){
  player.visible = true;
  punchB.show();
  kickB.show();
  smashB.show();
}


playB.mousePressed(()=>{
  Start();
});

fightE1B.mousePressed(()=>{
  F1();
});

fightE2B.mousePressed(()=>{
  F2();
});

fightE3B.mousePressed(()=>{
  F3();
});

fightE4B.mousePressed(()=>{
  F4();
});

fightE5B.mousePressed(()=>{
  F5();
});

start1B.mousePressed(()=>{
  StartF1();
});

start2B.mousePressed(()=>{
  StartF2();
});

start3B.mousePressed(()=>{
  StartF3();
});

start4B.mousePressed(()=>{
  StartF4();
});

start5B.mousePressed(()=>{
  StartF5();
});
 // image(backimageloadImg,200,200);
 // backimagecreateImg.position(20,20)
  drawSprites();
}

//image(variable Name, xposition,yposition,width,height);

function Start(){
  gameState = 1;
  playB.hide();
fightE1B.show();
fightE2B.show();
fightE3B.show();
fightE4B.show();
fightE5B.show();
}

function F1(){
start1B.show();
start2B.hide();
start3B.hide();
start4B.hide();
start5B.hide();
}

function F2(){
start2B.show();
start1B.hide();
start3B.hide();
start4B.hide();
start5B.hide();
}

function F3(){
start3B.show();
start2B.hide();
start1B.hide();
start4B.hide();
start5B.hide();
}

function F4(){
start4B.show();
start2B.hide();
start3B.hide();
start1B.hide();
start5B.hide();
}

function F5(){
start5B.show();
start2B.hide();
start3B.hide();
start4B.hide();
start1B.hide();
}

function StartF1(){
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

  gameState = 2;
}

function StartF2(){
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

  gameState = 3;
}

function StartF3(){
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

  gameState = 4;
}

function StartF4(){
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

  gameState = 5;
}

function StartF5(){
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

  gameState = 6;
}