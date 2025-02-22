//getters and setters = allow us to define custom logic for reading and writing properties
//                      provide a powerful way to create virtual properties that we can read and set with addtional logic behind it
//                      can be used with object literals or classes in order to define getters and setters, this enables you to use a method as if it were a property, improve data encapsulation
const course = {
    name: "javascript for getters",
    duration: '3 hours',
    get details(){  //simply formats and return course information //we can access it as if it were a property rather than a method
        return `${this.name} is ${this.duration}`;
    },
    set details(value){  //allow us to modify the course details in a controlled manner
        let parts = value.split(' is ');
        this.name = parts[0];
        this.duration = parts[1];
    }
};

// console.log(`${course.name} is ${course.duration}`)
// console.log(course.details());
console.log(course.details);

course.details = "javascript pro is 10 hours";

console.log(course.details);
