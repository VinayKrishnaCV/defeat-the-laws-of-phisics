//namespacing
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var ground;
var box1,box2,box3,box4,box5;
var buildpig,mayorpig;
var L0g1,l0G2,L0g3,l0G4;
var knocker;

function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;

  box1 = new Box(720,700,50,50);
  box2 = new Box(830,700,50,50);
  box3 = new Box(720,650,50,50);
  box4 = new Box(830,650,50,50);
  box5 = new Box(775,580,50,50);
  ground = new Ground(600,750,1200,20);
  buildpig=new piggie(775,700);
  mayorpig=new piggie(775,650);
  L0g1=new logss(775,680,180,PI/2);
  l0G2=new logss(775,620,180,PI/2);
  L0g3=new logss(730,550,110,PI/4);
  l0G4=new logss(803,550,110,-PI/4);
  knocker=new birdie(0,0);
  
  // PI radians = 180 degrees
  // 1 degree = PI/180
  //30 deg = (PI/180)*30 = PI/6
  // PI = 22/7 = 3.14
}

function draw() {
  //refreshing background
  background("black");  

  Engine.update(engine);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  ground.display();
  buildpig.display();
  L0g1.display();
  l0G2.display();
  mayorpig.display();
  L0g3.display();
  l0G4.display();
  box5.display();
  knocker.display();

}