//filter() = used to go through an array and extract elements that meet specific condition returning a new array comprised of those values

//ex1
const num = [1,2,3,4,5,6]
const even = num.filter(num => num % 2 === 0);
console.log(even)

//ex2
const employee = [
    {
        id: 1, name: "joey", role: "developer"
    },
    {
        id: 2, name: "joey2", role: "designer"
    },
    {
        id: 3, name: "joey3", role: "teacher"
    },
    {
        id: 4, name: "joey4", role: "police"
    },
]

const developers = employee.filter(employee => employee.role === "developer");
console.log(developers)