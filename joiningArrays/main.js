//transform array to string = use joint method
// const numbers = [1,2,3,4,5]
// const joinedNum = numbers.join(', ');
// console.log(joinedNum)

//split
// const coursename = 'javascript for begginers'
// const parts = coursename.split(' '); //peform split in every empty spaces
// console.log(parts)

//join
// const coursename = 'javascript for begginers'
// const parts = coursename.split(' '); //peform split in every empty spaces
// const urlSlug = parts.join('-')
// console.log(urlSlug)

//lowercase
// const coursename = 'Javascript For Begginers'
// const lowerCase = coursename.toLowerCase();
// const parts = coursename.split(' '); //peform split in every empty spaces
// const urlSlug = parts.join('-')
// console.log(lowerCase)

//method chaining
const coursename = 'Javascript For Begginers'

// const lowerCase = coursename.toLowerCase();
// const parts = coursename.split(' '); //peform split in every empty spaces

const parts = coursename.toLowerCase().split(' ')

const urlSlug = parts.join('-')
console.log(urlSlug)