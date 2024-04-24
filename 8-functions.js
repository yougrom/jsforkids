// функции
// функции это механизм для многократного использования частей кода.
// функции позволяют запускать один и тот же код из разных частей программы без необходимости его копировать
// организация кода виде небольших, легко контролируемых частей позволяет видеть общую картину и думать о строении программы на более высоком уровне.

// базовая устройство функций
function App() {
    console.log('Do something'); // тело функции записывается в фигурных скобках
}

// Наша первая функция
let ourFirstFunction = function () {
    console.log('привет мир');
};
ourFirstFunction ();

// возвращаемое значение это значение которое функция выдает наружу чтобы потом его можно было использовать где угодно в программе
// функция всегда будет возвращать undefined если в теле функции нет указания вернуть что-то другое

// передача аргумента в функцию
// чтобы функция могла изменить поведение в зависимости от значений нам понадобится аргументы
let sayHelloTo = function (name) { // name - имя аргумента
    console.log('привет ' + name + ' !');
};
sayHelloTo('Юрий'); // вызывая функцию которая принимает аргумент введите значение которое вы хотите использовать в качестве этого аргумента В скобках после имени функции.

// Example
let drawCats = function (howManyTimes) {
    for (let i = 0; i < howManyTimes; i++) {
        console.log(i + "=^-^=");
    }
};
drawCats(100);

// передача функцию нескольких аргументов
let myArguments = function (argument1, argument2) {
    console.log('первый аргумент: ' + argument1);
    console.log('второй аргумент: ' + argument2);
};

// Examle
let printManyTimes = function ( howManyTimes, whatToDraw) {
    for (let i = 0; i < howManyTimes; i++) {
        console.log(i + ' ' + whatToDraw); // The purpose of the space is to add a space between the loop counter (i) and the whatToDraw string when it is printed to the console.
    }
};
printManyTimes(15, '=^_^=');

// возврат значения функции
5 + Math.floor(1.2345); // 6

// Math.floor(); функция которая берет переданные число, округлить его вниз до ближайшего целого значения и возвращает результат.

// Examle
let double = function (number) {
    return number * 2;
};
let equal = double(2);
console.log(equal);

// вызов функции в качестве значения
double(5) + double(6); // 22

double(double(3)); // 12

// упрощаем код с помощью функции
randomWords1 = [Math.floor(Math.random) * randomWords1.length];


// Example
let pickRandomWord1 = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};
let randomWords = ['планета', 'червяк', 'цветок', 'компьютер'];
pickRandomWord1(randomWords);


// генератор случайных дразнилок

// генератор случайных фраз - массив
// let randomBodyParts = ['глаз', 'нос', 'череп'];
// let randomAdjectives = ['вонючая', 'унылая', 'дурацкая'];
// let randomNewWords = ['муха', 'выдра', 'дубина', 'мартышка', 'крыса'];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)]; 
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
let randomNewWord = randomNewWords[Math.floor(Math.random() * 5)];
// или можно записать так
let randomBodyPartLenght = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
let randomAdjectiveLenght = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let randomNewWordLenght = randomNewWords[Math.floor(Math.random() * randomNewWords.length)];

let randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomNewWord + " !!!";
console.log(randomInsult); // У тебя череп словно унылая дубина!!!

// или можно записать так

let randomInsultLenght = ["У тебя", randomBodyPartLenght, "словно", randomAdjectiveLenght, randomNewWordLenght, "!!!"].join(" ");
console.log(randomInsultLenght); // У тебя глаз словно унылая мартышка !!!


// генератор случайных дразнилок на функциях
// let pickRandomWord = function (words) {
//     return words[Math.floor(Math.random() * words.length)];
// };

let randomBodyParts = ['глаз', 'нос', 'череп'];
let randomAdjectives = ['вонючая', 'унылая', 'дурацкая'];
let randomNewWords = ['муха', 'выдра', 'дубина', 'мартышка', 'крыса'];

let randomString = 'У тебя ' + pickRandomWord(randomBodyParts) + ' словно ' + pickRandomWord(randomAdjectives) + ' ' + pickRandomWord(randomNewWords) + '!!!';

console.log(randomString); // У тебя череп словно унылая мартышка!!!


// генератор случайных дразнилок на функциях с массивом - оптимизированная
let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};

let generateRandomInsult = function () {
    let randomBodyParts = ['глаз', 'нос', 'череп'];
    let randomAdjectives = ['вонючая', 'унылая', 'дурацкая'];
    let randomNewWords = ['муха', 'выдра', 'дубина', 'мартышка', 'крыса'];
    let randomString = 'У тебя ' + pickRandomWord(randomBodyParts) + ' словно ' + pickRandomWord(randomAdjectives) + ' ' + pickRandomWord(randomNewWords) + '!!!';
    return randomString;
};
console.log(generateRandomInsult()); // У тебя глаз словно унылая мартышка!!!


// ранний выход из функций по Return
// return - это не только способ вернуть значение из функции, но и способ прервать выполнение функции
// return - это способ выйти из функции раньше времени
// return - это способ прервать выполнение функции в любом месте
let fifthLetter = function (name) {
    if (name.length < 5) {
        return;
    }
    return "Пятая буква вашего имени: " + name[4] + ".";
}

let myName = fifthLetter("Youriy")
console.log(myName); // Пятая буква вашего имени: ...


// многократное использование Return вместо конструкций if/else
// Example
let medalForScore = function (score) {
    if (score < 3) {
        return 'бронзовая';
    }
    if (score < 7) {
        return 'серебряная';
    }
        return 'золотая';
};
console.log(medalForScore(5)); // серебряная

// сокращенная запись при создании функций
// Example - функциональное выражение
let double = function (number) {
    return number * 2;
};
// можно записать так - объявление функции
function double(number) {
    return number * 2;
}   

// Exersise 1
// Функция для сложения двух чисел
function add(arg1, arg2) {
    return arg1 + arg2;
}
// Функция для умножения двух чисел
function multiply(arg1, arg2) {
    return arg1 * arg2;
}
let result = add(multiply(36325, 9824), + 777);
console.log(result);

// Exersise 2
function areArraysSame(a, b) {
    if (a.length !== b.length) {
        return false;
    } 
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        } 
    }
    return true;
}
let resultArrays = areArraysSame([1, 4, 3], [1, 2, 3]);
console.log(resultArrays);

// Exersise 2_1
function areArraysSame(a, b) {
    return a.length === b.length && a.every((element, index) => element === b[index]);
}
let resultArrays1 = areArraysSame([1, 4, 3], [1, 2, 3]);
console.log(resultArrays1);  // Output: false

