/*Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.*/

let markMass = 95;
let markHeight = 1.88;

let johnMass = 85;
let johnHeight = 1.76;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(
  "Mark's height is " +
    markHeight +
    "m and his weight is " +
    markMass +
    "kg. This makes his BMI: " +
    markBMI
);

console.log(
  "John's height is " +
    johnHeight +
    "m and his weight is " +
    johnMass +
    "kg. This makes his BMI: " +
    johnBMI
);

if (markHigherBMI === true) {
  console.log(
    "Mark's BMI is higher than John's! Mark's is " + markBMI + " and John's is " + johnBMI
  );
} else {
  console.log(
    "Mark's BMI is lower than John's! Mark's is " + markBMI + " and John's is " + johnBMI
  );
}
console.log("Is Mark's BMI bigger than John's: " + markHigherBMI);
