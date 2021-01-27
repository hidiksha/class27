class Slingshot{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness: 0.04,
            length:20
        }
        this.Slingshot=Constraint.create(options);
        World.add(world,this.Slingshot);
    }
    display(){
        var pointa=this.Slingshot.bodyA.position;
        var pointb=this.Slingshot.bodyB.position;
        strokeWeight(6);
        line (pointa.x,pointa.y,pointb.x,pointb.y);
    }
}