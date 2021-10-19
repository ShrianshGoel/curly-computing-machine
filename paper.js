class Paper{
    constructor(x, y, radius) {
        var options = {
               		isStatic:false,
          resistution:0.1,
          density:1.3,
          friction:9
        }
        this.body = Bodies.circle(x, y, radius, options);
     this.radius = radius;
      this.img= loadImage("paper.png")

        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        image(this.img,pos.x,pos.y,this.radius,this.radius)
        translate(pos.x, pos.y);
        rotate(angle);

      
        pop();
      }
}
