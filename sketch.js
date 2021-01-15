const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, stand1, stand2
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16
var polygon
var link

function preload() {
    polygon_img=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,590, 1200, 20);
    stand1 = new Ground(390, 265, 190, 20);
    
    block1 = new Block(330, 235, 30, 40);
    block2 = new Block(360, 235, 30, 40);
    block3 = new Block(390, 235, 30, 40);
    block4 = new Block(420, 235, 30, 40);
    block5 = new Block(450, 235, 30, 40);
    block6 = new Block(360, 195, 30, 40);
    block7 = new Block(390, 195, 30, 40);
    block8 = new Block(420, 195, 30, 40);
    block9 = new Block(390, 155, 30, 40);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);
// use this.polygon instead to body.
  // you can even use polygon (only polygon)
    link = new Launcher(polygon, {x:100, y:200});
}

function draw(){
    background(255);
    Engine.update(engine);

    ground.display();
    stand1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    link.display(); 

    //use image to display polygon
  
    imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    link.fly();
}