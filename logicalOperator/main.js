//logical operator = || or   - executes true even if only one of the two operands are true
//                   && and  - executes true if both operands are true
//                   !  not  - inverse the result of an expression
//                   ?? null - supply default value if operand is false or null


// ||
let hasReservation = true;
let acceptWalkins = false;

const hasAccess = hasReservation || acceptWalkins;

console.log(hasAccess);

// &&
let age = 16;
let car = true;

const candrive =  age>= 16 && car;
console.log(candrive)

// !
console.log(!false)

let isClosedSunday = true
const restaurantopen = !isClosedSunday
console.log(restaurantopen)

// ??
let a = null
const result = a ?? false; //gives default value if its null

console.log(result);

//logical operators = special symbols used in js to perform logical operations