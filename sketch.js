p5.disableFriendlyErrors=true;
var bg, backgroundImage;
var pinkCar,pinkCarImage,blueCarImage,purpleCarImage,silverCarImage,mCarImage;
var whiteLineGroup, carGroup1, carGroup2;
var randomNo;
function preload(){
  backgroundImage = loadImage("road.jpg");
  mCarImage = loadImage("myCar.png");
  pinkCarImage = loadImage("pinkCar.png");
  purpleCarImage = loadImage("purpleCar.png");
  silverCarImage = loadImage("silverCar.png");
  blueCarImage = loadImage("blueCar.png");
}

function setup() {
  createCanvas(1250, 680);
  
  //creating background
  bg = createSprite(625,340);
  bg.addImage(backgroundImage);
  

  
  whiteLineGroup=createGroup();
  carGroup1=createGroup();
  carGroup2=createGroup();
  
  myCar = createSprite(625,height-20);
  myCar.addImage(mCarImage);
  myCar.scale=0.5;
}

function draw() {
  
  background("white");
  
    if (keyDown("right")) {
      myCar.x=myCar.x+5;
    }
    
    if (keyDown("left")) {
      myCar.x=myCar.x-5;
    }
    
  if (frameCount%40 ===0) {
    var whiteLine = createSprite(640,230,7,30);
    whiteLine.shapeColor="white";
    whiteLine.velocityY=2;
    
    whiteLineGroup.add(whiteLine);
  }
  
  for (var i = 0; i < whiteLineGroup.length; i++) {
   whiteLineGroup.get(i).scale=whiteLineGroup.get(i).y/500;
  }
  
  
  if (frameCount%200 ===0) {
    car2 = createSprite(690,230,7,30);
    randomNo = Math.round(random(1,4));
    switch(randomNo) {
      case 1: car2.addImage(pinkCarImage); break;
      case 2: car2.addImage(purpleCarImage); break;
      case 3: car2.addImage(blueCarImage); break;
      case 4: car2.addImage(silverCarImage); break;
    }
    car2.scale=0.3;
    car2.velocityY=2;
    carGroup2.add(car2);
  }
  
    if (frameCount%240 ===0) {
    var car1 = createSprite(600,230,7,30);
    randomNo = Math.round(random(1,4));
    switch(randomNo) {
      case 1: car1.addImage(pinkCarImage); break;
      case 2: car1.addImage(purpleCarImage); break;
      case 3: car1.addImage(blueCarImage); break;
      case 4: car1.addImage(silverCarImage); break;
    }
    car1.scale=0.3;
    car1.velocityY=2;
    carGroup1.add(car1);
  }
  
  for (var i = 0; i < carGroup1.length; i++) {
   carGroup1.get(i).scale=carGroup1.get(i).y/500;
   carGroup1.get(i).x=carGroup1.get(i).x-1;

  }
  for (var i = 0; i < carGroup2.length; i++) {
   carGroup2.get(i).scale=carGroup2.get(i).y/500;
   carGroup2.get(i).x=carGroup2.get(i).x+1;
  }
  drawSprites();
}