//hoisting = a process where the javascript engine automatically moves all function declarations to the top of their scope before code execution

add(4,2)

//functino declaration = will work
// function add(num1,num2){
//     console.log(num1 + num2);
// }

//function expression = won't work
let add = function(num1,num2){
    console.log(num1 + num2);
}
