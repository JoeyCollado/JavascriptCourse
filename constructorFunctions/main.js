//constructor functions = common way of achieving what factory function does
//                      = construct initial state of an object
//                      = we use pascal notation
//             this     = reference the object that's calling
//             this     = current object

function Dog(name, breed, age, weight){
    //this = {};
    
    //add properties to this
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weight = weight;

    this.eat = function(){
        console.log(this.name + 'Chomp');
    }
    this.bark = function(){
        console.log(this.name + 'Woof')
    }
}

const anotherDog = new Dog('Jake', 'relocians', 19, 58);

//constructor function purpose = define a function that will initialize an object with an initial state
//                               we would the name the object using pascal notation and use a noun for the name



console.log(anotherDog);