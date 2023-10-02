const carMarkers: string[] = ['ford', 'toyota', 'chevy']; //normally most useful when not initializing an array on the same line

const carStuff: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

//Flexible types

const importantDates: (string | Date)[] = [new Date()]; //If you don't initialise the array with both the string and date variables, then you'll need the TS declaration
importantDates.push('01-12-2023');