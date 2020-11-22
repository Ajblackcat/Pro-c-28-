class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB;
        this.Launcher = Constraint.create(options);
        World.add(world, this.Launcher);
    }

    fly(){
        this.Launcher.bodyA=null;
    }

    Launch(bodyA){
        this.Launcher.bodyA=bodyA;
    }

    display(){
       
    }
    
}

