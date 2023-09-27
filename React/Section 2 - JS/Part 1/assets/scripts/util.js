export let apiKey = "ImAnApiKey";

export default "default"; //This is the default value that can be imported from this file. It's done as such: import whateverNameYouWant from "./util.js"; This will if a default value is set and no variable has the name, will import the default value to that name.

//If you had multiple name exports, you could import all of them like this: import * as utils from "util.js" - This brings all things from util.js into a JS object where you can access them like this: util.apiKey

() => {
    //This is an anonymous function. It's useful when a function isn't needing to be named

}

let user = {
    name: 'Alex',
    age: 27,
    greet() {
        console.log("Hello");
        console.log(this.age);
    }
};

console.log(user.name) //you can access values in an object like this ^

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hi")
    }
}

let user1 = new User("Alex", 27);

let hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[1])

hobbies.push("Working");

hobbies.findIndex((item) => {
    return item === 'Sports';
})

editedHobbies = hobbies.map((item) => item + "!"); //This map method lets you map the items in the array into another one

editedHobbies2 = hobbies.map((item) => ({text: item})); //This creates a new array where every item in the new array is a JS object with this key value pair

let userNameData = ["Max", "Jones"];

let [firstName, lastName] = ["Max", "Jones"]; //This creates variables based on the variable names on the left and value on the right.

let users = {
    name: "Max",
    age: 35
};


let {name, age} = { //could do name: userName to give it an alias This then creates two variables, userName and age with the values from the object
    name: "Max",
    age: 35
};

/*
The destructuring syntax explained in the previous lecture can also be used in function parameter lists.

For example, if a function accepts a parameter that will contain an object it can be destructured to "pull out" the object properties and make them available as locally scoped variables (i.e., variables only available inside the function body).

Here's an example:

function storeOrder(order) {
  localStorage.setItem('id', order.id);
  localStorage.setItem('currency', order.currency);
}
Instead of accessing the order properties via the "dot notation" inside the storeOrder function body, you could use destructuring like this:

function storeOrder({id, currency}) { // destructuring
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
}
The destructuring syntax is the same as taught in the previous lecture - just without creating a constant or variable manually.

Instead, id and currency are "pulled out" of the incoming object (i.e., the object passed as an argument to storeOrder).

It's very important to understand, that storeOrder still only takes one parameter in this example! It does not accept two parameters. Instead, it's one single parameter - an object which then just is destructured internally.

The function would still be called like this:

storeOrder({id: 5, currency: 'USD', amount: 15.99}); // one argument / value! 
*/

let newHobbies = ["Running"];

let mergedHobbies = [...hobbies, ...newHobbies] //The ... is the spread operator and pulls out the values from an array. It can also be used on objects.

let extendedUser = {
    isAdmin: true,
    ...user
}

for (let hobby of hobbies) {
    console.log(hobby)
}

function init() {
    function greet() {
        console.log("Hi");
    }

    greet(); //Can't execute greet outside of init as it's scoped inside of init
}

init();