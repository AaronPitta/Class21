var fixedRect, movingRect;
var gameObject1,gameObject2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";

  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor = "red";

  gameObject1.velocityX=1;
  gameObject2.velocityX=-1;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
   if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "yellow";
    gameObject1.shapeColor = "yellow";
   }
   else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
   }

   if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
   }
   else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "red";
   }

    bounceOff (gameObject1,gameObject2);


  
  drawSprites();
}

