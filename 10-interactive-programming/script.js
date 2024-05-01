// Interactive programming
// Отложенное выполнение кода с помощью setTimeout

// Данная функция принимает два аргумента: функцию и время в миллисекундах, через которое нужно выполнить эту функцию.
setTimeout(function () {}, 1000);
// function() {} - это анонимная функция, которая будет выполнена через 1000 миллисекунд (1 секунда).

// Как открыть диалог alert через setTimeout?
// let timeUp = function() {
//   alert("Время вышло!");
// };
// setTimeout(timeUp, 5000);

// Отмена действия таймера
let doHomeWork = () => {
  alert("Домашнее задание!");
};
let timerId = setTimeout(doHomeWork, 5000);
clearTimeout(timerId); // Отмена действия таймера

// Многократный запуск кода И setInterval
// setInterval - это функция, которая позволяет выполнять код через определенный промежуток времени.
setInterval(function () {}, 1000); // Принимай два аргумента функцию и интервал

// Example
let counter = 1;
let printMessage = function () {
  console.log("Прошло " + counter + " секунд");
  counter++;
};
let intervalId = setInterval(printMessage, 1000);
clearInterval(intervalId); // Отмена действия таймера

// Анимация элементов с помощью setInterval
// $(document).ready(function () {
//   let leftOffset = 0;
//   let moveHeading = function () {
//     $("#heading").offset({ top: leftOffset });
//     leftOffset++;
//     if (leftOffset > 200) {
//       leftOffset = 0;
//     }
//   };
//   setInterval(moveHeading, 30);
// });

// Реакция на действия пользователя
// Для реакции на действия пользователя, такие как нажатие клавиш, можно использовать обработчики событий.
// Реакция на клики
// let clickHandler = function (event) {
//   console.log("Клик! " + event.pageX + " " + event.pageY);
// };
// $("h1").click(clickHandler);

// События mousemove
// $("html").mousemove(function (event) {
//   $("#heading").offset({
//     left: event.pageX,
//     top: event.pageY,
//   });
// });

// События click
// $("html").click(function (event) {
//   $("#heading").offset({
//     left: event.pageX,
//     top: event.pageY,
//   });
// });

// Создать анимацию с помощью setInterval
$(document).ready(function () {
  let position = { left: 0, top: 0 };
  let direction = 0;
  let moveHeading = function () {
    switch (direction) {
      case 0: // Moving right
        if (position.left < 200) {
          position.left++;
        } else {
          direction = 1;
        }
        break;
      case 1: // Moving down
        if (position.top < 200) {
          position.top++;
        } else {
          direction = 2;
        }
        break;
      case 2: // Moving left
        if (position.left > 0) {
          position.left--;
        } else {
          direction = 3;
        }
        break;
      case 3: // Moving up
        if (position.top > 0) {
          position.top--;
        } else {
          direction = 0;
        }
        break;
    }
    $("#heading").offset({ left: position.left, top: position.top });
  };
  setInterval(moveHeading, 30);
});
