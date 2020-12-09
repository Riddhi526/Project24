class Dustbin {
    constructor(x,y,w,h) {
     
     this.body=Bodies.rectangle(x,y,w,h,{isStatic:true});
     this.x=x;
     this.y=y;
     this.width=w;
     this.height=h;
     World.add(world,this.body);
    
    }

    display(){
        var dustbinpos = this.body.position;
        push()
        translate(dustbinpos.x,dustbinpos.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill(255,255,255);
        rect(0,0,this.width,this.height);

        pop()
    }
}