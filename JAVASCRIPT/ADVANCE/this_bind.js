// Function
function greet(city, country) {
    console.log(
        `Hello, I'm ${this.name} from ${city}, ${country}`
    );
}

// Objects
const student1 = {
    name: "Sai"
};

const student2 = {
    name: "Rahul"
};

console.log("----- call() -----");

// Calls immediately
greet.call(student1, "Hyderabad", "India");
greet.call(student2, "Bangalore", "India");

console.log("\n----- apply() -----");

// Calls immediately
// Arguments passed as array
greet.apply(student1, ["Chennai", "India"]);
greet.apply(student2, ["Delhi", "India"]);

console.log("\n----- bind() -----");

// Does NOT execute immediately
const greetSai = greet.bind(student1, "Mumbai", "India");
const greetRahul = greet.bind(student2, "Pune", "India");

console.log("Functions are created...");

greetSai();
greetRahul();