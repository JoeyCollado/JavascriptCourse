//

let numbers = [1, 2, 3, 4, 5];
for (const elements of numbers) {
  console.log(elements);
}

const dog = {
  name: "joey",
  age: 19,
  color: "blue",
};
for (const key in dog) {
  console.log(dog[key]);
}

const keys = Object.keys(dog);
console.log(keys);

const values = Object.values(dog); //getting the properties of the object and storing it as an array
console.log(values);


const entries = Object.entries(dog); //key value pairs has been stored as an element in the array
console.log(entries)

//iterates over an array
for(const key of Object.keys(dog)){
    console.log(key);
}

for(const value of Object.values(dog)){ //output all the values
    console.log(value)
}

for(const entry of Object.entries(dog)){ //key value pairs displayed as an array
    console.log(entry)
}