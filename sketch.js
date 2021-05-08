const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background('orange');
  textSize(37);
  
  drawSprites();
}