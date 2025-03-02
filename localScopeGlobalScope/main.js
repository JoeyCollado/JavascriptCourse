//global scope = declared outside any function block, accessible to any part of the code
//local scope  = is only accessible inside its scope block, declared inside a function block

const name = "joey"; //global

{
    const name2 = "joey2"; //local
}

console.log(name); //will work
console.log(name2); //wont work


function greet(){
    const message = "hello world" 
    console.log(message);
}

greet(); //will work
console.log(message) //will not work