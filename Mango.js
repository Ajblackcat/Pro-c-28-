class Mango{
    constructor(x, y, diametre) {
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1.0,
        }
        this.x=x;
		this.y=y;
        this.body = Bodies.circle(x, y, diametre , options);
        this.diametre=diametre;
        this.image = loadImage("Images/mango.png");
        World.add(world, this.body);
      }
      display()
      {
          var mangoPos=this.body.position;	
          push()
          translate(mangoPos.x, mangoPos.y);
          rotate(this.body.angle)
          fill(255,0,255)
          imageMode(CENTER);
          ellipseMode(CENTER);
          image(this.image, 0,0,this.diametre*2, this.diametre*2)
          pop()
   }
}