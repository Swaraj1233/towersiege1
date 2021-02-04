class box
{
	constructor(x,y,w,h)
	{
		var options={
            
            restitution:0,
            friction:1,
            density:1.2		
			}
		this.x=x;
		this.y=y;
		this.w=w
        this.h=h
        this.Visiblity = 255;        
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

    }
    
	display()
	{
        
		
		fill("blue")
        if(this.body.speed < 3){
            var angle = this.body.angle;
            var pos= this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.w, this.h);
            pop();
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             
             pop();
           }
						                        
						
	}

}