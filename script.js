const valves = document.querySelectorAll(".btn-valve");
const imgPitch = document.querySelector(".img-pitch");
const btnSubmit = document.getElementById("submit");
const btnStart = document.querySelector(".start");
const btnContainer = document.querySelector(".btn-container");
const instructions = document.querySelector(".instructions");
const quizPitchSummary = document.querySelector(".quiz-pitch-summary");
const score = document.querySelector(".score");
const notesRemaining = document.querySelector(".notes-remaining");
const summary = document.querySelector(".summary");
const ctnrCorrectWrong = document.querySelector(".container-correct-wrong");

///////////////////////////////////////////////////

class Game {
  _score = 0;
  _valveArr = [...valves];
  _randArr;
  _gameLength;

  _pitches = [
    { name: "an4", fingering: 12 },
    { name: "bn4", fingering: 2 },
    { name: "cn4", fingering: 0 },
    { name: "cn5", fingering: 0 },
    { name: "dn4", fingering: 13 },
    { name: "en4", fingering: 12 },
    { name: "gn4", fingering: 0 },
    { name: "fn5", fingering: 1 },
  ];

  constructor() {
    this._addListeners();
  }

  //////////////////////////////////////////
  //Valve Functionality
  _toggleCheck = function (ch, valveEl) {
    valveEl.checked = ch ? false : true;
  };

  _loopOverValves = function (e, bool, numValves = [7, 8, 9]) {
    numValves.forEach((v, i) => {
      e.key == v && this._toggleCheck(bool, this._valveArr[i]);
    });
  };

  _resetValves = function () {
    this._valveArr.forEach((v) => {
      v.checked = false;
    });
  };

  //Called in constructor. Initializes valve fucntionality, submit click and shortcut keypress, and the start button which launches game
  _addListeners = function () {
    const helper = this;

    document.addEventListener("keydown", function (e) {
      helper._loopOverValves(e, false);
    });

    document.addEventListener("keyup", function (e) {
      helper._loopOverValves(e, true);
    });

    document.addEventListener("keypress", function (e) {
      if (e.key != "a") return;
      helper._checkAnswer(helper._randArr);
    });

    btnSubmit.addEventListener("click", function () {
      helper._checkAnswer(helper._randArr);
    });

    //Hides start button after called and relaces with submit. Hides instruction box and replaces with box containing game summary. Resets valves from opening page. Then takes our array of pitches and generates a random order.
    btnStart.addEventListener("click", function () {
      btnStart.classList.add("hide-btn");
      btnSubmit.classList.remove("hide-btn");

      instructions.classList.add("hidden");
      quizPitchSummary.classList.remove("hidden");

      helper._resetValves();
      helper._generateRandomNoteArr(helper._pitches);
    });
  };

  _getAnswer = function () {
    const result = this._valveArr.map((v) => v.checked);
    return result;
  };

  _checkAnswer = function (arr) {
    const correctFing = arr[0].fingering;
    const boolArr = this._getAnswer();
    let fingArr = boolArr
      .map((x, i) => {
        return x == true ? i + 1 : "";
      })
      .join("");
    if (!fingArr) fingArr = "0";

    this._resetValves();

    fingArr == correctFing
      ? this._answeredCorrect(this._randArr)
      : this._answeredWrong(this._randArr, fingArr);
  };

  //Correct message is displayed, checks to see if game should be over, updates score and removes first element from _randArr. Adds 'next' button along with event listener to initialize the next round. 'next' Button is then removed until a correct answer is guessed again
  _answeredCorrect = function (arr) {
    ctnrCorrectWrong.textContent = "";
    ctnrCorrectWrong.insertAdjacentHTML(
      "afterbegin",
      `<p class="text-instruction correct">
    <span class="emoji">✅</span>Correct! ${arr[0].letter}${arr[0].accidental} is ${arr[0].fingering}
  </p>`
    );

    this._score++;
    this._randArr.shift();

    this._updateSummaryInfo(this._randArr);

    if (this._randArr.length === 0) return this._gameOver();

    btnContainer.insertAdjacentHTML(
      "beforeend",
      ` <button class="btn-next btn-start">🎶 Next</button>`
    );

    const helper = this;
    const btnNext = document.querySelector(".btn-next");
    btnNext.addEventListener("click", function () {
      helper._newRoundInit();
      btnNext.remove();
      ctnrCorrectWrong.textContent = "";
      ctnrCorrectWrong.insertAdjacentHTML(
        "afterbegin",
        `<p class="text-instruction">
      <span class="emoji">🎺</span>Press valves below
    </p>`
      );
    });
  };

  _answeredWrong = function (arr, fingArr) {
    ctnrCorrectWrong.textContent = "";
    ctnrCorrectWrong.insertAdjacentHTML(
      "afterbegin",
      `<p class="text-instruction incorrect">
<span class="emoji">❌</span>Try Again! ${arr[0].letter}${arr[0].accidental} is not ${fingArr}
</p>`
    );
    this._score--;
  };

  //Only called when the game is started, updates _randArr of class. This value is used to display the next note and calculate number of rounds left.
  _generateRandomNoteArr = function (pitchArr) {
    const mixedUp = pitchArr
      .map((x, i) => {
        x.rand = Math.random();
        return x;
      })
      .sort((x, y) => {
        return x.rand > y.rand ? -1 : 1;
      });
    this._randArr = mixedUp;
    this._gameLength = this._randArr.length;
    this._formatPitchName(this._randArr);
    this._newRoundInit();
  };

  _formatPitchName = function (arr) {
    arr.forEach((p) => {
      p.letter = p.name[0].toUpperCase();
      if (p.name[1] === "n") p.accidental = `♮`;
      if (p.name[1] === "f") p.accidental = `♭`;
      if (p.name[1] === "s") p.accidental = `♯`;
    });
  };

  //Is called for first round and all other rounds
  _newRoundInit = function () {
    this._displayImg(this._randArr);
    this._updateSummaryInfo(this._randArr);
  };

  _displayImg = function (arr) {
    imgPitch.src = `/img/${arr[0].name}.avif`;
  };

  //A reusable function that updates the game summary section with stats
  _updateSummaryInfo = function (
    arr,
    scoreNum = this._score,
    lengthNum = this._gameLength
  ) {
    score.textContent = "";
    notesRemaining.textContent = "";

    score.insertAdjacentHTML(
      "afterbegin",
      `<span class="emoji">🎼</span>Score: ${scoreNum}/${
        lengthNum - arr.length
      }`
    );

    notesRemaining.insertAdjacentHTML(
      "afterbegin",
      `<span class="emoji">🎵</span>Notes left: ${arr.length}`
    );
  };

  _gameOver = function () {
    ctnrCorrectWrong.textContent = "";
    ctnrCorrectWrong.insertAdjacentHTML(
      "afterbegin",
      `<p class="text-instruction"><span class="emoji">📈</span>Keep practicing until you know them all </p> `
    );
    ctnrCorrectWrong.insertAdjacentHTML(
      "afterbegin",
      `<p class="text-instruction"><span class="emoji">🥇</span>Congrats on finishing! </p> `
    );
    ctnrCorrectWrong.insertAdjacentHTML(
      "afterend",
      `<p class="text-instruction"><span class="emoji">🔁</span>Refresh page to play again</p> `
    );
    imgPitch.remove();
    notesRemaining.remove();
  };
}

const init = new Game();
