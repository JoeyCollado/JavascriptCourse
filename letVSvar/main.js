//let = much preferred, block scope, a variable declared in let is only accessible to that block in which it was defined
//var = old way, function-scoped, only scoped to the function in which it is defined, not to any blocks within that functions, like loops and conditionals
//      lead to unexpected behavior and error to code


//let help us avoid global scope pollution, misusing variables and overwriting

// function display(){
//     for (var i = 0; i < 5; i++){
//         console.log(i);
//     }
//     console.log(i) //i can access it outside of the loop block, because it's not block scope
// }


function display(){
    for (let i = 0; i < 5; i++){
        console.log(i);
    }
    console.log(i) //won't access it
}

display();
