var ralphWalking,ralphClimbing,ralphSmashing;
var felixWalking,felixFixing,felixDying;
var ralph, building, blding;
function preload(){
ralphWalking = loadAnimation("Ralph Walking 1.png","Ralph standing.png","ralph walking.png","Ralph standing.png"  )
building = loadImage("Building.png");
ralphClimbing = loadAnimation("Ralph climbing.png");
}

function setup(){
    createCanvas(1275,550);
  blding = createSprite(637,275,100,400);
  blding.addImage("building",building);
  blding.scale = 0.825
  ralph = createSprite(0,490,50,50);
  ralph.addAnimation("walking",ralphWalking);
  ralph.scale = 2.15
  ralph.velocityX = 3
  
  
}

function draw() {
    background("BLACK");
      if(ralph.x >= 880){
    ralph.velocityX = 0
    ralph.changeAnimation("asdfhb", ralphClimbing);
  }
  drawSprites()

}
