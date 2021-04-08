const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var box11, box21,box31,box31,box41

function setup(){
    var canvas = createCanvas(800,600);
    engine=Engine.create()
    world=engine.world


   // ground = new Ground(600,height,1200,20);
    platform = new Ground(550, 500, 500, 10);

    box1 = new Box(500,490,30,40);
    box2 = new Box(530,490,30,40);
    box3 = new Box(560,490,30,40);
    box4 = new Box(590,490,30,40);
    box5 = new Box(620,490,30,40);

    box6 = new Box(530,450,30,40);
    box7 = new Box(560,430,30,40);
    box8 = new Box(590,430,30,40);
    box9 = new Box(560,390,30,40);
    //box52 = new Box(620,530,30,40);
    
   // bird = new Bird(200,50);

  
}

function draw(){
   
    Engine.update(engine);
    background(255)
   
    platform.display();
    
    box1.display();
    box2.display()
    box3.display();
    box4.display();
    box6.display();
    box5.display();
    box7.display();
    box8.display();
    box9.display();
   // bird.display();
       
}

