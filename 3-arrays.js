// Arrays
let dinosaurs = ['tiranosaurus', 
                'triceratops', 
                'stegosaurus', 
                'brachiosaurus', 
                'pterodactyl', 
                'allosaurus', 
                'apatosaurus', 
                'dilophosaurus'
            ];
// доступ к элементам массива осуществляется по индексу
                console.log(dinosaurs[2]); // stegosaurus
                console.log(dinosaurs[0]); // tiranosaurus
                console.log(dinosaurs.slice([2], [5]));
                dinosaurs.push('Cat');
                dinosaurs.unshift('Dog');
                console.log(dinosaurs);
                console.log(dinosaurs.join(', '));

// создание и изменение элементов массива
dinosaurs[0] = 'tyrannosaurus rex';
console.log(dinosaurs); // ["tyrannosaurus rex", "triceratops", "stegosaurus", "brachiosaurus", "pterodactyl", "allosaurus", "apatosaurus", "dilophosaurus"]

let dinosaursFirst = [];
dinosaursFirst[0] = 'tyrannosaurus rex';
dinosaursFirst[1] = 'triceratops';
dinosaursFirst[2] = 'stegosaurus';
dinosaursFirst[3] = 'brachiosaurus';
console.log(dinosaursFirst); // ["tyrannosaurus rex", "triceratops", "stegosaurus", "brachiosaurus"]

dinosaursFirst[10] = 'pterodactyl';
console.log(dinosaursFirst); // ["tyrannosaurus rex", "triceratops", "stegosaurus", "brachiosaurus", empty × 6, "pterodactyl"]


// разные типы данных в одном массиве
let dinosaursAndNumbers = ['tyrannosaurus rex', 10000, ['apatosaurus', 3.1234], 10];
console.log(dinosaursAndNumbers[2][1]); // 3.1234

// работаем с массивами 
// — работать с массивом помогают свойства и методы
//   — свойства — это переменные, которые хранят информацию о массиве
//   — методы — это функции, которые выполняют действия с массивом, то есть либо изменяет его либо возвращают новый массив.

// длина массива
let dinosaursLength = ['brachiosaurus', 'pterodactyl', 'tyrannosaurus rex', 'triceratops', 'stegosaurus'];
console.log(dinosaursLength.lenght); // 5
console.log(dinosaursLength[dinosaursLength.lenght - 1]); // stegosaurus



// добавление элементов в массив
// метод push добавляет элемент в конец массива
let animals = [];
animals.push('Cat');
animals.push('Dog');
animals.push('Cow');

console.log(animals); // ["Cat", "Dog", "Cow"]
console.log(animals.lenght); // 3
console.log(animals[animals.lenght - 1]); // Cow

animals[1] = 'Good Dog';
console.log(animals); // ["Cat", "Good Dog", "Cow"]
// запуск методов в программировании называется — вызовом метода
// при вызове метода Push происходит две вещи:
// 1. В массив добавляется элемент указанный в скобках
// 2. Метод задаёт новую длину массива

// метод unshift добавляет элемент в начало массива
animals.unshift('Lama');
console.log(animals); // ["Lama", "Cat", "Good Dog", "Cow"]

// удаление элементов из массива
// метод pop удаляет последний элемент массива

// сохраняем переменную
let lastAnimal = animals.pop();
console.log(lastAnimal); // Cow
console.log(animals); // ["Lama", "Cat", "Good Dog"]

let lastAnimalNew = animal.pop();
console.log(lastAnimalNew); // Good Dog
console.log(animals); // ["Lama", "Cat"]

// не сохраняем переменную
console.log(animals.pop()); // Cat
console.log(animals); // ["Lama"]

// метод unshift добавляют элемент в начало массива
console.log(animals.unshift(lastAnimal));
console.log(animals); // ["Cow", "Lama"]

// метод shift удаляет первый элемент массива
let firstAnimal = animals.shift();
console.log(animals); // ["Lama"]
console.log(firstAnimal); // Cow


// методы unshift и shift добавляют и удаляют элементы с начала массива.
// методы push и pop добавляют и удаляют элементы с конца массива.


// объединение массивов 
let furryAnimals = ['Alpaca', 'Ring-tailed Lemur', 'Yeti'];
let scalyAnimals = ['Boa Constrictor', 'Godzilla'];
let furryAndScallyAnimals = furryAnimals.concat(scalyAnimals);
console.log(furryAndScallyAnimals); // ["Alpaca", "Ring-tailed Lemur", "Yeti", "Boa Constrictor", "Godzilla"]

// объединение больше двух массивов
let featheredAnimals = ['Macaw', 'Dodo'];
let allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
console.log(allAnimals); // ["Alpaca", "Ring-tailed Lemur", "Yeti", "Boa Constrictor", "Godzilla", "Macaw", "Dodo"]

// поиск индекса элементов в массиве
let colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
console.log(colors.indexOf('blue')); // 2
console.log(colors[2]); // blue

// если элемента нет в массиве, то метод indexOf вернёт -1
console.log(colors.indexOf('pink')); // -1


// простой способ получения последнего элемента массива
console.log(colors.length); // 6 - элементов массива всегда на одну позицию больше, чем длина массива
// последний элемент массива всегда находится на одну позицию меньше, чем длина массива
console.log(colors[colors.length - 1]); // purple
// мы попросили джаваскрипт вернуть элемент из нашего массива, который находится на позиции 5 (6 - 1) и он вернул нам элемент purple.

