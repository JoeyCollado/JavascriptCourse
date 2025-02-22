//break = breaks out of the loops of execution
//

//1 for loop
for(let i = 0; i < 10; i++){
   if(i === 5){
    break; //exits the loop when i is 5
   }
   console.log(i);
}

//2 while loop
let i = 0;
while(i < 10){
    if(i === 5){
        break;
    }
    console.log(i);
    i++
}

//3 do while loop
let j = 0;
do{
    if( i === 5){
        break;
    }
    console.log(i);
    i++
} while(i < 10); 

//4 for in loop
const obj = {a: 1, b: 2, c: 3};
for(let key in obj){
    if(key === 'b'){
        break;
    }
    console.log(obj [key]);
}

//for of loop
const arr = [1,2,3,4,5];
for(let element of arr){
    if(element === 3){
        break;
    }
    console.log(element);
}


//continue = if you want to skip current iteration of the loop to proceed to next iteration

//for loop
for(let j = 0; j < 10; j++){
    if(j % 2 === 0){
        continue;
    }
    console.log(j)
}

//while loop
let k = 0;
while (k < 10){
    i++
    if(k % 2 === 0){
        continue;
    }
    console.log(k)
}

//do while loop
let l = 0;
do{
    l++;
    if(l % 2 === 0){
        continue;
    }
    console.log(l);
} while(l < 10);

//for in loop = for objects
const obj2 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
for(let key in obj2){
    if(obj2[key] % 2 === 0){
        continue;
    }
    console.log(obj2[key])
}

//for of loop = for arrays of strings and objects etc
const arr2 = [1,2,3,4,5];
for(let element of arr2){
    if(element2 % 2 === 0){
        continue;
    }
    console.log(element2);
} 