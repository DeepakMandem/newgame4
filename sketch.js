var player
var shipimg;
var alienGroup;
var bulletGroup;

var score = 0;



function preload()
{
	
}

function setup() {
	createCanvas(1420, 680);
	player = createSprite(710,580,50,50);

  alienGroup = new Group;
  bulletGroup = new Group;
	


	

	
  
}


function draw() {
  background("black")

  textSize(20)
  text("Score: "+ score, 100,50);
  
  
  
  player.x = World.mouseX;

  if (keyDown("SPACE")) {
    spawnBullets();
  }

  if(bulletGroup.isTouching(alienGroup)){
    alienGroup.destroyEach();
    score++;
  }

  if(score === 10){
    textSize(20)
    text("GREAT JOB!",710,340)
  }


  if(score === 100){
    textSize(20)
    text("AWESOME!",710,340)
  }

  if(score ===200){
    textSize(20)
    text("WOW!",710,340)
  }
 
  if(score === 300){
    textSize(20)
    text("YOUR A NATURAL!",710,340)
  }

  if(score === 400){
    textSize(20)
    text("SUPER!",710,340)
  }
  

  if(score === 490){
    textSize(20)
    text("YOUR ALMOST ON THE BOSS BATTLE!",710,340)
  }
  
 spawnAliens();
  
  drawSprites();

  textSize(20);
  fill("white")
  text("GOAL OF THE GAME: defeat the aliens to get a high score and defeat the boss",355,140);
  text("Game Rules: 1.move your mouse to move  2.press space to shoot  3.if the aliens cross the border, then you lose!",355,60);
  text("4. you need 500 points to reach the boss",355,100)
  
  
 
}

function spawnAliens(){
  //write code here to spawn the clouds
if (frameCount % 20 === 0) {
  var alien = createSprite(600,0,50,50);
  alien.x = Math.round(random(0,1420));
  alien.y = 0;
  count = Math.round( score + World.frameRate/10);


  
  alien.velocityY = (2 + 10*count/100);
  alienGroup.add(alien);
  
   //assign lifetime to the variable
 
  
  //adjust the depth
  
  
  //add each cloud to the group
  
}

}

function spawnBullets(){
 
    var bullet = createSprite(200, 200,5,5);
    bullet.x=player.x;  
    bullet.y=player.y;
    bullet.velocityY=-10; 
    
    bullet.lifetime=100;

    bulletGroup.add(bullet);
    
    }










