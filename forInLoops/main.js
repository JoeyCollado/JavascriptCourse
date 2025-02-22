// for in loops = allow us to iterate over keys of a javascript object

const course = {
    name: "joey",
    age: 19,
    height: "8 feet"
};

/*
console.log(course.name) //access key value name of my course object
console.log(course['name']) 
console.log(course.age)
*/

// iterate over all keys of the object
for (const key in course){
    console.log(course[key])
}