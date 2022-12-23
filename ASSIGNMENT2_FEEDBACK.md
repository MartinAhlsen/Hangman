Hi Martin!

Nice work! As you see below you've ticked all the boxes, so it's a Välgodkänt,congratulations!

A few things to consider:

1. if (characterOfChoice === null) ... everything after ths should be  in an else. If a user hits cancel the game ends, but line 45:

  let characterOfChoiceCapitalized = characterOfChoice.toUpperCase();

Will throw an error because it tries to capitalise a null value.

2. possibleWords could be an array of strings, and then you can use string methods such as includes and indexOf in functions like doesCharacterMatch rather than looping through every index eveyr time a character is entered:

  if (randomWord.includes(character)) {
     displayedCharacter[randomWord.indexOf(character)] = character; 
  }

*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

Constant or let variable: ✅
  ALLOWED_CHARACTERS should be a const or let

Array: ✅

Random selection from array: ✅ 

Loops: ✅ 
  For: ✅ 

  While: ✅ 

Comparison with user entered data: ✅ 

Final message: ✅ 

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

Comparison with an array: ✅ 

Nested logic: ✅ 

Input validation: ✅ 

Cancel button handling: ✅ 

Semantic variable naming: ✅ 

Code style: ✅ 