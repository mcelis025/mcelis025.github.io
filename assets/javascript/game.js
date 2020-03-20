// Variables
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var userLetter = "";
var userInput = "";
var alpha = "abcdefghijklmnopqrstuvwxyz";
var randomPicked = [];

//Array For Random Word
var myWords = ["cell", "chiaotzu", "frieza", "gohan", "goku", "krillin", "buu", "piccolo", "tien", "trunks", "vegeta", "yamcha"];

//getElementById 
var winsText = document.getElementById("wins-text");
var currentWord = document.getElementById("current-word");
var guessesRemaining = document.getElementById("guesses-left");
var letterGuessed = document.getElementById("letters-guessed");
var lossesText = document.getElementById("losses-text");
var image = document.getElementById("picture");

//Random Word Generator  
var random = myWords[Math.floor(Math.random() * myWords.length)];

//Makes Random Word Into Underscores
function addUnderscore() {
  for (var i = 0; i < random.length; i++) {
    randomPicked.push("_");
  }
  console.log(randomPicked);
  currentWord.innerHTML = randomPicked.join(" ");
}
addUnderscore();

//Switch underscore with userInput if in random - else guessesLeft--
function revealLetter() {
  for (var i = 0; i < random.length; i++) {
    //check if current index value is equal to 
    if (random[i] === userInput) {
      randomPicked[i] = userInput;
      console.log(randomPicked);
      //update dom
      currentWord.innerHTML = randomPicked.join(" ");
    }
  }
}

//Reset Function
function reset() {
  guessesLeft = 5;
  userLetter = "";
  randomPicked = [];
  letterGuessed.textContent = "";
  random = myWords[Math.floor(Math.random() * myWords.length)];
  addUnderscore();
}

// Start Game Event
document.onkeyup = function (event) {                                             // Loop "turns on" on keyup
  userInput = event.key.toLowerCase();                                        // Makes userInput lowerCase and stores key inputs into userInput
  //check if the key is valid
  if (alpha.includes(userInput)) {
    //check if the key was already pressed
    if (!userLetter.includes(userInput)) {
      //add that key to userLetter
      var tText = userInput + " ";
      letterGuessed.innerHTML += tText;
      userLetter += userInput;
      //check if the word includes that key
      if (random.includes(userInput)) {
        //do the rest of your work here
        revealLetter();
        if (!randomPicked.includes("_")) {
          wins++;
          image.src = "assets/images/" + random + ".jpg";
          winsText.textContent = "Wins: " + wins;
          reset();
        }
        //else decrement guesses and update DOM
      } else {
        guessesLeft--;
        guessesRemaining.textContent = "Wrong Guesses Left: " + guessesLeft;
      }
      if (guessesLeft === 0) { //is guesses = 0
        //i lose
        losses++;
        image.src = "assets/images/gameOver.jpg";
        lossesText.textContent = "Losses: " + losses;
        reset();
      }
      //else alert user
    } else {
      alert("Letter Already Chosen")
    }
    //else alert user not valid key
  } else {
    alert("Enter Key A-Z")
  }
}

