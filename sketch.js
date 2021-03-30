var PLAY = 1;
var END = 0;
var gameState = 0;
var back;
var cat;
var mouse;

function preload() {
backImage = loadImage("garden.png");

cat_sit = loadAnimation("cat1.png");
cat_Animation = loadAnimation("cat2.png","cat3.png");
cat_stop = loadAnimation("cat4.png");

mouse_sit = loadAnimation("mouse1.png");
mouse_Animation = loadAnimation("mouse2.png","mouse3.png");
mouse_stop = loadAnimation("mouse4.png");
}
function setup() {
 createCanvas(980,700);

 back = createSprite(490,350);
 back.addImage(backImage);

 cat = createSprite(800,600);
 cat.addAnimation("sitting",cat_sit);
 cat.scale = 0.09;

 mouse = createSprite(200,600);
 mouse.addAnimation("sitting",mouse_sit);
 mouse.scale = 0.09;
}

function draw() {
   background(225);
   drawSprites();
   keyPressed();
   if(cat.x - mouse.x < (cat.width - mouse.width)/2){
   cat.velocityX = 0;
   mouse.velocityX = 0;
   cat.chngeAnimation("sitting",cat_stop);
   mouse.changeAnimation("sitting",mouse_stop);
  } 
}

function keyPressed(){
   if(keyCode === LEFT_ARROW){
      mouse.velocityX = 5;
      mouse.addAnimation("sitting",mouse_Animation);
      mouse.changeAnimation("sitting");
      mouse.frameDelay = 5;
   }
   if(keyCode === RIGHT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("sitting",cat_Animation);
      cat.changeAnimation("sitting");
      cat.frameDelay = 5;
   }
}