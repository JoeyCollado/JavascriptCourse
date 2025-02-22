// infinite loops = must avoid


//bad practice no condition at all
while(true){
    console.log('loop')
}
//

//good practice
for(let num = 0; num <= 100; num++){
    console.log('loop')
}