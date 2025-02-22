//template literal (``) = allows us to use string interpolation

let firstname = 'joey'
let lastname = 'collado'

let fullname = firstname + ' ' + lastname //concatenation
let fullname2 = `${firstname} ${lastname}` //interpolation

console.log(fullname)
console.log(fullname2)