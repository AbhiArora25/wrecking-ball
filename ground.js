class ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,height,width,options);
        this.width=width;
        this.height=height;
    }

    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill('brown');
        rect(pos.x,pos.y,this.width,this.height);
    }
};