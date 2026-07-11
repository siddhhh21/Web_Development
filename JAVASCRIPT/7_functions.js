function printname(name){
    return `Hello ${name}!`
}

let name = printname('Siddhardha')
console.log(name)

const myname= (name, age) =>{
    return ` Helloo!\n My name is ${name}\n I'm ${age} years old`
}

console.log(myname("Siddhu", "19"))

const fun = () =>{
    console.log(this)
}
console.log(fun)

