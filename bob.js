class BOB
{
    constructor(x, y, radius)
    {
       var options={
        'restitution':0.8,
        'friction':0,
        'density':0.5,
          isStatic:false
       }
       this.image = loadImage("8888.png");    
      
this.body = Bodies.circle(x, y, radius, options );
this.radius=radius
World.add(world, this.body);
}
display()
{
    
    
   
    stroke("yellow")
    strokeWeight("3")
    fill("pink")
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
}
}
