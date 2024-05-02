var names = ["Alex", "Emma", "Stewart", "Jillian"]; //This is an array. Start at 0.

var guestName = prompt("What is your name?")

if (names.includes(guestName)) {
    alert("Welcome!");
} else {
    alert("Not Welcome!");
}