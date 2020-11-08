class piggie {
    constructor(x,y){
        this.width = 40;
        this.height = 40;
        var options = {
            restitution: 0.5
        }
        this.body = Bodies.rectangle(x,y,40,40,options);
        World.add(world,this.body);        
    }

    display(){
        var pos = this.body.position
        push();
        stroke(0)
        fill(0,250,0)
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height); 
        pop(); 
    }
}