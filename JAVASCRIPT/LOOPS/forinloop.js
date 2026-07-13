const student = {
    name: "John",
    age: 20,
    city: "Hyderabad"
};

for (let key in student) {
    console.log(key, student[key]);
}

let arr = [10, 20, 30];

for (let index in arr) {
    console.log(index, arr[index]);
}