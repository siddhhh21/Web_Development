class Animal {

    sound() {
        console.log("Animal Sound");
    }

}

class Dog extends Animal {

    sound() {
        console.log("Bark");
    }

}

class Cat extends Animal {

    sound() {
        console.log("Meow");
    }

}

let dog = new Dog();

let cat = new Cat();

dog.sound();

cat.sound();