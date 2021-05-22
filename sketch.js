var garden,gardenImg,cat,catimg,catimg2;
var mouse,mouseimg,mouseimg2;
function preload() {
    //load the images here
gardenImg=loadImage("garden.png");
catimg=loadImage("cat1.png,cat2.png,cat3.png");
mouseimg=loadImage("mouse1.png");
catimg2=loadImage("cat4.png");
mouseimg2=loadImage("mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden=createSprite(500,500);
garden.addImage("running,",gardenImg);
garden.scale=1;

cat=createSprite(500,500);
cat.addImage("running,",catimg);
cat.scale=0.5;

mouse=createSprite(500,500);
mouse.addImage("running,",mouseimg);
mouse.scale=0.3;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
cat.addImage("sitting",catimg2)
mouse.addImage("eatimg",mouseimg2)
    }
  
    if(keyDown("right_arrow")){
        cat.x = cat.x + 3;
      }
       if(keyDown("left_arrow")){
        cat.x = cat.x - 3;}
       }
     if(keyDown("up_arrow")){
        cat.y = cat.y - 3;
      }
         
     if(keyDown("down_arrow")){
       cat.y = cat.y - 3;
      }

    

    drawSprites();
    


function keyPressed(){

  //For moving and changing animation write code here


}
