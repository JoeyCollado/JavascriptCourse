//Objects are dynamic = we can either remove or add properties or methods at any time 

const person ={
    name: "joey"
}

person.favoriteFood = "Pizza";  //added property on the fly
person.age = 19;  //added property on the fly

delete person.age; //deleted property on the fly

person.eat = function(){
   console.log("eat");
}

person.eat();
console.log(person)