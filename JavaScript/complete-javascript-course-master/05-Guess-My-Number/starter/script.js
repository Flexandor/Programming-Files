'use strict';

let answer = Math.ceil(Math.random() * 100);
console.log(answer);

function setContent(selector, content) {
  document.querySelector(selector).textContent = content;
}

function setBackgroundColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}

let message = '';

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message = 'No Guess!';
    setContent('.message', message);
  } else if (guess === answer) {
    console.log('🚀 ~ answer:', answer);
    console.log('🚀 ~ guess:', guess);

    message = "That's right, you won!";
    setContent('.message', message);
    setBackgroundColor('#60b347');
    setContent('.number', answer);

    if (score > highscore) {
      highscore = score;
      setContent('.highscore', score);
    }
  } else {
    if (score > 0) {
      message = guess < answer ? 'Too low!' : 'Too high!';
      setContent('.message', message);
      score--;
      setContent('.score', score);
    } else {
      message = 'You lost the game!';
      setContent('.message', message);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  setContent('.message', 'Start guessing...');
  setBackgroundColor('#222');
  setContent('.number', '?');
  setContent('.guess', '');
  setContent('.score', score);
  answer = Math.ceil(Math.random() * 100);
  console.log(answer);
});
