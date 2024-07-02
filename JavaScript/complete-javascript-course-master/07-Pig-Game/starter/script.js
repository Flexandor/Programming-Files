'use strict';

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldDice = document.querySelector('.btn--hold');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');

let totalScores;
let currentScore;
let activePlayer;
let playing;

const init = function () {
  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  score0El.textContent = 0;
  score1El.textContent = 0;

  totalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  playing = true;
};

init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
};

btnRollDice.addEventListener('click', function () {
  if (playing) {
    const dice = Math.floor(Math.random() * 6 + 1);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHoldDice.addEventListener('click', function () {
  if (playing) {
    totalScores[activePlayer] += currentScore;
    score0El.textContent = totalScores[0];
    score1El.textContent = totalScores[1];
    if (totalScores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      console.log(`Player ${activePlayer} won, congratulations!`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', init);
