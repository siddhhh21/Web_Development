class Vehicle {

    constructor(name) {
        this.name = name;
    }

    engine() {
        console.log(this.name + " Engine Started");
    }

}

let bmw = new Vehicle("BMW");
bmw.engine();