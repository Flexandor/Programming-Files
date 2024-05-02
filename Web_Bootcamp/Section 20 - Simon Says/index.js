var gamePattern = [];

var buttons = ["green", "red", "yellow", "blue"];

function nextSequence() {
    var rand = Math.floor(Math.random() * 4);
    var chosenColor = buttons[rand];
    gamePattern.push(chosenColor);
    
    $("#" + chosenColor)
      .fadeOut(100)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);
    
}

nextSequence();
