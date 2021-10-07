'use strict';

import * as model from './model.js';
import view from './view.js';

import 'core-js/stable';
// import 'regenerator-runtime/runtime';

const controlCheck = function (userNumber) {
  // Validate user number
  if (!model.validateUserNumber(userNumber)) return view.clearUserInput();

  // Add user number to the state
  model.state.userNumber = userNumber;

  // Compare numbers and save game result
  model.state.gameResult = model.compareNumbers(model.state.randomNumber, model.state.userNumber);

  // Update statistics
  model.updateStatistics();

  // If user wins
  if (model.state.gameResult === 'You win!') {
    view.disableElements();
    view.changeBackground(true);
  }

  // If user loses
  if (model.state.score <= 0) {
    model.gameOver();
    view.disableElements();
  }

  // Display result
  view.displayResults(model.state);

  // Clearing user input
  view.clearUserInput();
};

const controlPlayAgain = function () {
  // Setting state to default values
  model.resetGame();

  // Displaying initial results
  view.displayResults(model.state);

  // Changing background back to black
  view.changeBackground();

  // Enabling input and CHECK button
  view.enableElements();
};

const init = function () {
  view.displayResults(model.state);
  view.addHandlerCheck(controlCheck);
  view.addHandlerPlayAgain(controlPlayAgain);
};

init();