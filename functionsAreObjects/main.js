/*
function add(num1, num2){
    return num1 + num2;
}

const n = add;

console.log(n(3,3))
*/

// function Programmer(name){ //this constructor function is an object in memory
//     this.name = name;
//     this.writeCode = function(){
//         console.log("coding")
//     }
// }

// console.log(Programmer.length)
// console.log(Programmer.constructor)

const Programmer = new Function('name', `
    this.name = name;
    this.writeCode = function(){
    console.log("coding")
    }
`);

const newProgrammer = new Programmer('joey');
newProgrammer.writeCode();


//inherently = functions are objects in js meaning they have properties and methods

