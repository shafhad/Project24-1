
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Paper;
var ground, box1, box2, box3;
var dustbin;
function preload() {

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Paper = new paper(150, 610, 1, { isStatic: false });
	ground = new Box(400, 640, 1800, 10);

	// dustbin = new Image(900, 600, 50, 50,{isStatic:true});
	box3 = new Box1(800, 560, 20, 100, { isStatic: true });
	box2 = new Box1(1000, 560, 20, 100, { isStatic: true });
	box1 = new Box1(900, 620, 220, 20, { isStatic: true });



	// console.log(paper.x,paper.y);
	Engine.run(engine);

}


function draw() {
	rectMode(RADIUS);
	background(0);

	// keyPressed();
	// dustbin.display();
	ground.display();
	Paper.display();
	box1.display();
	box2.display();
	box3.display();

	drawSprites();




}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(Paper.body, Paper.body.position, { x: 60, y: -100 })
	}
}



