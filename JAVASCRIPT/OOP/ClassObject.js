class Vehicle {

    constructor(name, tyres) {
        this.name = name;
        this.tyres = tyres;
    }

    engine() {
        console.log(this.name + " Engine Started");
    }

}

let bmw = new Vehicle("BMW", 4);
bmw.engine();