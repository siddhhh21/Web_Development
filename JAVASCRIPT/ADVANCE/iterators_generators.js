let arr = [10, 20, 30];

let iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function* numbers(){
    yield 10;
    yield 20;
    yield 30;
}

let gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());