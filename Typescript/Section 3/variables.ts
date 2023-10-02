//These type annotations aren't really required, because here type inference is enacting and doing these for us
const apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//let variable: TypeOfVariable = Value;

//built in objects

let now: Date = new Date();

let colors: string[] = ["Red", "Green", "Blue"];
//This says that colors is going to be a string array type.

let muNumbers: number[] = [1, 3, 4];

let truths: boolean[] = [true, false, true];

//Classes

class Car {

};

let car: Car = new Car();


//Object literal

let point: {x: number; y: number} = {
    x: 10,
    y: 20
};
//Declaring an object called point, assigning a object with specific values and types for that object.


//Function

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}
//: (i: number) => void is us telling ts what types we should be getting in the function. It's a "description" of the function.


//When to actually use type annotations:
//1) When you have a function that returns the any type.
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); //{"x": 10, "y": 20}

const jsonFixed = '{"x": 10, "y": 20}';
const coordinatesFixed: {x: number; y: number} = JSON.parse(json);
console.log(coordinates); //{"x": 10, "y": 20}

//2) When you declare a variable and initialise it on a different line
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

//3) When a variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
