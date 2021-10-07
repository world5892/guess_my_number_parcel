'use strict';

import { MIN_VALUE, MAX_VALUE, INITIAL_SCORE, INITIAL_HIGHSCORE } from "./config.js";

export const state = {
  minValue: MIN_VALUE,
  maxValue: MAX_VALUE,
  randomNumber: 10,
  userNumber: null,
  score: INITIAL_SCORE,
  highscore: INITIAL_HIGHSCORE,
  gameResult: 'Start guessing...'
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const validateUserNumber = function (userNumber) {
  if (!userNumber) {
    alert('Your number is invalid. Type a correct number.');
    return false;
  }

  if (userNumber < 1 || userNumber > 20) {
    alert('Your number must be between 1 and 20.');
    return false;
  }

  return true;
};

export const compareNumbers = function (randomNumber, userNumber) {
  if (randomNumber === userNumber) return 'You win!';
  if (randomNumber > userNumber) return 'Too low!';
  if (randomNumber < userNumber) return 'Too high!';
};

export const updateStatistics = function () {
  if (state.gameResult === 'You win!') {
    if (state.score > state.highscore) {
      state.highscore = state.score;
      setLocalStorage();
    }
    return;
  };

  state.score--;
};

export const gameOver = function () {
  state.gameResult = 'Game Over!';
}

export const resetGame = function () {
  state.randomNumber = getRandomNumber(state.minValue, state.maxValue);
  state.score = INITIAL_SCORE;
  state.gameResult = 'Start guessing...';
}

const setLocalStorage = function () {
  localStorage.setItem('highscore', state.highscore);
};

const getLocalStorage = function () {
  const highscore = localStorage.getItem('highscore');
  if (highscore !== null) state.highscore = +highscore;
};

const init = function () {
  // state.randomNumber = getRandomNumber(state.minValue, state.maxValue);
  getLocalStorage();
};

init();
