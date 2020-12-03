
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine,world;
var stand1,stand2;
var holder,ball,ground;
var bluebox1,pinkbox1,greenbox1,yellowbox1;
var chain;
var hex;
var ball;
var hexImg;
var ground1
function preload()
{
	hexImg=loadImage("polygon.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground1 = new Ground(400,700,800,10);
   stand1=new Ground(395,600,240,10);
   stand2=new Ground(585,300,160,10);
   
   bluebox1=new Box(295,575,40,40);
   bluebox2=new Box(335,575,40,40);
   bluebox3=new Box(375,575,40,40);
   bluebox4=new Box(415,575,40,40);
   bluebox5=new Box(455,575,40,40);
   bluebox6=new Box(495,575,40,40);
   bluebox7=new Box(605,275,40,40);
   bluebox8=new Box(565,275,40,40);
   bluebox9=new Box(645,275,40,40);
   bluebox10=new Box(525,275,40,40);


   pinkbox1=new Box(335,535,40,40);
   pinkbox2=new Box(375,535,40,40);
   pinkbox3=new Box(415,535,40,40);
   pinkbox4=new Box(585,195,40,40);
   pinkbox5=new Box(455,535,40,40);

   greenbox1=new Box(415,495,40,40);
   greenbox2=new Box(375,495,40,40);
   greenbox3=new Box(565,235,40,40);
   greenbox4=new Box(605,235,40,40);

   yellowbox1=new Box(395,455,40,40);

   hex=new Hexagon(555,190,30,30);

   ball = Bodies.circle(50,200,20);
    World.add(world,ball);

   chain=new Chain(this.ball,{x:150,y:130});
	Engine.run(engine);
  
}


function draw() {
  background('brown');
  Engine.update(engine);

  push();
  stroke("beige");
  strokeWeight(4);
  textSize(30);
  text("Drag the stone and release it to launch it towards towers", 40, 50);
  pop();

  push();
  stroke("beige");
  strokeWeight(2.5);
  textSize(25);
  text("All the best", 600, 500);
  pop();
  
  ground1.display();
  stand1.display();
  stand2.display();

  stroke("black")
  strokeWeight(5);
  fill(rgb(135, 205, 236));
  bluebox1.display();
  bluebox2.display();
  bluebox3.display();
  bluebox4.display();
  bluebox5.display();
  bluebox6.display();
  bluebox7.display();
  bluebox8.display();
  bluebox9.display();
  bluebox10.display();

  stroke("black")
  strokeWeight(5);
  fill("pink");
  pinkbox1.display();
  pinkbox2.display();
  pinkbox3.display();
  pinkbox4.display();
  pinkbox5.display();

  stroke("black")
  strokeWeight(5);
  fill(64,224,209);
  greenbox1.display();
  greenbox2.display();
  greenbox3.display();
  greenbox4.display();

  stroke("black")
  strokeWeight(5);
  fill("yellow");
  yellowbox1.display();
  hex.display();
  chain.display();
  //polygon.display();
  
  imageMode(CENTER);
  image(hexImg, ball.position.x, ball.position.y,50,45);

  

  
 
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
    chain.attach(this.ball);
  }
}

