class Chain{
    constructor(bodyA, pointB){
        var options1 = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 40,
        }
        this.pointB=pointB
        this.chain= Constraint.create(options1);
        World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA = null;
    }
    attach(body) {
        this.chain.bodyA = body;
    }
    
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;

        push();
        stroke("red");
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
        }
    }
    
}