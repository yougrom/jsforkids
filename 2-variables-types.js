// циклический алгоритм
var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " =^.^=");
    }
};
drawCats(10); // вызов функции


// инкремент и декремент
var highFives = 0;
++highFives;
console.log(highFives); // 1
++highFives;
console.log(highFives); // 2
++highFives;
console.log(highFives); // 3
--highFives;
console.log(highFives); // 2


var highSix = 0;
highSix++;
console.log(highSix); // 1
highSix++;
console.log(highSix); // 2


// Example 1
var x = 10;
x = x + 5;
console.log(x); // 15

// Example 1.1
var score = 10;
score += 7;
console.log(score); // 17 
score -= 3;
console.log(score); // 14 
score += -14
console.log(score); // 0
score += 4
console.log(score); // 4
score += 4
console.log(score); // 8



// Example 1.2 +=, -=,
var balloons = 100;
balloons += 20;
console.log(balloons); // 120
balloons -= 30;
console.log(balloons); // 90
balloons *= 2;
console.log(balloons); // 180
balloons += 20;
console.log(balloons); // 200
balloons /= 4;
console.log(balloons); // 50



// строки - strings - последовательность символов в кавычках
let stringNine = "9";
let numberNine = 9;
let stringSum = stringNine + stringNine;
console.log(stringSum); // 99
let numberSum = numberNine + numberNine;
console.log(numberSum); // 18
let stringNumberSum = stringNine + numberNine;
console.log(stringNumberSum); // 99 - преобразование в строку


// как узнать длину строки?
let string = "Hello, world!";
console.log(string.length); // 13
console.log("Hello, world!".length); // 13

let Java = "Java";
let Script = "Script";
let stringLength = Java + Script;
console.log(stringLength.length); // 10

let newWord = "привет меня зовут Юрий, я живу в Берлине";
console.log(newWord.length);

// как получить символ строки по индексу?
let myName = "herrGromov";
console.log(myName[0]); // h
console.log(myName[1]); // e
console.log(myName[2]); // r
console.log(myName[3]); // r
console.log(myName[4]); // G
console.log(myName[5]); // r
console.log(myName[6]); // o
console.log(myName[7]); // m    
console.log(myName[8]); // o
console.log(myName[9]); // v
console.log("herrGromov".length); // 10

// Code Word - Secret code
let codeWord1 = "are";
let codeWord2 = "tubas";
let codeWord3 = "unsafe";
let codeWord4 = "?!";
console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1]); // result: run!


// getting a string slice - получение среза строки
// Slice - это часть строки, которая начинается с определенного символа и заканчивается определенным // символом.
let longString = "My long string is long and boring and hard to read and hard to write";
// longString.slice(3, 15); // long string
// console.log(longString.slice(34, 44)); //         

// longString.slice(13, 45).length; // 11
// console.log(longString.slice(44, 50))
; //
console.log(longString.slice(3, 15)[0]);
console.log(longString.slice(3, 15)[1]);
console.log(longString.slice(3, 15)[2]);
console.log(longString.slice(3, 15)[3]);


// convert a string to uppercase or lowercase - преобразование строки в верхний или нижний регистр
let upperCase = "Hello, world!";
console.log(upperCase.toUpperCase()); // HELLO, WORLD!

let lowerCase = "HELLO, WORLD!";
console.log(lowerCase.toLowerCase()); // hello, world!

// Task 1
let invalidCase = "hELLO, wORLD!";
let validLowerCase = invalidCase.toLowerCase(); // hello, world!
let validUpperCase1 = validLowerCase[0].toLocaleUpperCase(); // H
let validUpperCase2 = validLowerCase[7].toLocaleUpperCase(); // W
// variation 1
//let fullValidString = validUpperCase1 + "ello, " + validUpperCase2 + "orld!";  // Hello, World!
// variation 2
// Variation answer 2
let restOfString1 = validLowerCase.slice(1, 6);  // ello,
let restOfString2 = validLowerCase.slice(8);    // orld!
let fullValidString2 = validUpperCase1 + restOfString1 + ' ' + validUpperCase2 + restOfString2;   // Hello, World!
console.log(fullValidString2); // Hello, World!


// Boolean - булевы значения - true or false - истина или ложь
let javascriptIsCool = true;
javascriptIsCool; // true

