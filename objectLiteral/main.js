//object literal
//objects = way to store key value pairs
//purpose = allow us to group together state and behavior

//state = represented by properties
//behavior = represented by functions within objects


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