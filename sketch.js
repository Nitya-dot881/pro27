
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{
  backgroundImg = loadImage("n.jpg");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(400,50,300,20)
    bob=new BOB(330,300,30)
	bob2=new BOB(340,300,30)
	bob3=new BOB(360,300,30)
	bob4=new BOB(380,300,30)
	bob5=new BOB(400,300,30)
 rope=new CONSTRAINT(bob.body,ground.body,-110,10)
 rope1=new CONSTRAINT(bob2.body,ground.body,-60,10)
 rope2=new CONSTRAINT(bob3.body,ground.body,-10,10)
 rope3=new CONSTRAINT(bob4.body,ground.body,40,10)
 rope4=new CONSTRAINT(bob5.body,ground.body,90,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  bob.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  ground.display()
  rope.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  
  drawSprites();
 
}
function keyPressed()
 {
  if(keyCode===RIGHT_ARROW)
  {
     Matter.Body.applyForce(bob.body,bob.body.position,{x:-80,y:-50})
    
  }
 }

  
