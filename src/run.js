var px = 40;
var snakeSpeed = 10;
var h;
var w;
var up,down,left,right; 

var s;
var f;
var dead = false;
var eaten = false;
var count = 0;
var laststate;

function setup() {
	createCanvas(windowWidth, windowHeight);
	h = windowHeight - (2*px) - ((windowHeight)%px);
	w = windowWidth - (windowWidth%px);
	s = new snake();
	f = new food();
	
	//Buttons 
	up = createButton('UP');
	up.position(w- 2.25*px,h + 0.25*px);
	up.mousePressed(upbutton);
	down = createButton('DOWN');
	down.position(w-2.5*px,h + 1.75*px);
	down.mousePressed(downbutton);
	left = createButton('LEFT');
	left.position(w-3.75*px,h + 1*px);
	left.mousePressed(leftbutton);
	right = createButton('RIGHT');
	right.position(w-1.25*px,h + 1*px);
	right.mousePressed(rightbutton);
	//Buttons done
}

function draw() {
	frameRate(snakeSpeed);
	background(10,10,25);

	//To make Grid
	for (var x = 0; x <= w; x += px) {
		for (var y = 0; y <= h; y +=px) {
			stroke(100);
			strokeWeight(1);
			line(x, 0, x, h);
			line(0, y, w, y);			
		}
	}
	stroke(255);
	strokeWeight(5);
	line(0, 0, 0, h);
	line(0, 0, w, 0);
	line(w, 0, w, h);
	line(0, h, w, h);
	// Grid over

	if(dead == false){
		f.display();

		s.move();
		s.isDead();
		s.eat(f);
		if(!dead){
			s.display();
		}
	}
	else{
		fill(255,0,0);
		strokeWeight(0);
		textSize(45);
		text("Sorry,Your Snake is Dead  :!",10, 45);
		f.display();
		s.display();
	}

	//if food is eaten create new food
	if (eaten == true){
		f = new food;
		eaten =false;
	}

	//Show score irrespectively
	fill(255);
	textSize(45);
	textFont('Dejavu Sans')
	strokeWeight(0);
	text("Your Score is : "+count,10,h + 50);
}


function keyPressed(){
	if (keyCode == UP_ARROW&& !(s.velocity.equals(0,px))){
		s.set(0);
	}
	else if (keyCode == DOWN_ARROW && !(s.velocity.equals(0,-px))){
		s.set(1);
	}
	else if (keyCode == LEFT_ARROW && !(s.velocity.equals(px,0))){
		s.set(2);
	}
	else if (keyCode == RIGHT_ARROW && !(s.velocity.equals(-px,0))){
		s.set(3);
	}
}


function roundOff(n){
	n.x = n.x - (n.x % px);
	n.y = n.y - (n.y % px);
	return createVector(n.x,n.y);
}
function upbutton(){
	if((s.velocity.equals(0,px))){ s.set(0);}
}
function downbutton(){
	if(!(s.velocity.equals(0,-px))){ s.set(1);}
}
function leftbutton(){
	if(!(s.velocity.equals(px,0))){ s.set(2);}
}
function rightbutton(){
	if(!(s.velocity.equals(-px,0))){ s.set(3);}
}
