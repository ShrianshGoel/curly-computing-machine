
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var paper
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,690,width,20);
	dustbinObj=new dustbin(1200,690);
paper=new Paper(200,350,70,70)
  
	Engine.run(engine);
  
}
function keyPressed(){
  if(keyWentUp(UP_ARROW)){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:27.50,y:-35})
  }
}

function draw() {
  rectMode(CENTER);
  	Engine.update(engine);
  background(230);
 keyPressed()

  groundObject.display();
  dustbinObj.display();
paper.display()
    dustbinObj.display();
}

