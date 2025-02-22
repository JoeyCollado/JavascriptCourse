//map() = cornerstone of array manipulation, transforming array elements
//        transforming data without altering original array coz it returns a new array

//1 (with numbers)
const num = [2,4,6,8,10]
const squared = num.map(num => num * num);
console.log(squared)

//2 (with strings)
const characters = ['a', 'b', 'c', 'd']
const upper = characters.map(char => char.toUpperCase());
console.log(upper)

//3 (with objects)
const employees = [
    { id: 1, name: 'joey', email: 'Joey@gmail.com'},
    { id: 2, name: 'joey2', email: 'Joey2@gmail.com'},
    { id: 3, name: 'joey3', email: 'Joey3@gmail.com'},
    { id: 4, name: 'joey4', email: 'Joey4@gmail.com'},
]

const updated = employees.map(employee => ({ //... (spread operator) = copies all the properties unto new array
    ...employee,
    email: employee.email.toLowerCase()
}));
console.log(updated)
    