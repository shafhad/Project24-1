class paper {
    constructor(x, y) {
        var options = {
            'restitution':0.2,
            'friction':1,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, 20, options);
        // this.radius = 20;
        // this.height = boxheight;
        World.add(world, this.body);
    }
    display() {
        // push();

        var pos = this.body.position;
        // translate(pos.x,pos.y);
        // rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y,20,20);
        // pop();
    }
}