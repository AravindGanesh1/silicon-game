class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("assets/wall1.jpg");
        this.image1=loadImage("assets/wall2.jpg");
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
    imageMode(CENTER)
     if(this.width>=100){
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      }
      else{
     image(this.image1,this.body.position.x,this.body.position.y,this.width,this.height);
       }
        
    }
}