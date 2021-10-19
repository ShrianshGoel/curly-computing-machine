class Paper{
    constructor(x, y, width, height) {
        var options = {
               		isStatic:false,
          resistution:0.1,
          density:1.3,
          friction:9
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
      this.img= loadImage("paper.png")
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        image(this.img,pos.x,pos.y,70,70)
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
      
        pop();
      }
}