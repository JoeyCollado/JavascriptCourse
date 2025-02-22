//create a program in which we will output random numbre from the range of 10-20

let min = 1;
let max = 100;

const randomNum = Math.floor((Math.random() * (max - min) + min));

console.log(randomNum)