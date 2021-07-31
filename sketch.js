var bg,bgImg;
var player;
var shooterImg;
var shooter_shooting;

function preload(){
bgImg = loadImage("images/bg.jpeg");
shooterImg = loadImage("images/shooter_2.png");
shooter_shooting = loadImage("images/shooter_3.png");
}

function setup(){

createCanvas(windowWidth,windowHeight);

bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.addImage(bgImg);
bg.scale = 1.1;

player = createSprite(displayWidth-1150,displayHeight-300,50,50);
player.addImage(shooterImg);
player.scale = 0.3;
player.debug = true;
player.setCollider("rectangle",0,0,300,300);
}

function draw(){
background("black");

if(keyDown("UP_ARROW") || touches.lenght>0){
player.y = player.y-30;
}

if(keyDown("DOWN_ARROW") || touches.lenght>0){
player.y = player.y+30;
}

if(keyWentDown("space")){
player.addImage(shooter_shooting);
}

else if(keyWentUp("space")){
player.addImage(shooterImg)
}

drawSprites();
}