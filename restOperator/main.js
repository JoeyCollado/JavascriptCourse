//rest operator = use to clone objects in js, allow us to copu properties of one object to another
//                

//object
let course = {
    name: "js for begginers",
    duration: "3 hours"
};
//cloning
let newCourse = {...course};
console.log(newCourse)
//cloning and modifying
let newCourseModified = {...course,
    name: "ts for begginers",
    duration: "6 hours"
};
console.log(newCourseModified)

// it allow us to gather a varying number of arguments into a single array parameter
function multiply(...args){
    return args.reduce((accumulator, currentVal) => accumulator * currentVal, 1) //1 is starting value for accumulator
}

console.log(multiply(1,2,3,4))


//another ex
function multiply2(multiplier, ...numbers){
    return numbers.map(number => number * multiplier); //number parameter will gather additional arguments passed into function
}
//first argument is multipler (2)
console.log(multiply2(2,4,6,8,10))

//rest operator = represent an indefinite number of arguments as an array, useful when working with functions that can accept a varying number of arguments