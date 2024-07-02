'use strict';

/* function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
  }

  printAge();

  return age;
}

const firstName = 'Alex';
calcAge(1995); */

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => console.log(`Hey ${this.firstName}`),
  greet2: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet(); //This doesn't work because the arrow function doesn't have it's own this
