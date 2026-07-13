class Car {

    start() {
        this.#checkFuel();
        this.#startEngine();

        console.log("Car Started");
    }

    #checkFuel() {
        console.log("Fuel Checked");
    }

    #startEngine() {
        console.log("Engine Started");
    }

}

let car = new Car();

car.start();