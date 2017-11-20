import Box from "./Box";

let box = new Box(0, 0);
let y = 0;

const sketch = (p) => {

    p.setup = () => {
        p.createCanvas(600, 700);
        p.frameRate(60);
    }

    p.draw = () => {

        p.clear();
        p.background(255, 255, 200);

        box.draw(p);
    }

    p.mousePressed = () => {
        if( box.contains(p.mouseX, p.mouseY) ){
            box.delta = {
                dx: p.mouseX - box.x, 
                dy: p.mouseY - box.y
            }
        }
    }

    p.mouseDragged = () => {

        if( box.contains(p.mouseX, p.mouseY) ){
            box.position(
                p.mouseX - box.delta.dx, 
                p.mouseY - box.delta.dy
            );
        }
    }
    
    p.mouseReleased = () => {
        delete box.delta;
    }
}

export default sketch;