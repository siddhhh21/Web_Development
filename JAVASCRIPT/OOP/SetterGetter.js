class Student {

    constructor(name) {
        this._name = name;
    }

    set name(value) {

        if (value === "") {
            console.log("Name cannot be empty");
            return;
        }

        this._name = value;
    }

    get name() {
        return this._name;
    }
}

let s = new Student("Sai");

console.log(s.name);

s.name = "";

console.log(s.name);

s.name = "Rahul";

console.log(s.name);