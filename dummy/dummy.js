// // //
// // function message(){
// //     alert("WELCOME TO MY WEBSITE") //WELCOME TO MY WEBSITE
// // }

// // message()

// // let name = "Joey Aibert U. Collado" //NAME
// // let section = "OLSA222E004" //SECTION
// // let course = "BSCS" //COURSE

// // console.log(name)
// // console.log(section)
// // console.log(course)

// // document.write("THIS IS A SAMPLE JAVASCRIPT") //THIS IS A SAMPLE JAVASCRIPT

// //chapter 5
// // let   = recommended, block scoped
// // const = can't be changed,
// // var   = old, function scoped

// //Ecmascript or ES2015

// //data types

// //string
// // let str = "hello"
// // let str2 = 'hello'
// // let str3 = `hello`

// //number
// // let int  = 123456;
// // let float = 43.2;

// //undefined = no declaration

// //null = there's value but it's unknown
// // let x = null

// // let str = "joey"
// // let num = 1
// // console.log(typeof str)
// // console.log(typeof num)

// //data types

// // let str = "joey";
// // let num = 42;
// // let bool = 14 > 10;
// // let x = null
// // let y = undefined

// // console.log(typeof str)
// // console.log(typeof num)
// // console.log(typeof bool)
// // console.log(typeof x)
// // console.log(typeof y)

// //chap 6 if else, alert

// //alert = pop up message box
// //confirm = ask user
// //prompt = input answer
// //if, else, else if
// //switch case
// //if = condition
// //else if = more condition
// //else = default
// //switch = use to handle more condition

// // let message = prompt("Enter your name")
// // alert(message)

// // let confirm = confirm("Do you want to leave?")
// // alert(confirm)

// //
// // let age = prompt("how old are you", 18)

// // if(age < 18){
// //     alert('you are underage')
// // }
// // else if(age >= 18){
// //     alert("you are old enough")
// // }
// // else{
// //     alert("enter an integer")
// // }

// //
// /*
// let food = prompt("what food do you want to eat?")

// if(food == "burger"){
//    alert("your order burger has been received")
// }
// else if(food == "pizza"){
//     alert("your order pizza has been received")
// }
// else if(food == "donut"){
//     alert("your order donut has been received")
// }
// else if(food == "taco"){
//     alert("your order taco has been received")
// }
// else{
//     alert("food not available")
// }
// */

// //switch
// // let day = 2;

// // switch(day){
// //     case 1:
// //         document.write("monday")
// //     break;

// //     case 2:
// //         document.write("tuesday")
// //     break;

// //     case 3:
// //         document.write("wednesday")
// //     break;

// //     case 4:
// //         document.write("thursday")
// //     break;

// //     case 5:
// //         document.write("friday")
// //     break;

// //     case 6:
// //         document.write("saturday")
// //     break;

// //     case 7:
// //         document.write("sunday")
// //     break;

// //     default:
// //         document.write("not a day")
// // }

// //promt = what javascript version LET and CONST recommend
// //if else, else if statement, and switch
// //alert
// //confirm

// // let msg = confirm('are you sure you want to leave')

// //
// /*
// let version = prompt("What javascript version LET and CONST recommend");

// if (version == "ES2015") {
//   alert("your answer is correct");
// } else if (version == "Ecmascript") {
//   alert("your answer is still correct");
// } else {
//   alert("your answer is incorrect");
// }

// let confirmMessage = prompt("Are you sure you want to leave?")
// if(confirmMessage == "yes"){
//     alert("goodbye")
// }

// let day = 2;

// switch (day) {
//   case 1:
//     document.write("monday");
//     break;

//   case 2:
//     document.write("tuesday");
//     break;

//   case 3:
//     document.write("wednesday");
//     break;

//   case 4:
//     document.write("thursday");
//     break;

//   case 5:
//     document.write("friday");
//     break;

//   case 6:
//     document.write("saturday");
//     break;

//   case 7:
//     document.write("sunday");
//     break;

//   default:
//     document.write("not a day");
// }
// */
// //arrays, while loop, for loop


// // ARRAYS - A VARIABLE THAT CAN STORE MULTIPLE VALUES. THE VALUES INSIDE AN ARRAY CALLED AN ELEMENT
// // THE NUMBER WHERE AN ELEMENT IS LOCATED IS CALLED AN INDEX
// // YOU CAN CREATE ANY ARRAY WITH DIFFERENT DATA TYPES
// // ARRAYS OF STRINGS
// // ARRAY OF NUMBERS
// // ARRAY OF MIXDATA TYPES
// // EMPTY ARRAY
// // ARRAY LENGTH = start sa 1
// // ARRAY INDEX = start sa 0
// // ARRAY UPDATE VARIABLE/IDENTIFIER[INDEX] = "NEW ELEMENT";

// // WHILE LOOP - USED TO EXECUTE A BLOCK OF CODES, WHILE THE CONDITION IS MET/TRUE
// // FOR LOOP - USED TO EXECUTE A BLOCK OF CODES, WHILE THE CONDITION IS MET/TRUE

// // WHILE() {}
// // FOR (DECLARATION OF VARIABLES; OPERATION; INCREMENT) {OUTPUT};

// //length starts at 1
// //index at 0

// /*
// let mix = [1, "string", true, 3.14, 5, 6, 7, 8,9,1,2,2]

// let numbers = [1,2,3,4,5];
// alert(`the array contains: ${numbers}`)
// console.log(`the element at the index of the array is: ${numbers[0]}`) //find element at index
// console.log(`the length of the array is: ${numbers.length}`)

// //update array element
// mix[2] = "changed element"
// console.log(mix)

// console.log(mix[mix.length - 4]) //since index starts at 0, so by decrementing 1 we get last index element 3.14, length counts starts at 1
// */





// //while loop = used to execute a code of block while the condition is true
// //let num = [3,2,3,4]
// //let i = 0
// // while(i < 5){
// //    console.log("hello")
// //    i++
// // }


// //while(num[i] !== undefined){
// //  console.log(num[i])
// //  num++
// //}


// let names = ["tan", "marlon", "joey", "dayrit", "james"];
// let si = 0;
// /*
// while (names[i] !== undefined) { //unknown iteration, will execute as long as the condition is true
//   console.log(names[i]);
//   i++;
// }
// */
// /*
// for(let j = 0; j < 5; j++){ //known iteration, alam yung haganan (loop)
//   console.log(names[j])
// }
// */

// //reverse call out (reverse loop)
// /*
// for(let i = names.length-1; i >= 0; i--){ //known iteration, alam yung haganan
//   console.log(names[i])
// }
// */


// //for in, irereturn ni in ang value sa variable, easiest way to iterate through an array
// /*
// for(let x in names){
//   console.log(x) //prints the index
// }
// */
// /*
// for(let x in names){
//   console.log(names[x]) //prints the index
// }
// */
// //for in
// // for(let x in names){
// //   console.log(x) //prints the index
// // }

// // //for of
// // for(let y of names){
// //   console.log(y) //prints the element
// // }

//
//document object model (DOM) = structure of document 
//document = webpage 
//root element = html

