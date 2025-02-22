//primitive data types = number, string, boolean, null, undefined, symbol, BigInt

//object data types    = arrays, functions 

//primitive values are copied by their value (passed by heir copy)
//objects are copied by reference (passed by their reference)


//primitives = both variable are independent hence have different location adress
let a = 10
let b =  a;

a = 20;

console.log(a)
console.log(b)

//objects = here since they reference to the same object they have same location adress
let c = {value: 20};
let d = c;

c.value = 100

console.log(c);
console.log(d);