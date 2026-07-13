function greet(name) {
    console.log("Hello " + name);
}

greet("Sai");
greet("Ram");
greet("Krishna");
greet("Rahul");

function add(a, b) {
    return a + b;
}

let result = add(5, 10);

console.log(result);

// functions can also be stored in variables

function greett() {
    console.log("Hello");
}

let x = greett;

x();
x();
x();
x();