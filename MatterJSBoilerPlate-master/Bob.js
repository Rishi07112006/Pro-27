class Bob{
    constructor(x,y,r) {
  var options = {
      isStatic:false,
      restitution:1.1,
      friction:0.5,
      density:0.5
    }
    this.x = x;
    this.y = y;
    this.r = r;
    //this.image = loadImage("sprites/paper.png");
    this.body = Bodies.circle(this.x,this.y,this.r/2,options);
    World.add(world,this.body);
    }
    display(){
      var bobPos = this.body.position;
      push();
      translate(bobPos.x,bobPos.y);
      rectMode(CENTER);
      fill("blue");
      strokeWeight(3);
      circle(0,0,this.r);
      //image(this.image, 0, 0, this.r, this.r);
      pop();
    }
    
  }