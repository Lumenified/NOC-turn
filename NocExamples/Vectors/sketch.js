var b;
function setup() {
	createCanvas(400, 300);
	b = new Ball();
}

function draw() {
	background(255);
	b.move();
	b.bounce();
	b.display();
}
