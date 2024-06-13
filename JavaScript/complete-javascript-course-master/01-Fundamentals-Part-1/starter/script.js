/* Lecture 1
let js = "amazing";

console.log(40 + 8 + 23 - 10);

let PI = 3.1415; // Constants are normally uppercase

// Values are either Objects or Primitive Data Types
//Primitive Data Types

let age = 23; // This is a number type
let firstName = 'Alex' // This is a string type
let fullAge = true; // This is a boolean data type
let children; // This is an undefined type, it's the type of values that have not been defined.
// Null is also a data type, essentially means no object exists
// Symbol (ES2015) - This value is unique and cannot be changed
// BigInt (ES2020) - For numbers that are larger than Int

// JS has dynamic typing, where it automatically determines the type of the value that's stored in the variable. E.g. Variable x can first be an int and then be changed to a string.
*/

// The let keyword is used for variables that can change in the future.
// The const keyword is used for variables that cannot be changed. This means you also cannot declare empty const variables.
// The var keyword is the old way of assigning variables and works like let. However, below the surface they work differently.

// --- Template Literals ---
/* const firstName = "Alex";
const year = "2024";
const birthYear = "1995";
const job = "Software Engineer";
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(`You can use
  template literals
  to use newlines easily.`
)
 */

/* 
Type conversion is when we manually change from one type to another.
Type coercion is when JS automatically changes the type behind the scenes.
E.g. 
const inputYear = '1991';
console.log(inputYear + 18); == 199118
console.log(Number(inputYear) + 18);

JS can only convert to a number, string or boolean.
*/
/*
5 falsy values: 0, '', undefined, null, NaN - Values that will be converted to false when converted to a boolean

const money = 0;
if (money) {
  console.log("Don't spend it all at once!");
  } else {
  console.log("You should get a job!"); //This is printed out because 0 is converted to false as it's a falsy value
}
*/

/* const day = "monday";

switch (day) {
  case "monday":
    console.log("Eugh it's Monday!");
    console.log("Plan course structure");
    break;
  case "tuesday":
    console.log("Eugh it's Tuesday!");
    break;
  case "wednesday":
  case "thursday":
    console.log("It's the middle of the week, it's Wednesday or Thursday!");
    break;
  case "friday":
    console.log("It's Friday!");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("Not a valid day!");
} */
