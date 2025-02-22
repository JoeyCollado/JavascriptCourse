//function arguments = parameters that a function should adhere

// function multiply(num1,num2){
//     return num1 * num2
// }

// console.log(multiply(2,2))

function multiply(num1,num2){
    let product = 1;
    for(const num of arguments)
    product *= num

    return product
}

console.log(multiply(2,2,4))