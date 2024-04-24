// Designing the game
// 1. Randomly choose a word
// 2. Request player input for their guess
// 3. End the game at the player's request
// 4. Check if the entered response is a letter
// 5. Keep track of guessed letters
// 6. Show the player how many letters they have guessed and how many remain
// 7. End the game if the word is guessed

// Using pseudocode for game design

// Select a random word
// While the word is not guessed {
//  Show the player the current state of the game
//  Request player input for their guess
//  If the player wants to exit the game {
//    Exit the game
//  }
//  Else if the input is not a single letter {
//    Inform the player that they should enter a letter
//  }
//  Else {
//    If such a letter exists in the word {
//      Update the game state by substituting the new letter
//      }
//    }
//  }
// Congratulate the player when the word is guessed

// Programming the game
// choose a random word
let words = ["program", "monkey", "beautiful", "cake"];
let word = words[Math.floor(Math.random() * words.length)];
// Create the game array
let answerArray = new Array(word.length).fill("_");

let remainingLetters = word.length;

// Limit on moves
let attempts = word.length + 5; // Give the player 5 additional attempts

// Start the game loop
while (remainingLetters > 0 && attempts > 0) {
  // Display the current state of the game
  alert(answerArray.join(" "));

  // Prompt the user to guess a letter or cancel to exit the game
  let guess = prompt(
    "Guess a letter, or click cancel to exit the game."
  ).toLowerCase();

  if (guess === null) {
    // Exit the game if cancel is clicked
    break; // Exit the game if the user clicked cancel
  } else if (guess.length !== 1) {
    // Alert the user if they entered more than one character
    alert("Please enter just one letter.");
  } else {
    let correctGuess = false;
    // Update the game state with the guess
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess && answerArray[j] === "_") {
        answerArray[j] = guess;
        remainingLetters--;
        correctGuess = true;
      }
    }
    // Decrease the number of attempts if the guess is incorrect
    if (!correctGuess && !answerArray.includes(guess)) {
      attempts--;
    }
  }
}
// Report the game results
if (remainingLetters === 0) {
  alert(answerArray.join(" "));
  alert('Good job! The word was "' + word + '"');
} else if (attempts <= 0) {
  // Additional notification if the game ends due to running out of attempts
  alert('Out of attempts! The word was "' + word + '".');
}
