//factory functions = efficient way to create a new object
//                  = reduce code duplication


const dog = {
    name: "joey",
    age: 19,
    race: "nigga",
    eat: function(){ //anonymous function
        console.log("nom nom nom");
    },
    bark(){
        console.log("woof!");
    }
}

/*
const anotherdog = {
    name: "jake",
    age: 29,
    race: "nigga",
    eat: function(){ //anonymous function
        console.log("nom nom nom");
    },
    bark(){
        console.log("woof!");
    }
}
*/

function getDog(name, breed, age, weight){
    return{
        name,
        breed,
        age,
        weight,
        eat(){
            console.log("chomp");
        },
        bark(){
            console.log("Woof");
        }
    }
}

const anotherdog = getDog('jake', "nigga", 3, 60);
console.log(anotherdog);