
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy,shot;

function preload(){
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1000,100,30);
	mango2=new mango(1100,30,30);
	mango3=new mango(1200,180,30);
	mango4=new mango(1050,190,30);
	mango5=new mango(1150,100,30);
    stoneObj=new StoneClass(190,335,50,50);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  boy = new Boy(200,190,200,300)
  launcherObject=new Shoot(stoneObj.body,{x:330,y:450})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!

  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneObj.display();
  groundObject.display();
  boy.display();
  launcherObject.display();

  detectollision(stoneObj,mango5)
  detectollision(stoneObj,mango1)
  detectollision(stoneObj,mango2)
  detectollision(stoneObj,mango3)
  detectollision(stoneObj,mango4)
}
function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  launcherObject.fly();
}
function detectollision(stoneObj,mango1){
 

  var distance=dist(stoneObj.body.position.x,stoneObj.body.position.y,mango1.body.position.x,mango1.body.position.y)
  if(distance<=mango1.r+stoneObj.r){
    Matter.Body.setStatic(mango1.body,false)
  }

  if(distance<=mango2.r+stoneObj.r){
    Matter.Body.setStatic(mango2.body,false)
  }

  if(distance<=mango3.r+stoneObj.r){
    Matter.Body.setStatic(mango3.body,false)
  }

  if(distance<=mango4.r+stoneObj.r){
    Matter.Body.setStatic(mango4.body,false)
  }

  if(distance<=mango5.r+stoneObj.r){
    Matter.Body.setStatic(mango5.body,false)
  }
}
function keyPressed(){
  if(keyCode ===32){
    Matter.Body.setPosition(stoneObj.body,{x:300,y:340});
    launcherObject.body.attach(stoneObj.body);
  }
}