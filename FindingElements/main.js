//check if array has a primitive value (.indexOf()), (.lastIndexOf()) (.includes())
//Findng Elements(primitives)

const numbers = [1,2,3,4,5,6]

const indexOfThree = numbers.indexOf(3)
console.log(numbers[indexOfThree])

const lastIndexOfThree = numbers.lastIndexOf(3)
console.log(lastIndexOfThree)

const indexOfTen = numbers.lastIndexOf(10);
// console.log(indexOfTen)
// console.log(numbers[indexOfTen])

if(indexOfTen === -1){
    console.log("not found");
}

if(numbers.includes(10)){
    console.log("found")
}