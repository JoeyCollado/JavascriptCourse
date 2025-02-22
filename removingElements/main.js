//
const numbers = [1,2,3,4,5]

const lastElement = numbers.pop();
console.log(lastElement)

const middleElement = numbers.splice(1,1);
console.log(middleElement)

const firstElement = numbers.shift();
console.log(firstElement)

//.pop() = remove element from the end
//.splice() = remove element from the middle
//.shift() = remove element from the beginning