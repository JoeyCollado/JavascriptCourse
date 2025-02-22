// let a = {value: 10};
// let b = a;

// b.value = 20;

// console.log(a);
// console.log(b);

//output of both is 20 since they reference the same object

let a = {value: 10};
let b = {};

Object.assign(b, a);

b.value = 20;

console.log(a);
console.log(b);

//output is 10 and 20 since they now reference different objects after cloning

let c = {value: 10};
let d = { ...c };

//Object.assign(b, a);

d.value = 20;

console.log(c);
console.log(d);

//other syntax to accomplish same thing