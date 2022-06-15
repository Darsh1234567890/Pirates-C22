class Cannon{
    constructor(x, y, w, h, a){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.a = a;
        this.cannon_img = loadImage("assets/cannon.png");
        this.cannonBase_img = loadImage("assets/cannonBase.png")
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.cannon_img, this.x, this.y, this.w, this.h)
        pop();
        
        image(this.cannonBase_img, 70, 20, 200, 200);
        noFill();
    }

}