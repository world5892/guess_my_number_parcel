class View {
  _userNumber = document.querySelector('input');
  _btnCheck = document.querySelector('.check');
  _btnAgain = document.querySelector('.again');
  _resultMessage = document.querySelector('.message');
  _scoreEl = document.querySelector('.score');
  _highscoreEl = document.querySelector('.highscore');

  addHandlerCheck(handler) {
    this._btnCheck.addEventListener('click', function () {
      const userNumber = +this._userNumber.value;

      handler(userNumber);
    }.bind(this));
  }

  addHandlerPlayAgain(handler) {
    this._btnAgain.addEventListener('click', function () {
      handler();
    }.bind(this));
  }

  clearUserInput() {
    this._userNumber.value = '';
  }

  disableElements() {
    this._userNumber.disabled = true;
    this._btnCheck.classList.add('btn-inactive');
  }

  enableElements() {
    this._userNumber.disabled = false;
    this._btnCheck.classList.remove('btn-inactive');
  }

  displayResults(data) {
    this._resultMessage.textContent = data.gameResult;
    this._scoreEl.textContent = data.score;
    this._highscoreEl.textContent = data.highscore;
  }

  changeBackground(won = false) {
    // if (data.gameResult === 'You win!') document.body.style.backgroundColor = '#60b347';
    // else document.body.style.backgroundColor = '#222';

    won ? document.body.style.backgroundColor = '#60b347' : document.body.style.backgroundColor = '#222';
  }
};

export default new View();