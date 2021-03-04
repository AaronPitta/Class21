function isTouching(object1,object2){
    if (object1.x -object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
  }
  else {
    return false;
  }
  }
  function bounceOff(Ob1,Ob2){
  
  
    if (Ob1.x - Ob2.x < Ob2.width/2 + Ob1.width/2
      && Ob2.x - Ob1.x < Ob2.width/2 + Ob1.width/2) {
        Ob1.velocityX = Ob1.velocityX * (-1);
        Ob2.velocityX = Ob2.velocityX * (-1);
  }
  if (Ob1.y - Ob2.y < Ob2.height/2 + Ob1.height/2
    && Ob2.y - Ob1.y < Ob2.height/2 + Ob1.height/2){
      Ob1.velocityY = Ob1.velocityY * (-1);
      Ob2.velocityY = Ob2.velocityY * (-1);
  }
  
  }