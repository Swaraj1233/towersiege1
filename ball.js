class ball
{
	constructor(x,y,r)
	{
		var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2			
			}
		this.x=x;
		this.y=y;
		this.r=r;
          
        this.image = loadImage("polygon.png")
		this.body=Bodies.circle(x, y,r , options);
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			fill(128,128,128)
			image(this.image,0,0,this.r, this.r);
			pop()
			
	}

}