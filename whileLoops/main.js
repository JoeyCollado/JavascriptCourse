//while loop = same with for loop
// for loop = used when number of iterations is known
// while loop = used when number of iterations is not known

let numbers = [1,2,3,4,5,6,7];

//for loop
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}
//

//while loop
let i = 0;
while(i < numbers.length){
    console.log(numbers[i]);

    i++ 
}
//

let sum = 0;
while(true){
    console.log('Loop')
    sum++

    if(sum === 10){
        break;
    }
}