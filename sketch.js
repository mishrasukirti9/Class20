
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var dustbin,dustbin2;

var base; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(200,400,1000,20,roof_options);
    World.add(world,roof);
	

	var ball_options = {
		restitution:0.3,
		friction:0,
		density:0.2,
	}

	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);
	
	var dustbin_options={
		isStatic:true			
	}
	dustbin = Bodies.rectangle(600,370,10,100,dustbin_options);
    World.add(world,dustbin);

	dustbin2 = Bodies.rectangle(500,370,10,200,dustbin_options);
    World.add(world,dustbin2);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  
  ellipse(ball.position.x,ball.position.y,20,20);

  rect(dustbin.position.x,dustbin.position.y,10,100);
  rect(dustbin2.position.x,dustbin2.position.y,10,100);

  drawSprites();
 
}

function keyPressed()
{
  if(keyCode===UP_ARROW)
    {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-70})
	}  
    
}

function keyPressed()
{
  if(keyCode===RIGHT_ARROW)
    {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:7,y:0})
	}  
    
}


