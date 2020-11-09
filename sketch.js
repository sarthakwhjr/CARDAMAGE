const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var myengine, myworld,ground,ball;

function setup() 
{
  createCanvas(400,400);
  myengine= Engine.create();
  myworld= myengine.world;
  
var ground_options={ isStatic:true}
var ball_options={ restitution:1}
ground= Bodies.rectangle(200,390,200,20, ground_options);
ball= Bodies.circle(200,100,20,ball_options);
World.add(myworld,ground);
World.add(myworld,ball);
//console.log(myobject);
}

function draw() {
  background(0);
  Engine.update(myengine);
  rectMode(CENTER);  
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);
}