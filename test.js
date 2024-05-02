
const a1 = [2,4,1,7,3,6];
console.log("The array starts as: " + a1);

if (a1.length === 0) {
    console.log("Array is empty and thus cannot be sorted");
} else {
    a1.sort();
}
console.log(a1);