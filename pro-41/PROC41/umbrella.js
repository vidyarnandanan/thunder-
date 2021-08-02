class umbrella {
    constructor(x, y, r) {
      var options = {
        isStatic:true, 
        
          
      }
      this.r=r
      this.x=x
      this.y=y
      this.body = Matter.Bodies.circle(this.x, this.y, r, options);
      this.image = loadImage("WalkingFrame/walking_1.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      
      imageMode(CENTER);
      image(this.image,0,0,this.r*2,this.r*2);
      pop();
    }
  }