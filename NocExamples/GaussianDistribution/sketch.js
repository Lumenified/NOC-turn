function setup() {
	createCanvas(640, 360);
	background(255);
}

function draw() {
	let xloc = randomGaussian();
	let sd = 60;
	let mean = width/2;
	xloc = (xloc * sd) + mean;

	fill(0,10);
	noStroke();
	ellipse(xloc, height/2,16,16);
}
