const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var boyImage,boy;
var boyBackImage;
var villanImage,villan;
var villan2;
var zombie1;
var zombieImage,zombie;
var treasureImage,treasure;
var backgroundImg;
var invisbleground,ground;
var background1;
var bottomPlatform,sidePlatform,upperPlatform;
var engine,world;


var door,doorImage;

function preload(){
boyImage= loadAnimation("assets/boy1.png","assets/boy3.png","assets/boy2.png","assets/boy4.png");
boyBackImage= loadAnimation("assets/boy1back.png","assets/boy2back.png","assets/boy3back.png","assets/boy4back.png")
villanImage= loadAnimation("assets/villan1.png","assets/villan2.png","assets/villan3.png")
zombieImage= loadAnimation("assets/zombie1.png","assets/zombie2.png","assets/zombie3.png","assets/zombie4.png","assets/zombie5.png","assets/zombie6.png")
treasureImage= loadImage("assets/treasure.png");
backgroundImg=loadImage("assets/background gif.gif");
doorImage=loadImage("assets/portal.png")
}
function setup(){
createCanvas(windowWidth,windowHeight);
engine=Engine.create();
world=engine.world;






b1=new Box(250,600,200,20);
b2=new Box(160,490,20,200);
b3=new Box(250,700,200,20);
b4=new Box(400,700,200,20);
b5=new Box(500,600,20,200);
b6=new Box(390,500,200,20);
b7=new Box(250,230,200,20);
b8=new Box(450,400,200,20);
b9=new Box(550,400,200,20);
b10=new Box(650,500,20,200);
b11=new Box(700,400,200,20);
b12=new Box(600,700,200,20);
b13=new Box(700,700,200,20);
b14=new Box(850,700,200,20);
b15=new Box(800,600,20,200);
b16=new Box(870,400,200,20);
b17=new Box(970,490,20,200);
b18=new Box(1050,700,200,20);
b19=new Box(1150,610,20,200);
b20=new Box(1260,700,200,20);
b21=new Box(1360,610,20,200);
b22=new Box(1360,410,20,200);
b23=new Box(1360,250,20,200);
b24=new Box(1250,400,200,20);
b25=new Box(1250,160,200,20);
b26=new Box(1250,10,200,20);
b27=new Box(1050,10,200,20);
b28=new Box(850,10,200,20);
b29=new Box(650,10,200,20);
b30=new Box(450,10,200,20);
b31=new Box(250,10,200,20);
b32=new Box(160,100,20,200);
b33=new Box(160,190,20,200);
b34=new Box(160,280,20,200);
b35=new Box(160,370,20,200);
b36=new Box(650,390,20,200);
b37=new Box(350,315,20,190);
b38=new Box(1070,270,20,200);
b39=new Box(1070,160,200,20);
b40=new Box(980,195,20,80);
b41=new Box(890,230,200,20);
b42=new Box(800,180,20,120);
b43=new Box(710,120,200,20);
b44=new Box(610,120,170,20);
b45=new Box(530,185,20,150);
b46=new Box(350,50,20,150);



boy=createSprite(100,650,50,50);
boy.addAnimation("running",boy);
boy.scale=1.1;
boy.addAnimation("back",boyBackImage);
boy.addAnimation("front",boyImage);

door=createSprite(width-80,60,50,50)
door.addImage(doorImage);
door.scale=0.3

zombie=createSprite(220,400,50,50)
zombie.addAnimation("zombie",zombieImage)

villan=createSprite(1075,460,50,50);
villan.addAnimation("running",villanImage);
villan.scale=1.1;

zombie1=createSprite(430,180,50,50);
zombie1.addAnimation("runnning",zombieImage);

villan2=createSprite(900,100,50,50);
villan2.addAnimation("running",villanImage);
villan2.scale=1.1;


/*treasure=createSprite(1450,100,50,50);
treasure.addImage("treasure",treasureImage);
treasure.scale=0.3;*/

invisibleGround = createSprite(200,725,windowWidth,10);
invisibleGround.visible = false;




}
function draw(){
    background(backgroundImg,windowWidth,windowHeight);
    Engine.update(engine);
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    b22.display();
    b23.display();
    b24.display();
    b25.display();
    b26.display();
    b27.display();
    b28.display();
    b29.display();
    b30.display();
    b31.display();
    b32.display();
    b33.display();
    b34.display();
    b35.display();
    b36.display();
    b37.display();
    b38.display();
    b39.display();
    b40.display();
    b41.display();
    b42.display();
    b43.display();
    b44.display();
    b45.display();
    b46.display();



if(boy.isTouching(door)){
  levelUp();
}

/*if(boy.isTouching(blocks)){
  boy.x=boy.x-10; 
}*/

if(boy.isTouching(zombie)){
gameOver();
}
    
  playerMovement();
  drawSprites();
}






function playerMovement(){
  
  if (keyDown("left_arrow")) {
    boy.x=boy.x-10;
    boy.changeAnimation("back")
    }

    if (keyDown("right_arrow")) {
      boy.x=boy.x+10;
      boy.changeAnimation("front")
      }
    if (keyDown("up_arrow")) {
        boy.y=boy.y-10;
        
        }

       
  boy.collide(invisibleGround);
  if (keyDown("down_arrow")) {
    boy.y=boy.y+10;
    
    }
   
boy.collide(invisibleGround);
  }
  function levelUp() {
    swal({
      title: `Congratulations`,
      text: "Level 1 Completed !!!",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRuVqyj0MfAzU2G0Eyx3JgtTdrJgAhO_agRbu6Xsc5YCL7_l24jE6G2xzhSbc344XpZ_g&usqp=CAU",
      imageSize: "100x100",
      confirmButtonText: "Next Level"
    });
  }
  function gameOver() {
    swal({
      title: `OOpps !`,
      text: "Try Again ",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRuVqyj0MfAzU2G0Eyx3JgtTdrJgAhO_agRbu6Xsc5YCL7_l24jE6G2xzhSbc344XpZ_g&usqp=CAU",
      imageSize: "100x100",
      confirmButtonText: "Thanks for Playing"
    });
  }
  


