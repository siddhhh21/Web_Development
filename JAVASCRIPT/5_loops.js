// loops are used to do the same thing again and again

let ans = 0
let i = 1
while(i <= 5){
    ans += i
    i++
}
console.log(ans)

let sum = 0;
let j = 1

do{
    sum += j
    j++
}while(j>=5)
console.log(sum)

for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    
    
}