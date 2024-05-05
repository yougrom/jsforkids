// OOP
// Объектно-ориентированная программирование это способ проектирования и написания кода когда все важные части программы являются объектами
// Объект это набор свойств и методов которые могут быть использованы для выполнения каких-то действий

// Простой объект
let person = {
  name: "John",
  age: 30,
  isMarried: false,
  sayHello: function () {
    return "Hello";
    console.log("Hello");
  },
}; // объект person содержит свойства name, age, isMarried и метод sayHello
console.log(person.name); // John
console.log(person.age); // 30
console.log(person.isMarried); // false
person.sayHello(); // Hello

person.age = 40; // изменение свойства age
console.log(person.age); // 40

person.hasChildren = true; // добавление нового свойства hasChildren
console.log(person); // {name: "John", age: 40, isMarried: false, sayHello: ƒ, hasChildren: true}

// Добавление к объектам новых методов
person.friendly = function () {
  console.log(
    "My friend, my name is " +
      this.name +
      " I want to say you " +
      person.sayHello()
  );
};
// My friend, my name is John I want to say you Hello
console.log(person.friendly());

// Ключевое слово this в методах объекта
// Ключевое слово this используется в методах объекта для ссылки на объект
// Ключевое слово this можно использовать в теле метода чтобы обратиться к объекту для которого этот метод вызывается

let speak = function () {
  console.log(this.sound + "! Меня зовут " + this.name);
};
let cat = {
  sound: "Мяу",
  name: "Васька",
  speak: speak,
};
let dog = {
  sound: "Гав",
  name: "Шарик",
  speak: speak,
};
cat.speak(); // Мяу! Меня зовут Васька
dog.speak(); // Гав! Меня зовут Шарик

// В коде метода ключевое слово this ссылается на объект для которого вызывается метод
// В методе cat.speak() this ссылается на объект cat

// Конструктор объектов
// Конструктор объектов это функция которая создает объекты

// Устройство конструктора
// 1. Создаем функцию-конструктор
// 2. В теле функции создаем свойства и методы объекта
// 3. Создаем объект с помощью конструктора
// let cars = new car("Toyota", "red", 200);

// Функция конструктор Car
let Car = function (x, y) {
  this.x = x;
  this.y = y;
};

// let tesla = new Car(20, 30);
// tesla; // Car {x: 20, y: 30}
// console.log(tesla);

// example
// Функция конструктора всегда возвращает объект
function User(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
  this.sayHello = function () {
    // Методы внутри функции конструкторов
    console.log("Hello, my name is " + this.name);
  };
}
let user = new User("John", 30);
console.log(user); // User {name: "John", age: 30}
user.sayHello(); // Hello, my name is John

// Рисуем машины
let drawCar = function (car) {
  let carHtml = '<img src="./img/car.webp">';
  let carElement = $(carHtml);
  carElement.css({
    position: "absolute",
    left: car.x,
    top: car.y,
  });
  $("body").append(carElement);
};

let tesla = new Car(20, 30);
let nissan = new Car(100, 200);
drawCar(tesla);
drawCar(nissan);

// Настройка объектов через прототипы
// В объектно-ориентированном программировании принято чтобы объекты обладали собственной функциональностью организованные виде виде методов
// Прототип объекта это объект который используется как основа для создания других объектов
// Прототип объекта это объект который содержит свойства и методы которые могут быть унаследованы другими объектами
// Прототипы джаваскрипт это механизм который упрощает использование общей функциональности то есть методов разными объектами
// Синтаксис добавление метода к свойства

Car.prototype.draw = function () {
  // Тело метода
};
// Добавляем метод draw к прототипу объекта Car
let Car1 = function (x, y) {
  this.x = x;
  this.y = y;
};
Car1.prototype.draw = function () {
  // Что такое prototype?
  let carHtml = '<img src="./img/car.webp">';
  this.carElement = $(carHtml);
  this.carElement.css({
    position: "absolute",
    left: this.x,
    top: this.y,
  });
  $("body").append(this.carElement);
};
Car1.prototype.moveRight = function () {
  this.x += 10;
  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

let tesla1 = new Car1(270, 290);
let nissan1 = new Car1(300, 400);
tesla1.draw();
nissan1.draw();
