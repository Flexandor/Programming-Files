'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic', 'Meat'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //openingHouse: openingHours this was done before ES6
  openingHours, //This is because of ES^ enhanced object literals

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // }, //This is pre ES6

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }, //This is post ES6 syntax

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here's your pasta made with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// const question = new Map([
//   ['Question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'Try Again'],
// ]);
// console.log(question);

// //convert object to map
// const hoursMap = new Map(Object.entries(openingHours));

// //Iteration
// console.log(question.get('Question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(question.get(question.get('correct') === answer)); //This is the benefit of having boolean values as keys.

// //Convert Map to array
// console.log([...question]);

// Maps ///////////
//In maps the keys can be any type

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Italy');
// rest.set(2, 'France');
// console.log(rest);

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic', 'Meat'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open!')
//   .set(false, 'We are closed!');
// console.log(rest);
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// //rest.clear();
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));

// Sets ///////////
// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
// console.log(ordersSet);

// console.log(new Set('Alex'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// //const staffUnique = new Set(staff);
// const staffUnique = [...new Set(staff)]; //This lets you deconstruct the set to a new array.

// console.log(staffUnique);

//Sets are unique and you can't retrieve items from it.

// //Object Looping
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// //Property Names
// const properties = Object.keys(openingHours);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //Property Values
// const values = Object.values(openingHours);

// const entries = Object.entries(openingHours);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// //Optional chaining
// console.log(restaurant?.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(
//     `On ${day}, we open at ${restaurant.openingHours[day]?.open ?? 'closed'}`
//   );
// }

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// let [first, second] = restaurant.categories;
// const [, , third, , fifth] = restaurant.categories;

// console.log(first, second, third, fifth);

// [second, first] = [first, second];

// const [starter, main] = restaurant.order(2, 0);

// //Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;

// console.log(i, j, k);

// //Default values
// const [p = 1, q = 1, r = 1] = [8, 2];
// console.log(p, q, r);

// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //setting default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // //mutating variables
// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };
// // ({ a, b } = obj); //have to wrap curly braces in parenthesis
// // console.log(a, b);

// //Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// const goodNewArr = [1, 2, ...arr]; //The spread operator takes all the values out of the original array and writes them as if we included them all in manually and individually.

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //We can only use the spread operator in locations where values are separated by , e.g. an array or a function call

// const mainMenuCopy = [...restaurant.mainMenu]; //Shallow copy

// //Join 2 arrays
// const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

// //The spread operator works on all iterables (e.g. Arrays, sets, strings, maps) but not objects

// const str = 'Alex';
// const letters = [...str, ' ', 'M.'];

// // const ingredients = [
// //   prompt("Let's make pasta! ingredient 1?"),
// //   prompt("Let's make pasta! ingredient 2?"),
// //   prompt("Let's make pasta! ingredient 3?"),
// // ];
// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);

// //REST, the rest element must be the last element
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2) Functions
// const add = function (...numbers) {
//   //REST
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 1, 2, 4);

// const x = [23, 5, 7];
// add(...x); //Spread

// restaurant.orderPizza('meat', 'onion', 'peppers', 'cheese');

// // || and &&, Can use any data type, return any data type and do short-circuiting.
// //Short-circuiting - If the first value in the ||operand is a truthy value the other operator won't be evaluated. It will return the first truthy value, or falsey for &&.

// console.log(3 || 'Alex'); //3 will be returned because it's a truthy value

// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// // const guest2 = restaurant.numGuests || 10;

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10; // Since numGuests is set, it should use that, but since it's set to a falsy value, it sets it to 10 instead. The nullish coalescing operator can help with that.
// console.log(guests);

// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);
// //The nullish values are null and undefined. This means that 0 and '' are counted as truthy values for this scenario.

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Big Em',
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10; //Logical assigment operator
// // rest2.numGuests ||= 10; //This still has the same issue with 0 being a falsy value. So we can use ??= instead

// rest1.numGuests ??= 10; //nullish assigment operator
// rest2.numGuests ??= 10;

// // rest1.owner = rest1.owner && '<Anon>'; // short circuits as the owner isn't set here so is falsy
// // rest2.owner = rest2.owner && '<Anon>';

// rest1.owner &&= '<Anon>';
// rest2.owner &&= '<Anon>';

// console.log(rest1);
// console.log(rest2);

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀
// */

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //Challenge 2
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// let sum = 0;
// const odds = Object.values(game.odds);
// for (const odd of odds) {
//   sum += Number(odd);
// }
// const average = sum / odds.length;

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory by ${game[team]}`;
//   console.log(`Odd of ${teamStr} is  ${odd}`);
// }

// // const [players1, players2] = game.players;

// // const [gk, ...fieldPlayers] = players1;

// // const allPlayers = [...players1, ...players2];

// // const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perro'];

// // const {
// //   odds: { team1, x: draw, team2 },
// // } = game;

// // const printGoals = function (...players) {
// //   console.log(`${players.length} goals were scored`);
// // };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// // printGoals(...gameEvents.scored);

// // team1 < team2 && console.log('Team 1 is more likely to win'); //This is because the logical and operator continues if the first value is truthy
// // team2 < team1 && console.log('Team 2 is more likely to win');

// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // for (const item of menu) console.log(item);

// // for (const [i, el] of menu.entries()) {
// //   console.log(`${i + 1}: ${el}`);
// // }

/* 1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL */

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
