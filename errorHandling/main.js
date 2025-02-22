// error handling try and catch block = allow us to manage error gracefully, ensuring our programs can handle unexpected behaviours

const course = {
    name: "javascript for getters",
    duration: '3 hours',
    get details(){  //simply formats and return course information //we can access it as if it were a property rather than a method
        return `${this.name} is ${this.duration}`;
    },
    set details(value){  //allow us to modify the course details in a controlled manner

        if(typeof value != 'string') {
            throw new Error(`Value ${value} is not a string`)
        }

        let parts = value.split(' is ');
        this.name = parts[0];
        this.duration = parts[1];
    }
};

// console.log(`${course.name} is ${course.duration}`)
// console.log(course.details());
// console.log(course.details);

// course.details = "javascript pro is 10 hours";

// console.log(course.details);

try{
    course.details = 42;
}catch(e){ //allow us to catch exception without terminating the program
    console.log(`Caught an error: ${e.message}`)
}

