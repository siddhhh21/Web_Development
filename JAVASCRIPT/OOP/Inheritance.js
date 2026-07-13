class Vehicle {

    constructor(name, tyres) {
        this.name = name;
        this.tyres = tyres;
    }

    engine() {
        console.log(this.name + " Engine Started");
    }

}

class Car extends Vehicle {

    constructor(name, tyres, color) {

        super(name, tyres);

        this.color = color;

    }

    display() {

        console.log(this.name);
        console.log(this.tyres);
        console.log(this.color);

    }

}

let bmw = new Car("BMW",4,"Black");

bmw.engine();
bmw.display();