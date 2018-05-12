var px = 40;
var snakeSpeed = 10;
var s;
var f;
var dead = false;
var eaten = false;
var count = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	s = new snake();
	f = new food();
}

function draw() {
	frameRate(snakeSpeed);
	background(0);

	//To make Grid
	for (var x = 0; x <= windowWidth; x += px) {
		for (var y = 0; y <= windowHeight; y +=px) {
			stroke(100);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
	if(dead == false){
		f.display();

		s.display();
		s.move();
		s.isDead();
		s.eat(f);
	}
	else{
		fill(255);
		textSize(60);
		text("Snake is Dead",20, 60);
		text("Your Score is : "+count,20,120);
	}

	if (eaten == true){
		f = new food;
		eaten =false;
	}
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		s.velocity = createVector(0,-px);
	}
	else if (keyCode == DOWN_ARROW){
		s.velocity = createVector(0,px);
	}
	else if (keyCode == LEFT_ARROW){
		s.velocity = createVector(-px,0);
	}
	else if (keyCode == RIGHT_ARROW){
		s.velocity = createVector(px,0);
	}
}

function snake(){
	this.position = createVector(0,0);
	this.velocity = createVector(px,0);
}
function food(){
	this.position = roundOff(createVector(random(0,windowWidth), random(0,windowHeight)));
}


snake.prototype.display = function(){
	fill(255);
	rect(this.position.x, this.position.y, px, px);
}
snake.prototype.move = function(){
	this.position.add(this.velocity);
}
snake.prototype.isDead = function(){
	if(this.position.x < 0 || this.position.x > width){dead = true;}
    else if(this.position.y < 0 || this.position.y > height){dead = true;}
}
snake.prototype.eat = function(f){
	if((this.position.x == f.position.x)&&(this.position.y == f.position.y)){
		eaten = true;
		count+=1;
	}
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