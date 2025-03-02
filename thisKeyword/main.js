//this = refers to the object that is currently being executed in the function or method
//       value depends on the context in which a function is called not declared
//to explicitly set the value of this keyword in function use = bind method = it creates a new function that when called has its this keyword set to provided value

const course = {
    name : "javascript for begginers",
    start(){
        console.log(this.name);
    }
}

course.start();

//
function startVid(){
    console.log(this)
}

startVid();

//
// const course2 = {
//     name: "es6 syntax",
//     start: () => {
//         console.log(this.name)
//     }
// }

// course2.start();

//bind method = it specifies this.name which is binded to this object
function introduce(language){
    console.log(this.name + ' teaches ' + language);
}

const instructor = {name: 'joey'};
const introduction = introduce.bind(instructor);
introduction('Javascript')