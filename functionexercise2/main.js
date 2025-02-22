function displayeven(array){
    for(const num of array){ //iterate over array
        if(num % 2 === 0){
            console.log(num)
        }
    }
}

displayeven([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])

function displayodd(array2){
    for(const num2 of array2){
        if(num2 % 2 != 0){
            console.log(num2)
        }
    }
}

displayodd([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])