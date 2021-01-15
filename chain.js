class Chain{
    constructor(bodyAA, bodyBB){
        var options = {
        bodyA: bodyAA.body,
        bodyB:bodyBB.body,
        stiffness:0.04,
        length:10,
    }

    this.chain= Matter.Constraint.create(options);
    World.add(world, this.chain);
    }
  //display();  
}