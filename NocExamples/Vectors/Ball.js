function Ball(){
  this.location = new createVector(width/2,height/2);
  this.velocity = new createVector(2.5,-2);
  this.move = function(){
    this.location.add(this.velocity);
    }
  this.bounce = function(){
    if((this.location.x>width-24) || (this.location.x<24)) this.velocity.x = this.velocity.x * -1;
    if((this.location.y>height-24) || (this.location.y<24)) this.velocity.y = this.velocity.y * -1;
    }
  this.display = function(){
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.location.x,this.location.y,48,48);
  }

}
