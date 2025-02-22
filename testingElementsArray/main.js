//.every() = test every methods of array pass the test implemented by the provided function, returns true if all element passed otherwise false

const num = [2,4,6,8,10];

//1st parameter current element of array, 2nd index where element is stored, third is orig array
const allEven = num.every(num => {
    return num % 2 === 0
}); 

console.log(allEven)





//.some() = checks if atleast 1 elemnent of array pass the test implemented by the provided function, returns true if atleast 1 passed

const num2 = [1,3,5,7,8,9]

//same parameter with every
const hasEven = num2.some(num2 => num2 % 2 === 0)

console.log(hasEven)
