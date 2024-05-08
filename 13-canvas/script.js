// Метод fillRect Рисует заполненные прямоугольники.

// ROBOT
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
//head
ctx.fillRect((canvas.width - 50) / 2, 10, 50, 50);

// neck
ctx.fillRect((canvas.width - 10) / 2, 60, 10, 30);

// arms (left)
ctx.fillRect((canvas.width - 70) / 2 - 40, 90, 40, 10);
// arms (right)
ctx.fillRect((canvas.width - 70) / 2 + 70, 90, 40, 10);

// body
ctx.fillRect((canvas.width - 70) / 2, 90, 70, 70);

// legs (left)
ctx.fillRect((canvas.width - 70) / 2 + 10, 160, 10, 90);
// legs (right)
ctx.fillRect((canvas.width - 70) / 2 + 50, 160, 10, 90);

// COLORS
// Метод fillStyle Устанавливает цвет заливки фигур.
let canvas1 = document.getElementById("canvas1");
let ctx1 = canvas1.getContext("2d");
ctx1.fillStyle = "red";
ctx1.fillRect(0, 0, 25, 50);
ctx1.fillStyle = "green";
ctx1.fillRect(25, 0, 25, 50);
ctx1.fillStyle = "blue";
ctx1.fillRect(50, 0, 25, 50);

// Рисование контуров прямоугольников
// Метод strokeRect Рисует прямоугольники с контурами.
// Метод strokeStyle Устанавливает цвет контура фигур.
// Метод lineWidth Устанавливает толщину контура фигур.
let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d");
ctx2.strokeStyle = "red";
ctx2.lineWidth = 5;
ctx2.strokeRect(10, 10, 25, 50);
ctx2.lineWidth = 2;
ctx2.strokeStyle = "green";
ctx2.strokeRect(25, 50, 25, 50);

// Рисование линий или путей
// Метод beginPath Создает новый путь.
// Метод moveTo Устанавливает начальную точку пути.
// Метод lineTo Добавляет линию к пути.
// Метод stroke Рисует контур пути.
let canvas3 = document.getElementById("canvas3");
let ctx3 = canvas3.getContext("2d");
ctx3.strokeStyle = "red";
ctx3.lineWidth = 3;
ctx3.beginPath();
ctx3.moveTo(10, 10);
ctx3.lineTo(60, 60);
ctx3.stroke();
ctx3.strokeStyle = "green";
ctx3.lineWidth = 3;
ctx3.beginPath();
ctx3.moveTo(60, 10);
ctx3.lineTo(10, 60);
ctx3.stroke();

// Заливка путей цветом
// Метод fill Заливает путь цветом.
let canvas4 = document.getElementById("canvas4");
let ctx4 = canvas4.getContext("2d");
ctx4.fillStyle = "red";
ctx4.beginPath();
ctx4.moveTo(100, 100);
ctx4.lineTo(100, 60);
ctx4.lineTo(130, 30);
ctx4.lineTo(160, 60);
ctx4.lineTo(160, 100);
ctx4.lineTo(100, 100);
ctx4.fill();

// Рисование окружностей или дуг
// Метод arc Рисует окружность или дугу.
let canvas5 = document.getElementById("canvas5");
let ctx5 = canvas5.getContext("2d");
ctx5.lineWidth = 3;
ctx5.strokeStyle = "red";

ctx5.beginPath();
ctx5.arc(50, 50, 20, 0, Math.PI / 2, false);
ctx5.stroke();

ctx5.beginPath();
ctx5.arc(100, 50, 20, 0, Math.PI, false);
ctx5.stroke();

ctx5.beginPath();
ctx5.arc(150, 50, 20, 0, Math.PI * 2, false);
ctx5.stroke();
// false - против часовой стрелки
// true - по часовой стрелке
// Math.PI - половина окружности
// Math.PI * 2 - окружность

// Рисование нескольких окружностей с помощью функции
let canvas6 = document.getElementById("canvas6");
let ctx6 = canvas6.getContext("2d");

let circle = function (x, y, radius, color) {
  ctx6.beginPath();
  ctx6.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx6.lineWidth = 4;
  ctx6.strokeStyle = color;
  ctx6.stroke();
};

// Рисуем круги с разным радиусом и цветом
circle(100, 100, 10, "red");
circle(100, 100, 20, "green");
circle(100, 100, 30, "blue");
circle(100, 100, 40, "black");
circle(100, 100, 50, "yellow");
