
const numbers = [1,2,3,4,5]
const numbers2 = [6,7,8,9,10]

//combine
const combineNum = numbers.concat(numbers2)
console.log(combineNum)

//slice = specify a start index and end index and return new array with that range
const firstSlice = combineNum.slice(0,4)
console.log(firstSlice)