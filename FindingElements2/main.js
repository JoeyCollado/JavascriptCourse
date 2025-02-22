// finding elements (references)

const employees = [
    {
        id: 1,
        name: "joey"
    },
    {
        id: 2,
        name: "joey2"
    },
    {
        id: 3,
        name: "joey3"
    },
];

// .include = wont work because each object have different memory addresses, instead use 
// .find() = find the first element it matches
// .findIndex() = instead of returning the object, it will return the index in which the object is found
// we will pass a predicate function to locate and object based on a property
// in javascript functions are objects
// callback function in this context is called predicate function = means it will return true or false
const employee = employees.find(function(e){
     return e.name === "joey"
})

console.log(employee)