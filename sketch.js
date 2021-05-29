var score = 0;




function preload(){
 //load your images here 
 backgroundImage=loadImage("background0.png");
 arrowImage=loadImage("arrow0.png");
 bowImage=loadImage("bow0.png");
 rbImage=loadImage("red_balloon0.png");
 bbImage=loadImage("blue_balloon0.png");
 pbImage=loadImage("pink_balloon0.png");
 gbImage=loadImage("green_balloon0.png");
 arrowImage=loadImage("arrow0.png");

  
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  playground=createSprite(0,0,600,600);
  playground.addImage(backgroundImage);
  playground.scale=2.5;
  
  bow=createSprite(480,220,20,50);
  bow.addImage(bowImage);
  
  arrowGroup = new Group();
  rbg = new Group();
  bbg = new Group();
  pbg = new Group();
  gbg = new Group();
  
} 
 

function draw() {
background("white");
playground.velocityX=-3;
  if(playground.x<0){
    playground.x=width/2;
  }
   bow.y = World.mouseY;
 
  
  
  if (keyDown("space")){
   createArrow();
   
    
    
  }
 




    var select_balloon = Math.round(random(1,4));


if(World.frameCount % 80 == 0) {
  if(select_balloon == 1){
    redBalloon();
  } else if (select_balloon == 2){
    greenBalloon();
  } else if (select_balloon == 3){
    blueBalloon();
  } else if (select_balloon == 4){
    pinkBalloon();
  }
   
}
  if(arrowGroup.isTouching(rbg)){
    rbg.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
    
  }
  
  if(arrowGroup.isTouching(bbg)){
    bbg.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
    
  }
  
  if(arrowGroup.isTouching(pbg)){
    pbg.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
    
  }
  
  if(arrowGroup.isTouching(gbg)){
    gbg.destroyEach();
    arrowGroup.destroyEach();
    score=score+4;
    
  }
drawSprites();
    text("Score : "+score,500,50);  
  
   

}
 function redBalloon(){
  var red = createSprite(0,Math.round(random(20,370)),10,10);
  red.addImage(rbImage);
  red.velocityX=3;
  red.lifetime=150;
  red.scale=0.1;
  rbg.add(red);
  }
    
function blueBalloon(){
  var blue = createSprite(0,Math.round(random(20,370)),10,10);
  blue.addImage(bbImage);
  blue.velocityX=3;
  blue.lifetime=150;
  blue.scale=0.1;
  bbg.add(blue);
  
}

function pinkBalloon(){
  var pink = createSprite(0,Math.round(random(20,370)),10,10);
  pink.addImage(pbImage);
  pink.velocityX=3;
  pink.lifetime=150;
  pink.scale=1;
  pbg.add(pink);
  
}

function greenBalloon(){
  var green = createSprite(0,Math.round(random(20,370)),10,10);
  green.addImage(gbImage);
  green.velocityX=3;
  green.lifetime=150;
  green.scale=0.1;
  gbg.add(green);
  
}

function createArrow(){
  arrow=createSprite(360,100,5,10);
  arrow.addImage(arrowImage);
  arrow.y=bow.y;
  arrow.velocityX=-6;
  arrow.scale=0.3;
  arrow.lifetime=100;
  arrowGroup.add(arrow);
   
  camera.position.x=arrow.x;
  camera.position.y=arrow.y;
  
  



  
}
