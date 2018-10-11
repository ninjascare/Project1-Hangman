
const inputHold = document.getElementById("inputHold");
const catagoryName = document.getElementById("catagoryName");
const playerLives  = document.getElementById('playerLives')
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
const words = [
  "html",
  "javascript",
  "cascading style sheet",
  "mario",
  "luigi",
  "browser"
];

var optionChoices = function(){
     alphabetButtons = document.getElementById("buttons")
    alphaList = document.createElement('ul')
    for (let i = 0; i < alphabet.length; i++){
        alphaList.setAttribute('id', 'alphabet')
        list = document.createElement('li')
        //We are adding the <li> to the dom
        list.setAttribute('id', 'letter')
// were adding an id to the list items.
        list.innerHTML = options[i]
        //now im adding the alphabet letters to the list items
        list.addEventListener('click', buttonClick)

    }
}

let buttonClick = function(evt){
    evt.preventDefault()
    

}