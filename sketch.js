const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
    ball1 = new ball(50,200,50);
    ground1 = new ground(650,550,1300,20);
    ground2 = new ground(390,270,190,30);
    box1 = new box(330,235,30,40);
    box2 = new box(360,235,30,40);
    box3 = new box(390,235,30,40);
    box4 = new box(420,235,30,40);
    box5 = new box(450,235,30,40);
    box6 = new box(360,195,30,40);
    box7 = new box(390,195,30,40);
    box8 = new box(420,195,30,40);
    box9 = new box(390,155,30,40);
    chain1 = new chain(ball1.body,{x:100,y:200});
    
	Engine.run(engine);

}

function draw() {
    background(230);
    Engine.update(engine);







ball1.display();
ground1.display();
ground2.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
chain1.display();
}
function mouseDragged(){
    
    
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
  
  }


