let priceOf = 1.32;
let hasAmount = 5;

const canBuy = hasAmount >= priceOf;

if(canBuy){
    console.log("Enjoy your purchase");
}
else{
    console.log("get rekt");
}

//example 2

let hour = 14;

if(hour > 6 && hour < 12){
   console.log("breakfast");
}
else if(hour > 12 && hour <= 14){
   console.log("lunch");
}
else{
    console.log("dinner")
}