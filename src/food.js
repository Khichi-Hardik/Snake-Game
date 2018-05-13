function food(){
	this.position = roundOff(createVector(random(0,w-px), random(0,h-px)));
}

food.prototype.display = function(){
	fill(random(700,220),random(70,220),random(70,220));
	rect(this.position.x, this.position.y, px, px);
}
