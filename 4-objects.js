// Object
// Для доступа к элементам объектов используются строки а не числа. 
// Строки называют ключами а элементы которые им соответствуют – значениями.

let cat = {
  'legs': 3, 
  'name': 'Harmony',
  'color': 'blue'
};

// Литерал это когда значение записывается сразу и целиком, а не составляется постепенно шаг за шагом

let dog = {
  legs: 3, 
  name: 'Harmony',
  color: 'blue'
};

// Какие ключи есть у одного объекта Команда - Object.keys(); - возвращает массив ключей объекта

console.log(Object.keys(cat));  // ['legs', 'name', 'color'] 
console.log(Object.keys(dog));  // ['legs', 'name', 'color']


// Добавление элементов объекта

let animals = {  }; // создаем объект

animals['cat'] = 3; // добавляем элементы в объект
animals['dog'] = 'Snoopy';
animals['parrot'] = 2;
console.log(animals); // { cat: 3, dog: 'Snoopy', parrot: 2 }
console.log(Object.keys(animals)); // [ 'cat', 'dog', 'parrot' ]

// Добавление ключей через точку
let animals = {  }; // создаем объект
animals.fish = 'Nemo';
animals.bird = 'Tweety';
animals.cat = 3;
console.log(animals); // { fish: 'Nemo', bird: 'Tweety', cat: 3 }

// Массив объектов  - массив объектов это массив в котором хранятся объекты

let dinosaurs = [
  { name: 'Tyrannosaurus Rex', period: 'Late Cretaceous' },
  { name: 'Stegosaurus', period: 'Late Jurassic' },
  { name: 'Plateosaurus', period: 'Triassic' }
];
console.log(dinosaurs[1].period); // Late Jurassic

// Объект массивов - объект массивов это объект в котором хранятся массивы
// Для доступа к элементам объекта массивов используются строки а не числа.
// Строки называют ключами а элементы которые им соответствуют – значениями.

// Точечную нотацию можно Использовать только с объектами для массивов она не подходит


// Массив друзей
let anna = { name: 'Anna', age: 11, luckyNumbers: [2, 4, 8, 16] };
let dave = { name: 'Dave', age: 5, luckyNumbers: [3, 9, 40] };
let kate = { name: 'Kate', age: 9, luckyNumbers: [1, 2, 3] };
let yuriy = { name: 'Yuriy', age: 37, luckyNumbers: [7, 11, 12] };

let friends = [anna, dave, kate, yuriy];
console.log(friends[2]); // { name: 'Kate', age: 9, luckyNumbers: [ 1, 2, 3 ] }
console.log(friends[2].luckyNumbers[0]); // 1


// Программа Учёт Долгов
let owedMoney = { };
owedMoney.Anna = 100;
owedMoney.Boris = 50;
owedMoney['Anna'] = owedMoney.Anna + 50;
owedMoney.Anna += 50;
console.log(owedMoney); // { Anna: 200, Boris: 50 }


// Практика – хранение информации о фильмах
let movies = {
  'Finding Nemo': {
    releaseDate: 2003,
    duration: 100,
    actors: ['Albert Brooks', 'Ellen DeGeneres', 'Alexander Gould'],
    format: 'DVD'
  },
  'Star Wars: Episode VI - Return of the Jedi': {
    releaseDate: 1983,
    duration: 134,
    actors: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
    format: 'DVD'
  },
  'Harry Potter and the Goblet of Fire': {
    releaseDate: 2005,
    duration: 157,
    actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
    format: 'Blu-ray'
  }
};
console.log(movies['Finding Nemo']); // { releaseDate: 2003, duration: 100, actors: [ 'Albert Brooks', 'Ellen DeGeneres', 'Alexander Gould' ], format: 'DVD' }
console.log(movies['Finding Nemo'].actors); // [ 'Albert Brooks', 'Ellen DeGeneres', 'Alexander Gould' ]
console.log(movies['Finding Nemo'].actors[2]); // Alexander Gould

// Как добавить новый элемент в массив объектов?
// Для добавления нового элемента в массив movies Существующих объектов нужно создать новый объект и добавить его в массив
// Для этого используется следующий синтаксис:

movies['The Lion King'] = { releaseDate: 1994, duration: 89, actors: ['Matthew Broderick', 'Jeremy Irons', 'James Earl Jones'], format: 'DVD' };
console.log(movies); // { 'Finding Nemo': { releaseDate: 2003, duration: 100, actors: [ 'Albert Brooks', 'Ellen DeGeneres', 'Alexander Gould' ], format: 'DVD' }, 'Star Wars: Episode VI - Return of the Jedi': { releaseDate: 1983, duration: 134, actors: [ 'Mark Hamill', 'Harrison Ford', 'Carrie Fisher' ], format: 'DVD' }, 'Harry Potter and the Goblet of Fire': { releaseDate: 2005, duration: 157, actors: [ 'Daniel Radcliffe', 'Emma Watson', 'Rupert Grint' ], format: 'Blu-ray' }, 'The Lion King': { releaseDate: 1994, duration: 89, actors: [ 'Matthew Broderick', 'Jeremy Irons', 'James Earl Jones' ], format: 'DVD' } }

let findingNemo = movies['Finding Nemo'];
console.log(findingNemo.duration); // 100
findingNemo.duration = 105;
console.log(findingNemo.duration); // 105
console.log(findingNemo.actors); // [ 'Albert Brooks', 'Ellen DeGeneres', 'Alexander Gould' ]


// Практика
// Подсчет очков 1
let scores = {
  olga: 0,
  oleg: 1,
  dima: 2
};

scores.olga += 2;
console.log(scores);
console.log(Object.keys(scores));
scores['yuriy'] = 5;
console.log(scores); 

// В клубе объектов и массивов
let myCrazyObject = {
  name: 'object',
  'some array': [7, 9, { purpose: 'putaniza', number: 123 }, 3.4],
  'random animal': 'Shark'
}
console.log(myCrazyObject['some array'][2].number);