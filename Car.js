class Car {
    constructor(image,x,y,width,height,src) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.src = src;
    }
    drawCar(ctx){
        console.log('call')
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
    setSrc(src){
        this.src = src;
    }
    moveRight(){
        this.x += 20;
    }
    moveLeft(){
        this.x -= 20;
    }
    moveUp(){
        this.y -= 20;
    }
    moveDown(){
        this.y += 20;
    }
}
