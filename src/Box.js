
export default class Box {

    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.width = (w) ? w : 200;
        this.height = (h) ? h : 200;
    }

    position(x, y) {
        this.x = x;
        this.y = y;
    }

    contains(x, y) {

        let inX = x >= this.x && x <= (this.x + this.width);
        let inY = y >= this.y && y <= (this.y + this.height);

        return inX && inY;
    }

    draw(p){
        
        p.strokeWeight(1);
        p.stroke(200, 200, 200);
        p.fill(255, 255, 255);
        p.rect(this.x, this.y, this.width, this.height);
    }
}