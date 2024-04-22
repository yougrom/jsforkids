// псевдокод

// Выбрать случайное слово
// Пока слово не угадано {
//  Показать игроку текущее состояние игры
//  Запросить у игрока вариант ответа
//  Если игрок хочет выйти из игры {
//    Выйти из игры
//  }
//  Иначе если вариант ответа не одиночная буква {
//    Сообщить игроку что он должен ввести буквы
//  }
//  Иначе {
//    Если такая буква есть в слове {
//      Обнови состояние игры подставив новую букву
//      }
//    }
//  }
// Поздравить игрока с победой слово угадано

// Программируем игру
// выбираем случайное слово
let words = ['program', 'monkey', 'beautiful', 'cake'];
let word = words[Math.floor(Math.random() * words.length)];
// Create the game array
let answerArray = new Array(word.length).fill('_');

let remainingLetters = word.length;

// Start the game loop
while (remainingLetters > 0) {
  // Display the current state of the game
  alert(answerArray.join(' '));

  // Prompt the user to guess a letter or cancel to exit the game
  let guess = prompt('Guess a letter, or click cancel to exit the game.');
  if (guess === null) {
    // Exit the game if cancel is clicked
    break;
  } else if (guess.length !== 1) {
    // Alert the user if they entered more than one character
    alert('Please enter just one letter.');
  } else {
    // Update the game state with the guess
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess && answerArray[j] === '_') {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}

// Display the answer and congratulate the player
alert(answerArray.join(' '));
alert('Good job! The word was "' + word + '"');