// поиск индекса элемента в массиве
console.log(colors.indexOf('purple')); // 5

// поиск индекса элемента, которого нет в массиве
console.log(colors.indexOf('pink')); // -1 - если элемента нет в массиве, то метод indexOf вернёт -1
// если элемент в массиве встречается больше чем один раз, то метод indexOf вернёт индекс первого вхождения элемента в массив.


// превращаем массив в строку с помощью метода .join() - метод .join() возвращает строку которую записаны элементы массива, разделённые запятой
let boringAnimals = ['Monkey', 'Cat', 'Fish', 'Lizard'];
console.log(boringAnimals.join()); // Monkey,Cat,Fish,Lizard
// можно указать разделитель в скобках если мы не хотим использовать запятую .join(' - ');
console.log(boringAnimals.join(' - ')); // Monkey - Cat - Fish - Lizard
console.log(boringAnimals.join(' ')); // Monkey Cat Fish Lizard

// если в массиве хранятся не строковое значения, то метод Join преобразует их в строки
let numbers = [11, 04, 1987];
console.log(numbers.join(' ')); // 11 04 1987
console.log(numbers.join('-')); // 11-04-1987



// что полезного можно сделать с массивами
// метод .push(); и .pop();
let landmarks = [];
landmarks.push('My location'); // добавляем элемент в конец массива с помощью метода .push();
landmarks.push('My location 2');
landmarks.push('My location 3');
console.log(landmarks); // ["My location", "My location 2", "My location 3"]

landmarks.pop(); // удаляем последний элемент массива с помощью метода .pop();  
console.log(landmarks); // ["My location", "My location 2"]
landmarks.pop();
console.log(landmarks); // ["My location"]


// Math.random() - возвращает случайное число от 0 до 1 (не включая 1)
console.log(Math.random()); // 0.123456789
console.log(Math.random()); // 0.987654321

// Math.random() * 10 - возвращает случайное число от 0 до 10 (не включая 10)
console.log(Math.random() * 10); // 0.123456789 * 10 = 1.23456789
console.log(Math.random() * 10); // 0.987654321 * 10 = 9.87654321

// Math.floor() - округляет число в меньшую сторону до целого числа (отбрасывает дробную часть)
console.log(Math.floor(1.23456789)); // 1
console.log(Math.floor(9.87654321)); // 9

// Math.floor(Math.random() * 10) - возвращает случайное число от 0 до 9 (не включая 10)
console.log(Math.floor(Math.random() * 4)); // 0, 1, 2, 3 

let lenghtArr = Math.random();
console.log(Math.floor(lenghtArr() * 7)); // 0, 1, 2, 3, 4, 5, 6

// Example
let randomWords = ['Планета', 'Звезда', 'Галактика', 'Космос']; 
let randomIndeks = Math.floor(Math.random() * 4);
console.log(randomWords[randomIndeks]); // Звезда, Галактика, Космос, Планета - случайное слово из массива
// или  можно записать так
console.log(randomWords[Math.floor(Math.random() * 4)]); // Звезда, Галактика, Космос, Планета - случайное слово из массива


// Example
let phrases = ['Звучит неплохо', 
            'Да, это определённо надо сделать', 
            'Не думаю, что это хорошая идея', 
            'Может, не сегодня?', 
            'Компьютер говорит нет'];
console.log(phrases[Math.floor(Math.random() * 5)]); // Звучит неплохо, Да, это определённо надо сделать, Не думаю, что это хорошая идея, Может, не сегодня?, Компьютер говорит нет - случайное слово из массива


// генератор случайных фраз
let randomBodyParts = ['глаз', 'нос', 'череп'];
let randomAdjectives = ['вонючая', 'унылая', 'дурацкая'];
let randomNewWords = ['муха', 'выдра', 'дубина', 'мартышка', 'крыса'];

// let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)]; 
// let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// let randomNewWord = randomNewWords[Math.floor(Math.random() * 5)];
// или можно записать так
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let randomNewWord = randomNewWords[Math.floor(Math.random() * randomNewWords.length)];

let randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomNewWord + " !!!";
console.log(randomInsult); // У тебя череп словно унылая дубина!!!

// или можно записать так

let randomInsultLenght = ["У тебя", randomBodyPart, "словно", randomAdjective, randomNewWord, "!!!"].join(" ");
console.log(randomInsultLenght); // У тебя глаз словно унылая мартышка !!!


// Example - Home Task
let bodyParts = ['nose', 'bally', 'ass', 'albow'];
let adjectives = ['funnier', 'longer', 'wider', 'shorter'];
let animalBodyParts = ['claw', 'tale', 'paw', 'cloaca'];
let animalsDifferent = ['turtle', 'camel', 'wolf', 'lobster'];

let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)]; 
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let animalBodyPart = animalBodyParts[Math.floor(Math.random() * animalBodyParts.length)];
let animalNew = animalsDifferent[Math.floor(Math.random() * animalsDifferent.length)];

let randomShit = 'You have ' + bodyPart + ' even ' + adjective + ' than ' + animalNew + '`s '  + animalBodyPart + '!!!'; 
console.log(randomShit); 

let randomShitJoin = ['You have', bodyPart, 'even', adjective, 'than', animalBodyPart, 'of', animalNew].join(' ');
console.log(randomShitJoin); 