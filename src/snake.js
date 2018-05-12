var snake
var dead = false;

function setup() {
	createCanvas(windowWidth, windowHeight);
	snake = new snake();
}

function draw() {
	frameRate(20);
	background(0);

	//To make Grid
	for (var x = 0; x < windowWidth; x += 20) {
		for (var y = 0; y < windowHeight; y += 20) {
			stroke(100);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
	if(dead == false){
		snake.display();
		snake.move();
		snake.isDead();
	}
	else{
		fill(255);
		textSize(60);
		text("Snake is Dead",20, 60);
	}
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		snake.velocity = createVector(0,-20);
	}
	else if (keyCode == DOWN_ARROW){
		snake.velocity = createVector(0,20);
	}
	else if (keyCode == LEFT_ARROW){
		snake.velocity = createVector(-20,0);
	}
	else if (keyCode == RIGHT_ARROW){
		snake.velocity = createVector(20,0);
	}
}

function snake(){
	this.position = createVector(0,0);
	this.velocity = createVector(20,0);
}

snake.prototype.display = function(){
	rect(this.position.x, this.position.y, 20, 20);
}
snake.prototype.move = function(){
	this.position.add(this.velocity);
}

snake.prototype.isDead = function(){
	if(this.position.x < 0 || this.position.x > width){dead = true;}
    if(this.position.y < 0 || this.position.y > height){dead = true;}
}
