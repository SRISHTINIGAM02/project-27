
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;

var roof1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   

	bobObject1 = new bob(400,400,50);
	bobObject2 = new bob(450,400,50);
    bobObject3 = new bob(350,400,50);
	bobObject4 = new bob(300,400,50);
	bobObject5 = new bob(500,400,50);
	roof1 = new roof(500,600,50,90);

   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();

  drawSprites();
  
}


