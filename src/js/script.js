"use strict";
/*
class Player {
  constructor(username) {
    this.username = username;
    this._playerFill = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
}
*/

class TicTacToe {
  _playerState = 1;

  _winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  _playerFill = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  _parentEl = document.querySelector(".container");
  _boxPos = 0;
  _gameOn = 1;

  init() {
    this._parentEl.addEventListener(
      "click",
      function (e) {
        if (!e.target.closest(".shape") && !this._gameOn) return;

        // if (this._gameOn) {
        const selectedEl = e.target;
        const markup =
          this._playerState === 1
            ? `<div class="circle">&nbsp;</div>`
            : `<div class="x">&nbsp;</div>`;

        if (selectedEl.innerHTML === "") {
          selectedEl.insertAdjacentHTML("afterbegin", markup);
          this._boxPos = selectedEl.dataset.num;

          this._playerState === 1
            ? (this._playerFill[this._boxPos] = 1)
            : (this._playerFill[this._boxPos] = 2);
        }

        this._winningCombo.forEach((el) => {
          if (
            this._playerFill[el[0]] === this._playerFill[el[1]] &&
            this._playerFill[el[1]] === this._playerFill[el[2]] &&
            this._playerFill[el[0]] !== 0
          ) {
            this._playerState === 1 && alert("Circle Wins");
            this._playerState === 2 && alert("X Wins");
            this._resetGame();
          }
        });

        if (this._playerFill.every((el) => el !== 0)) {
          alert("draw");
          this._resetGame();
        }

        this._playerState = this._playerState === 1 ? 2 : 1;
        // }
      }.bind(this)
    );
  }
  _resetGame(e) {
    this._parentEl
      .querySelectorAll(".shape")
      .forEach((el) => (el.innerHTML = ""));
    this._gameOn = 1;
    this._playerFill = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
}

const game1 = new TicTacToe();
game1.init();

const array = [
  [0, 1, 3],
  [1, 2, 4],
];

const array2 = [0, 1, 1, 0, 1, 0];

array.forEach((el) => {
  array2[el[0]] === array2[el[1]] &&
    array2[el[1]] === array2[el[2]] &&
    console.log(el, "true");
});
