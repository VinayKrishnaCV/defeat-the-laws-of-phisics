class logss {
    constructor(x,y,length,angle){
        this.width = 20;
        this.height = length;
        var options = {
            restitution: 0.5,
            friction: 1,
        }
        this.body = Bodies.rectangle(x,y,20,length,options);
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body);        
    }

    display(){
        var pos = this.body.position
        push();
        stroke(0);
        fill(199,104,16);
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height); 
        pop(); 
    }
}