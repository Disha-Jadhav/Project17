var monkey , monkey_running;
var fruitImage, obstacleImage;
var foodGroup, obstacleGroup;
var ground;
var score = 0;

function preload()
{
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png", "sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png", "sprite_6.png","sprite_7.png","sprite_8.png");
  
  fruitImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() 
{
  createCanvas(600, 400);
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.15;
  
  ground = createSprite(400, 384, 900, 50);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  ground.shapeColor="green";
  
  obstacleGroup = createGroup();
  fruitGroup = createGroup();
}


function draw() 
{
  background("lightblue");
   
  ground.x = ground.width/2;
   
  spawnObstacles();
  spawnfruits();
  
  monkey.collide(ground);
      
      if(keyDown("space") && monkey.y >= 200) 
      {
        monkey.velocityY = -12;
       
      } 
        monkey.velocityY = monkey.velocityY + 0.8; 
            
  drawSprites();
  
  stroke("black");
  fill("black");
  score = Math.ceil(frameCount/frameRate())
  textSize(20);
  text("Survival time : " + score, 100, 50);
}

function spawnfruits()
{
  if (frameCount % 80 === 0)
    {
      var fruit = createSprite(600, Math.round(random(120,200)), 30, 30);
      fruit.addImage(fruitImage);
      fruit.velocityX = -4;
      fruit.lifetime = 145;
      fruit.scale = 0.11;
      fruitGroup.add(fruit);
    }
}

function spawnObstacles()
{
  if(frameCount % 300 === 0)
    {
      var obstacle = createSprite(600, 330, 50, 50);
      obstacle.addImage(obstacleImage);
      obstacle.velocityX = -4;
      obstacle.scale = 0.3;
      obstacle.lifetime = 145;
      obstacleGroup.add(obstacle);
    }
}