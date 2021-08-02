var iss_img,spaceBg_img;
var spacecraft1_img, spacecraft2_img, spacecraft3_img, spacecraft4_img;
var hasDocked = false

function preload(){
iss_img = loadImage("iss.png");
spaceBg_img = loadImage("spacebg.jpg");
spacecraft1_img = loadImage("spacecraft1.png");
spacecraft2_img = loadImage("spacecraft2.png");
spacecraft3_img = loadImage("spacecraft3.png");
spacecraft4_img = loadImage("spacecraft4.png");

}

function setup() {
  createCanvas(800,400);

  spacecraft = createSprite(285,240);
  spacecraft.addImage(spacecraft1_img);
  spacecraft.scale = 0.15;

  iss = createSprite(400, 200, 50, 50);
  iss.addImage(iss_img);
  iss.scale = 0.5;
}

function draw() {
  background(spaceBg_img);  
  spacecraft.addImage(spacecraft1_img);
  if(!hasDocked){
    spacecraft.x = spacecraft.x+random(-1,1)
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y-2;
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraft1_img);
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraft3_img);
      spacecraft.x = spacecraft.x-1;
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraft2_img);
      spacecraft.x = spacecraft.x+1;
    }
  }
  if(spacecraft.y <= iss.y+70 &&spacecraft.x <= iss.x-10){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful", 200,200);
  }


  drawSprites();
}