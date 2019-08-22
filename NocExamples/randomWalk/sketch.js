function Walker() {
	this.x = width/2;
	this.y = height/2;
	this.render = function(){
		stroke(0);
		point(this.x,this.y);
	}
	this.step = function(){
		const choice = random(1);
		if (choice < 0.25 ) this.x++;
		else if (choice >=0.25 && choice < 0.5) this.x--;
		else if (choice >=0.5 && choice < 0.75) this.y++;
		else if (choice >=0.75 && choice < 1) this.y--;
		this.x = constrain(this.x,0,width-1);
		this.y = constrain(this.y,0,height-1);
	}
}
var w;

function setup() {
	createCanvas(800,600);
	w = new Walker();
	background(255);
}

function draw() {
	w.step();
	w.render();
}
