function multiplyBy(x) {

    return function(y) {
        return x * y;
    };

}

const double = multiplyBy(2);

console.log(double(5));
console.log(double(10));

// another example of higher order function

function studentDashboard() {
    console.log("Opening Student Dashboard...");
}

function facultyDashboard() {
    console.log("Opening Faculty Dashboard...");
}

function adminDashboard() {
    console.log("Opening Admin Dashboard...");
}

function login(task) {
    console.log("Authentication Successful");
    task();
}

login(studentDashboard);
login(facultyDashboard);
login(adminDashboard);

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function calculator(operation, a, b) {
    console.log("Calculating...");
    return operation(a, b);
}

console.log(calculator(add, 2, 3));
console.log(calculator(sub, 2, 3));