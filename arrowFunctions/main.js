//arrow functions = better syntax, commonly used for callback function

const employees = [
    {
        id: 1,
        name: "joey"
    },
    {
        id: 2,
        name: "joey2"
    },
    {
        id: 3,
        name: "joey3"
    },
];

// const employee = employees.find(function(e){
//      return e.name === "joey"
// })

const employee = employees.find((e) => e.name === "joey");

// function add(num1, num2){ //function declaration, anonymouse function
//     return num1 + num2
// }

const add = (num1,num2) => { //arrow function declaration
    return num1 + num2
}

console.log(add(2,3))