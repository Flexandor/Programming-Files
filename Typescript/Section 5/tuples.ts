const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number]; //With this we can abstract out the tuples types 

const pepsi: Drink = ['brown', true, 40]; //giving the order of types makes this array a tuple