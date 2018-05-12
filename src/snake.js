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

function setup() {
	createCanvas(windowWidth, windowHeight);
	h = windowHeight - (2*px) - ((windowHeight)%px);
	w = windowWidth - (windowWidth%px);
	s = new snake();
	f = new food();
	
	//Buttons 
	up = createButton('UP');
	up.position(w- 2.25*px,h + 0.5*px);
	up.mousePressed(upbutton);
	down = createButton('DOWN');
	down.position(w-2.5*px,h + 2*px);
	down.mousePressed(downbutton);
	left = createButton('LEFT');
	left.position(w-3.75*px,h + 1.25*px);
	left.mousePressed(leftbutton);
	right = createButton('RIGHT');
	right.position(w-1.25*px,h + 1.25*px);
	right.mousePressed(rightbutton);
	//Buttons done
}

function draw() {
	frameRate(snakeSpeed);
	background(0);

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
	strokeWeight(2);
	line(0, 0, 0, h);
	line(0, 0, w, 0);
	line(w, 0, w, h);
	line(0, h, w, h);
	// Grid over

	if(dead == false){
		f.display();

		s.display();
		s.move();
		s.isDead();
		s.eat(f);
	}
	else{
		fill(255,0,0);
		textSize(45);
		text("Snake is Dead",10, 45);
	}

	if (eaten == true){
		f = new food;
		eaten =false;
	}

	fill(255);
	textSize(45);
	text("Your Score is : "+count,10,h + 50);
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		s.set(0);
	}
	else if (keyCode == DOWN_ARROW){
		s.set(1);
	}
	else if (keyCode == LEFT_ARROW){
		s.set(2);
	}
	else if (keyCode == RIGHT_ARROW){
		s.set(3);
	}
}

function snake(){
	this.position = createVector(0,0);
	this.velocity = createVector(px,0);
}
function food(){
	this.position = roundOff(createVector(random(0,w-px), random(0,h-px)));
}


snake.prototype.display = function(){
	fill(255);
	rect(this.position.x, this.position.y, px, px);
}
snake.prototype.move = function(){
	this.position.add(this.velocity);
}
snake.prototype.isDead = function(){
	if(this.position.x < 0 || this.position.x > w-px){dead = true;}
    else if(this.position.y < 0 || this.position.y > h-px){dead = true;}
}
snake.prototype.eat = function(f){
	if((this.position.x == f.position.x)&&(this.position.y == f.position.y)){
		eaten = true;
		count+=1;
	}
}
snake.prototype.set =function(n){
	if (n == 0){ s.velocity = createVector(0,-px);}
	else if (n ==1){s.velocity = createVector(0,px);}
	else if (n == 2){s.velocity = createVector(-px,0);}
	else if (n == 3){s.velocity = createVector(px,0);}
}


food.prototype.display = function(){
	fill(255,255,0);
	rect(this.position.x, this.position.y, px, px);
}


function roundOff(n){
	n.x = n.x - (n.x % px);
	n.y = n.y - (n.y % px);
	return createVector(n.x,n.y);
}
function upbutton(){
	{ s.set(0);}
}
function downbutton(){
	{ s.set(1);}
}
function leftbutton(){
	{ s.set(2);}
}
function rightbutton(){
	{ s.set(3);}
}
