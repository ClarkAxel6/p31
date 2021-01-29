class Box{
    constructor(x,y,width,height){
        var options = {
            restitution: 0.8, 
            friction: 0.0,
            density: 0.5
          }
        
          this.body = Bodies.rectangle(x,y,width,height, options);
          this.width = width;
          this.height = height;
          World.add(world, this.body); 
          this.visibility = 255;
    }

    score(){
      if(this.visibility < 0 && this.visibility > - 105){
        console.log('score');
        score++;
      }
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        if(this.body.speed < 3){
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            //fill('green');
            rect(0, 0, this.width, this.height);
            pop();
          }
          else{
            World.remove(world, this.body);
            push();
            //tint(255, this.visibility);
            this.visibility = this.visibility - 2;
            pop();
          }
        //angleMode(RADIANS);
    }
}