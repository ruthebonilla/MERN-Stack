// Create a Ninja class

// add an attribute: name

// add an attribute: health

// add a attribute: speed - give a default value of 3

// add a attribute: strength - give a default value of 3

// add a method: sayName() - This should log that Ninja's name to the console

// add a method: showStats() - This should show the Ninja's name, strength, speed, and health.

// add a method: drinkSake() - This should add +10 Health to the Ninja

class Ninja{
    constructor(name, health=0){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`My name is ${this.name}`);
        return this
    }
    showStats(){
        console.log(`Name is ${this.name}`);
        console.log(`Strength is ${this.strength}`);
        console.log(`Speed is ${this.speed}`);
        console.log(`Health is ${this.health}`);
        return this
    }
    drinkSake(){
        console.log(`${this.name} drank sake`);
        this.health +=10;
        return this
    }
}

const ninja1 = new Ninja("jerry");
ninja1.sayName().showStats().drinkSake().showStats();
