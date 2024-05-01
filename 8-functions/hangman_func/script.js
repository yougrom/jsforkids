// word: Загаданное слово
let word = pickWord();
// answerArray: Итоговый массив
let answerArray = setupAnswerArray(word);
// remainingLetters: Сколько букв осталось угадать
let remainingLetters = word.length;
while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  // guess: Ответ игрока
  let guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста введите одиночную букву.");
  } else {
    // correctGuesses: Количество открытых букв
    let correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}
showAnswerAndCongratulatePlayer();

// Объявление функций

let pickWord = function () {
  // Возвращает случайная выбранное слово
};

let setupAnswerArray = function (word) {
  // Возвращает итоговый массив для заданного слова word
};

let showPlayerProgress = function (answerArray) {
  // С помощью alert отображает текущее состояние игры
};

let getGuess = function () {
  // Запрашивает ответ игрока с помощью prompt
};

let updateGameState = function (guess, word, answerArray) {
  // Обновляет answerArray согласно ответу игрока (guess)
  // Возвращай число обозначающие сколько раз буква guess
  // Встречается в слове чтобы можно было обновить значение remainingLetters
};

let showAnswerAndCongratulatePlayer = function (answerArray) {
  // С помощью alert Показывает игроку отгаданного слово и поздравляет его с победой
};
