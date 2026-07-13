function increment(){
    let num = 0;
    return function(){
        num++
        return num
    }
}

let inc = increment()
console.log(inc())
console.log(inc())
console.log(inc())

function outer() {
    let name = "Sai";
    console.log("Outer function is executed");
    function inner() {
        console.log("Inner function is executed");
        console.log(name);
    }
    return inner;
}
outer();

const myFunction = outer();
myFunction();