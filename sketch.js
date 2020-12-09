
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBody;
var dustbin1,dustbin2,dustbin3;
var ground1;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 400);


	engine = Engine.create();
	world = engine.world;
   paperBody = new Paper(200,100,40);
   dustbin1 = new Dustbin(990, 370, 200, 20);
   dustbin2 = new Dustbin(900,312,20,100);
   dustbin3 = new Dustbin(1080,312,20,100);
   ground1 = new Ground(700,390,1400,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperBody.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(paperBody.body,paperBody.body.position,{x:10,y:2.5});
  }
}


