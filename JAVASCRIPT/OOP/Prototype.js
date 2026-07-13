// Constructor Function
function Vehicle(name, tyres) {
    this.name = name;
    this.tyres = tyres;
}

// Prototype Method (Shared by all objects)
Vehicle.prototype.engine = function () {
    console.log(`${this.name} Engine Started`);
};

Vehicle.prototype.showDetails = function () {
    console.log(`Brand : ${this.name}`);
    console.log(`Tyres : ${this.tyres}`);
};

// Creating Objects
let bmw = new Vehicle("BMW", 4);
let audi = new Vehicle("Audi", 4);
let benz = new Vehicle("Benz", 4);

// Calling Methods
console.log("----------------");

bmw.engine();
bmw.showDetails();

console.log("----------------");

audi.engine();
audi.showDetails();

console.log("----------------");

benz.engine();
benz.showDetails();

console.log("----------------");