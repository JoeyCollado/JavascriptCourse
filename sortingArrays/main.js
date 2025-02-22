//.sort() = allow us to sort array elements (Default behavior = ascending order)
// let characters = ['c', 'd', 'b', 'a']
// characters.sort()
// console.log(characters)

//revese
// let characters = ['c', 'd', 'b', 'a']
// characters.reverse()
// console.log(characters)

//if sorting array of objects, we need to provide a callback function to the sort method
let employees = [
    {
        id: 1,
        name: "Joey"             //a
    },
    {                            // in the context of a and b we're always comparing the values (name property in this case) that are next to each other to sort them
        id: 2,
        name: "Foey2"            //b
    },
    {
        id: 3,
        name: "Woey3"
    },
    {
        id: 4,
        name: "Qoey4"
    },
]
employees.sort((a, b) => {     //functino to sort objects in array, two parameters a, b represented two objects to compare, we will use these object to compare their properties (in this case name)
    const lowecaseA = a.name.toLowerCase();
    const lowecaseB = b.name.toLowerCase();

    if(lowecaseA < lowecaseB) return -1; // b comes after a 
    if(lowecaseA > lowecaseB) return 1; // a comes after b
    return 0 //if equal return 0
}) 
console.log(employees)

