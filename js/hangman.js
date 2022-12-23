let possibleWords = [       // Names to choose from
                trinity = ["T", "R", "I", "N", "I", "T" ,"Y"], 
                morpheous = ["M", "O", "R", "P", "H", "E", "U", "S"], 
                tank = ["T", "A", "N", "K"],
                neo = ["N", "E", "O"]
                ];

let randomAnswer = possibleWords[Math.floor(Math.random() * possibleWords.length)];     // Chooses a name at random

// const ALLOWED_CHARACTERS = ["A", "B", "C", "D", "E", "F", "G", "H",          // Array of allowed characters
//                             "I", "J", "K", "L", "M", "N", "O", "P", 
//                             "Q", "R", "S", "T", "U", "V", "W", "X", 
//                             "Y", "Z"];

ALLOWED_CHARACTERS = /^[a-z]$/i         // Regex of allowed characters

let displayedCharacters = Array(randomAnswer.length).fill(" _ ");       // Creates an array with "_" equal to length of answer
console.log("------------------");
console.log("The name is " + randomAnswer.length + " characters long");
alert("The name you are looking for is " + randomAnswer.length + " characters long");
console.log("When you guess correctly, you will see your letter displayed below");
alert("Your porgress will be displayed in the console");


let playerGuesses = [];     // Array of cumulative player inputs

let numberOfRounds = 1;     // Number of rounds counter




while (1 === 1) {       // !!! -= The game loop =- !!!
    
    console.log("------------------");
    console.log("This is round number " + numberOfRounds);
    
    
    let characterOfChoice = prompt("Choose a single letter from A to Z");       // Input
    
    if (characterOfChoice === null) {
        alert("Refresh page to play again")
        break
    }
    
    let characterOfChoiceCapitalized = characterOfChoice.toUpperCase();     // Converts input to uppercase
    
    if (!testChosenCharacter(characterOfChoiceCapitalized)) {      // Is input character an allowed letter?
        alert("Faulty input, try again");
        continue;
    }
    
    doesCharacterMatch(characterOfChoiceCapitalized);       // Does input match a letter of the answer
    
    console.log(" ");       // Logging information for the user
    console.log("Your guesses so far in alphabetical order:");
    console.log(playerGuesses.sort().join(" "));
    console.log(" ");
    console.log("Your progress:")
    console.log(displayedCharacters.join(" "));
    console.log(" ");
    
    if (didYouWin(displayedCharacters, randomAnswer) === false) {       // Check win condition
        numberOfRounds++;
        continue;
    } else {
        console.log("You won in " + playerGuesses.length + " guesses!");
        alert("You won in " + playerGuesses.length + " guesses!");
        numberOfRounds = 1;
        break;
    }
}



//Functions
// function testChosenCharacter(letter) {
//     for (let i = 0; i < ALLOWED_CHARACTERS.length; i++) {       // Tests if input character is allowed
//         if (letter === ALLOWED_CHARACTERS[i]) {
//             for (let j = 0; j < playerGuesses.length; j++)      // Tests if input character was used before
//                 if (letter !== playerGuesses[j]) {
//                     continue;
//                 } else {
//                     return false;
//                 }
//             playerGuesses.push(letter);
//             return true;
//         }
//     }
//     return false;
// }

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