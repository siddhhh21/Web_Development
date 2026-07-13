let cities = ["Hyderabad", "Vizag", "Kolkata"]

let favCity = cities[0]
console.log(favCity)

cities[3] = "Benguluru"
console.log(cities)

let deleted = cities.pop()
console.log(deleted)

let softcopy = cities
cities[3] = "Benguluru"
console.log()
console.log(softcopy)
console.log(cities)

let hardcopy = [...cities]
cities.pop()
console.log()
console.log(hardcopy)
console.log([...hardcopy])
console.log(cities)

let mixed = softcopy + hardcopy
console.log(mixed)
console.log(typeof mixed)

let mixed_concat = softcopy.concat(hardcopy)
console.log(mixed_concat)
console.log(typeof mixed_concat)

let city_check = mixed_concat.includes("Hyderabad")
console.log(city_check)

//array.shift
//array.unshift