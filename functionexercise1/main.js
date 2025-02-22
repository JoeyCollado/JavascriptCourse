function fizz(num){
   if(num % 3 === 0 && num % 5 === 0){
      return num = "FizzBuzz"
   }
   else if(num % 3 === 0){
      return num = "Fizz"
   }
   else if(num % 5 === 0)
      return num = "Buzz"
   else
      return num
}


console.log(fizz(601))