// logical operations - логические операции - && - и, || - или, ! - не

// && - и
// возвращает true, если оба значения истинны
// возвращает false, если хотя бы одно значение ложно
// возвращает false, если оба значения ложны
// Example
let hedShower = true;
let breakfast = false;
hedShower && breakfast; // false
console.log(hedShower && breakfast);    // false

// || - или — использовать, когда нужно проверить, что хотя бы одно из значений истинно
// возвращает true, если хотя бы одно значение истинно  
// возвращает false, если оба значения ложны
let hasOranges = true;
let hasApples = false;
console.log(hasOranges || hasApples); // Pipes - Трубы

// ! - не
// возвращает true, если значение ложно
// возвращает false, если значение истинно

// Example 1
let isWeekend = true;
let needToShowerToday = !isWeekend;
console.log(needToShowerToday); // false

// Example 2
let hasOrange = true;
let hadShower = true;
let shouldGoToSchool = !isWeekend && hadShower && (hasOrange || hasApples); // && Выполняется прежде чем ||
console.log(shouldGoToSchool); // true



// сравнение чисел с помощью булевых значений
// Example 1 > - больше
let height = 155;
let heightRestriction = 150;
console.log(height > heightRestriction); // true

// Example 2 > - больше
let height2 = 150;
let heightRestriction2 = 150;
console.log(height2 > heightRestriction2);  // false

// Example 3 >= - больше или равно
let height3 = 150;
let heightRestriction3 = 150;
console.log(height3 >= heightRestriction3); // true

// Example 4 < - меньше
let height4 = 150;
let heightRestriction4 = 120;
console.log(height4 < heightRestriction4); // false

// Example 5 <= - меньше или равно
let height5 = 120;
let heightRestriction5 = 120;
console.log(height5 <= heightRestriction5); // true


// === - равно
let mySecretNumber = 5;
let friendGustav = 3;
console.log(mySecretNumber === friendGustav);   // false
let friendAlbert = 7;
console.log(mySecretNumber === friendAlbert);   // false
let friendEinstein = 5;
console.log(mySecretNumber === friendEinstein); // true



// == - двойное равно - сравнение с преобразованием типов   
let strictNumber = 5;
let looseNumber = "5";
console.log(strictNumber === looseNumber); // false
console.log(strictNumber == looseNumber);  // true

// Task 1
let mySonAge = 12;
let myAge = 36;
let ageFamily = mySonAge + myAge;   // 48
let ageLimit = 13;
console.log(mySonAge > ageLimit); // false
console.log(ageFamily > ageLimit);  // true

// Task 2
let age = 11;
let accompanied = true;
let limitAge = 12;
console.log(age > limitAge);   // false


// undefined and null - неопределенность и пустота  
// undefined - неопределенность - JavaScript use undefined when no other value can be found
let myVariable;
console.log(myVariable); // undefined

// null - пустота - JavaScript use null when there is no value, but it is known 
// - null нужен чтобы явно показать отсутствие значения

let myNullVariable = null;
console.log(myNullVariable); // null




// Task 1
// У тебя есть переменная totalMoney со значением 500. 
//Используя оператор +=, увеличь ее значение на 100.
let totalMoney = 500;
totalMoney += 100;
console.log(totalMoney); // 600

//У пользователя есть переменная currentScore со значением 75. С помощью оператора -= уменьши ее значение на 25.

// У пользователя есть переменная currentScore со значением 75. С помощью оператора -= уменьши ее значение на 25.

let currentScore = 75;
currentScore -=25;
consle.log(currentScore); // 50


// У тебя есть переменная initialValue со значением 10. С помощью оператора *= умножь ее значение на 3.
let initialValue = 10;
initialValue *= 3; 
consle.log(initialValue); // 30

//У пользователя есть переменная totalDistance со значением 200. С помощью оператора /= раздели ее значение на 2.
let totalDistance = 200;
totalDistance /= 2;
consle.log(totalDistance); // 100

//У тебя есть переменная counter со значением 5. Используя оператор +=, увеличь ее значение на 2
let counter = 5;
counter += 2;
consle.log(counter); // 7


//Напиши функцию, которая принимает строку и возвращает первый символ этой строки.
function getFirstSymbol(str) {
    return str[0];
}
console.log(getFirstSymbol("Hello")); // H