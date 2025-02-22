// array = data structrue, provdes a collection of elements


//methods

//adding elements
const numbers = [5,4,3,2,1];

// numbers.push(7) //add to last element
//numbers.unshift(42, 32); //add to first element
numbers.splice(1, 0, 24, 23) //add to middle, 1st argument where we want to add, second is what we want to delete, 3rd and 4th are the datas
console.log(numbers);