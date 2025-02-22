// reduce = iterates over each element in the array applying a function we define and accumulates the result into single value

//
const numbers = [1,10,5,14];
let sum = 0; 

for(const num of numbers)
    sum += num

console.log(sum)

//better way, accumulator (accumulator = accumulated results of the previous function calls) and (current value = current array element being processed)
                                                      //callback function
const sum2 = numbers.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
}, 0 ) //intial value of accumulator

console.log(sum2)

//more simplified version
const sum3 = numbers.reduce((accumulator2, currentVal2) => accumulator2 + currentVal2);
console.log(sum3)