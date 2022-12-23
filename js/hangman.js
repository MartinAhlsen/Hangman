let possibleWords = [       // Names to choose from
                trinity = ["T", "R", "I", "N", "I", "T" ,"Y"], 
                morpheous = ["M", "O", "R", "P", "H", "E", "U", "S"], 
                tank = ["T", "A", "N", "K"],
                neo = ["N", "E", "O"]
                ];

let randomAnswer = possibleWords[Math.floor(Math.random() * possibleWords.length)];     // Chooses a name at random

ALLOWED_CHARACTERS = /^[A-Z]$/         // Regex of allowed characters

let displayedCharacters = Array(randomAnswer.length).fill(" _ ");       // Creates an array with "_" equal to length of answer

alert("------------------\n" 
        + "The name you are looking for is " + randomAnswer.length + " characters long" 
        + "------------------"
);

let playerGuesses = [];     // Array of cumulative player inputs

let numberOfRounds = 1;     // Number of rounds counter

let characterOfChoice = ""; // Condition for the game loop

let winCondition = false;   // Condition for the game loop

while (characterOfChoice !== null && !winCondition) {       // !!! -= The game loop =- !!!
    
    let characterOfChoice = prompt("------------------\n"                        // Input
                            + "This is round number " + numberOfRounds + "\n"
                            + "------------------\n"
                            + "Your guesses so far in alphabetical order:\n"
                            + playerGuesses.sort().join(" ") + "\n"
                            + "------------------\n"
                            + "Your progress:\n"
                            + displayedCharacters.join(" ") + "\n"
                            + "------------------\n"
                            + "Choose a single letter from A to Z\n");

    if (characterOfChoice === null) {
        alert("Refresh page to play again")
        continue
    }
    
    let characterOfChoiceCapitalized = characterOfChoice.toUpperCase();     // Converts input to uppercase
    
    if (!testChosenCharacter(characterOfChoiceCapitalized)) {      // Is input character an allowed letter?
        alert("Faulty input, try again");
        continue;
    }
    
    doesCharacterMatch(characterOfChoiceCapitalized);       // Does input match a letter of the answer
    
    if (didYouWin(displayedCharacters, randomAnswer) === false) {       // Check win condition
        numberOfRounds++;
    } else {
        alert("You won in " + playerGuesses.length + " guesses!");
        winCondition = true;
    }
}


// Functions
function testChosenCharacter(letter) {
    if (ALLOWED_CHARACTERS.test(letter)) {             // Tests if input character is allowed
        if (!playerGuesses.includes(letter)) {         // Tests if input character was used before
            playerGuesses.push(letter);                // Adds current guess to previous guesses array
            return true;    
        }
    } else {
        return false
    }
}

function doesCharacterMatch (character) {       // Does the letter match any of the letters in the random word 
    for (let i = 0; i < randomAnswer.length; i++) {
        if (character === randomAnswer[i]) {
            displayedCharacters[i] = character;
        }
    }
}

function didYouWin (displayedCharacters, randomAnswer) {        // Checks win condition
    for (let i = 0; i < displayedCharacters.length; i++) {
        if (displayedCharacters[i] !== randomAnswer[i]) {
            return false;
        }
    }
    return true;
}