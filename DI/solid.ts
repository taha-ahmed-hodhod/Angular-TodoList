class Engine{
    constructor(isPoetroled: boolean){

    }
}

class Car {
    constructor(public engine: Engine){
        
    }
}
const engine = new Engine(true);
const car1 = new Car(engine);