class Box {
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;
        var options = {
            restitution: 0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
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