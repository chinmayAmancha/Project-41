class Drops {
    constructor() {
        this.x;
        this.y;
    

        this.body = Bodies.Circle();
    }
    update(){
        if(this.rain.position.y > displayHeight){

            Matter.Body.setPosition(this.drops, {x:random(0, 341.5), y:random(0, 341.5)})
        }
    }

    ellipse() {

    }
}