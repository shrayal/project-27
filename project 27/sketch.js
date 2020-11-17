
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var g,c1,c2,c3,c4,b1,b2,b3,b4

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	g=new Ground(400,60,600,50)
	b1=new Bob(150,110,20)
	c1=new Chain(b1.body,{x:150,y:70})
	b2=new Bob(225,300,20)
	c2=new Chain(b2.body,{x:225,y:70})
	b3=new Bob(300,300,20)
	c3=new Chain(b3.body,{x:300,y:70})
	b4=new Bob(375,100,20)
	c4=new Chain(b4.body,{x:375,y:70})

	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  g.display();
  b1.display();
  c1.display();
  b2.display();
  c2.display();
  b3.display();
  c3.display();
  b4.display();
  c4.display();
 
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-15,y:-180})
	}
}