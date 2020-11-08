class birdie {
    constructor(x,y){
        this.width = 50;
        this.height = 50;
        var options = {
            restitution: 0.5
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);        
    }

    display(){
        var pos = this.body.position
        push();
        pos.x=mouseX;
        pos.y=mouseY;
        stroke(0)
        fill(250,0,0)
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height); 
        pop(); 
    }
}