const inputHold = document.getElementById("inputHold");
const catagoryName = document.getElementById("catagoryName");
const playerLives = document.getElementById("playerLives");
var word;
const correct = [];
const options = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
// const words = ["yoshi", "toad", "princess peach", "mario", "luigi", "browser"];

var optionChoices = function() {
  alphabetButtons = document.getElementById("buttons");
  alphaList = document.createElement("ul");
  alphaList.setAttribute("id", "alphabet");
  for (let i = 0; i < options.length; i++) {
    var list = document.createElement("button");
    //We are adding the <button> to the dom
    list.setAttribute("id", "abc");
    // were adding an id to the list items.
    list.innerHTML = options[i];
    //now im adding the alphabet letters to the list items
    alphaList.appendChild(list);
  }
  alphabetButtons.appendChild(alphaList);
};
optionChoices();

check = function() {
  list.onclick = function() {
    var attempt = this.innerHTML;
    this.setAttribute("class", "active");
    this.onclick = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === attempt) {
        correct[i].innerHTML = attempt;
      }
    }

    var k = word.indexOf(attempt);
    if (k === -1) {
      playerLives -= 1;
    }
  };
};











































// var word = words[Math.floor(Math.random() * words.length)];

// function guess() {
//   let answer = [];
//   for (var i = 0; i < words.length; i++) {
//     answer[i] = "_";
//     inputHold.innerHTML
//   }
//   return answer
// }

//   var remainingLetters = words.length;
