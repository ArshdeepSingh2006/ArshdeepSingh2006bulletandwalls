var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(200,200,50,30);
  wall = createSprite(1200,200,thickness,height/2);

  speed=random(223,321);
  bullet.velocityX = 80;

  weight=random(30,52);
  thickness=random(22,83);
}



function draw() {
  background("black");
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 *weight *speed *speed/(thickness *thickness *thickness);

    if(damage>10){
      bullet.shapeColor = "green";
      wall.shapeColor = "white";
    }

    if(damage<10){
      bullet.shapeColor = "red";
      wall.shapeColor = "white";
    }
  }
  
  drawSprites();
}

function hasCollided(lbullet, lwall){
 
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}