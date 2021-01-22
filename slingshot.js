class Sling{
    constructor(bodyAA, pointBB){
        var options = {
        bodyA: bodyAA,
        pointB:pointBB,
        stiffness:0.04,
        length:10,
    }

    this.sling= Matter.Constraint.create(options);
    World.add(world, this.sling);
    this.pointB=pointBB
    }
  display(){
    var pointA=this.sling.bodyA.position;
    var pointB=this.sling.pointB;
    
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }  
}