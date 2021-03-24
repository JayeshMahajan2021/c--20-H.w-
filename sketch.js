
function preload() {
    CatImg = loadImage("images/cat4.png")
    MouseImg = loadImage("images/mouse1.png");
    ScreenImg = loadImage("images/garden.png");
    Cat2Img = loadAnimation("images/cat3.png","images/cat2.png");
    Mouse2Img = loadAnimation("images/mouse2.png , images/mouse3.png");
    Mouse3Img = loadImage("mouse4.png");
    Cat3Img = loadImage("cat1.png");
}

function setup(){
    createCanvas(1000,800);
    
   Screen = createSprite(10,10,200,200);
   Screen.scale = 1.6;
   Screen.addImage(ScreenImg);
   Mouse = createSprite(100,450,20,20);
   Mouse.scale = 0.11;
   Mouse.addImage("mouse",MouseImg);

   Cat = createSprite(700,450,20,20);
   Cat.scale = 0.2;
   Cat.addImage("cat",CatImg);
}

function draw() {

    background(255);
    
    
    if(Cat.x - Mouse.x <(Cat.width - Mouse.width)/2) {
        Mouse.velocityY = 0; 
        Cat.velocityY = 0;

        Mouse.addImage("mouseStill",Mouse3Img);
        
        Cat.addImage("catStill",Cat3Img);
        
    }
   

    drawSprites();

}

function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode == LEFT_ARROW) {
   Mouse.addAnimation("mouseTeasing",Mouse2Img);
   Mouse.changeAnimation("mouseTeasing");
   Mouse.velocityY = 2;


   Cat.addAnimation("catRunning", Cat2Img);
   Cat.changeAnimation("catRunning")

  }
  }

