function snake(){
	this.position = createVector(0,0);
	this.velocity = createVector(px,0);
	this.body = [];
}

snake.prototype.display = function(){
	fill(255,255,255,150);
	for(var i = 0; i< this.body.length; i++){
		rect(this.body[i].x, this.body[i].y, px, px);
	}
	fill(255,200,0)
	rect(this.position.x, this.position.y, px, px);
}

snake.prototype.move = function(){
	if(count == this.body.length){
		for(var i = 0; i< this.body.length-1; i++){
			this.body[i] = this.body[i+1];
		}
	}
    this.body[count-1] = createVector(this.position.x,this.position.y);

	this.position.add(this.velocity);
}

snake.prototype.isDead = function(){
	for(var i =0; i< this.body.length; i++){
		var  bodypart =this. body[i];
		if((bodypart.x == this.position.x)&&(bodypart.y == this.position.y)){
			dead = true;
			break;
		}
	}
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
	if (n == 0){ this.velocity = createVector(0,-px);}
	else if (n ==1){this.velocity = createVector(0,px);}
	else if (n == 2){this.velocity = createVector(-px,0);}
	else if (n == 3){this.velocity = createVector(px,0);}
}