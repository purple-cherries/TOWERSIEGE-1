const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //layer1
    fill(58,109,206)
    Box1 = new Box(300,220,50,50)
    Box2 = new Box(350,220,50,50)
    Box3 = new Box(400,220,50,50)
    Box4 = new Box(450,220,50,50)
    Box5 = new Box(500,220,50,50)

    //layer2
    Box6 = new Box(325,170,50,50)
    Box7 = new Box(375,170,50,50)
    Box8 = new Box(425,170,50,50)
    Box9 = new Box(475,170,50,50)
    
    //layer3
    Box10 = new Box(350,120,50,50)
    Box11 = new Box(400,120,50,50)
    Box12 = new Box(450,120,50,50)

    //layer4
    Box13 = new Box(375,70,50,50)
    Box14 = new Box(425,70,50,50)

    //layer5
    Box15 = new Box(400,20,50,50)
    
    polygon = new shape(100,100)
    slingshot = new SlingShot(polygon.body,{x:150, y:250});
    base = new Ground(400,270,300,15)
}

function draw(){
    background(56,44,44)
    Engine.update(engine)

    //layer1
    fill(58,109,206)
    Box1.display();
    Box2.display();
    Box3.display();
    Box4.display();
    Box5.display();

    //layer2
    fill(180,79,208)
    Box6.display();
    Box7.display();
    Box8.display();
    Box9.display();

    //layer3
    fill(255,151,212)
    Box10.display();
    Box11.display();
    Box12.display();

    //layer4
    fill(250,167,68)
    Box13.display();
    Box14.display();

    //layer5
    fill(250,679,68)
    Box15.display();

    fill("brown")
    base.display();
    polygon.display();
    slingshot.display();
    
}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    slingshot.fly()
}