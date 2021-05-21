export class Particle{

    constructor(ctx,x,y,radius,color, tinkle, fade){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.originalRadius = radius;
        this.color = color;
        this.tinkle = tinkle;
        this.fade = fade;
        this.tinkleChange = -0.08;
    }

    update(){
        
        if(this.tinkle){

            this.radius += this.tinkleChange;
            console.log("update")
    
            if(this.radius < 0.08){
               
                this.tinkleChange = 0.08;
            }else if(this.radius > this.originalRadius){
                this.tinkleChange = -0.08;
            }
        }else if(this.drift){

            if(this.radius > 0){
                this.radius -= 0.1;
            }
      
        }
     
    }

    draw(){

        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.fill();
    }

}