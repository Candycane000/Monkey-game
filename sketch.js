var ground2
var survivalTime
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(900,400)
  suvivalTime=0
  score=0
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale=0.1
  
  ground = createSprite(1000,350,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2
  console.log(ground.x)
  foodGroup=new Group()
  obstacleGroup=new Group()
 ground2 = createSprite(900,350,900,10)
}


function draw() {
  background(255)
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("SurvivalTime:"+ survivalTime, 100,50)
   stroke("black")
  textSize(20)
  fill("black")
  text("Score:"+score,500,50)
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  if (keyDown("space")){
    monkey.velocityY=-12
  }

  monkey.velocityY = monkey.velocityY +0.8
  
  monkey.collide(ground)
  spawnBananas()
  if(monkey.isTouching(foodGroup)){
      score=score+1
     foodGroup.destroyEach()
   }
  
drawSprites();
}

function spawnBananas(){
if (frameCount % 180 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math .round(random(50,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
  foodGroup.add(banana)
}

}
function Obstacles(){
  if (frameCount % 300 === 0) {
  var obstacle = createSprite(890,20,4,10);
  obstacle.lifetime = 200;
  obstacle.addImage(obstacleImage) 
  obstacle.velocityX=-4
    obstcleGroup.add(obstacle)
  }
}

