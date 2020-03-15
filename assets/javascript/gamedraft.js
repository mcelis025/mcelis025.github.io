//Variables
var myWords = ["cell", "chiaotzu", "frieza", "gohan", "goku", "krillin", "majin buu", "piccolo", "tien", "trunks", "vegeta", "yamcha"];
var wins = 0;
var blankWord = [];
var guessesLeft = 10;

//stores what will show in index
var winsText = document.getElementById("wins-text");


//start game event
document.onkeyup = function(event) {
  var userInput = event.key;

    //computer picks random word
    var random = myWords[Math.floor(Math.random() * myWords.length)];

    //random word switched to blanks
    for (var i = 0; i < random.length; i++) {
    blankWord[i] = " - ";

    console.log(blankWord[i]);
    }

    //user input considered
    if (userInput === random[i]) {
    blankWord[i] = userInput;
    userInput[i] = wordsGuessed;
    } else {
    guessesLeft--;
    userInput[i] = wordsGuessed;
    }

    //Win - no more blanks - correct word guessed
    if (random = blankWord) {
    wins++;
    showImg;
    reset;
    } 

    //lose - no more guesses
    if (guessesLeft === 0) {
    gameOverImg;
    reset;
    }



    //sends info after '=' to document.getElementById which will then display to html through repective <p> 
    winsText.textContent = "Wins " + wins;
    randomWord.textContent = blankWord;
    guessesRemaining = guessesLeft; 
    lettersGuessed.textContent = "";


}

//reset
function resetGame() {

}