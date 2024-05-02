var player1Rand = Math.floor(Math.random() * (7-1) + 1);
console.log(player1Rand)
var player2Rand = Math.floor(Math.random() * (7-1) + 1);

var dicePicture1 = "images/dice" + player1Rand + ".png";
var dicePicture2 = "images/dice" + player2Rand + ".png";


document.querySelector(".img1").setAttribute("src", dicePicture1)
document.querySelector(".img2").setAttribute("src", dicePicture2)

if (player1Rand > player2Rand) {
    document.querySelector("h1").innerText = "Player 1 Wins!"
} else if (player1Rand < player2Rand) {
    document.querySelector("h1").innerText = "Player 2 Wins!"
} else {
    document.querySelector("h1").innerText = "It's a Draw!"
}
