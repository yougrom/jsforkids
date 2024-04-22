// условия и циклы

// условная конструкция - если что-то истина true сделай это, иначе сделай то.
// if (условие) { 
//     // код, который выполнится, если условие верно
// } else {
//     // код, который выполнится, если условие не верно
// }

// цикл это инструкция - до тех пор пока что-то истинно true продолжай делать это.

// условная конструкции
// if 
// and
// if else

// конструкция if
let name1 = "Johnatane";
console.log('Hi ' + name1); // Hi John

if (name1.length > 6) {
    console.log('ну и длинная же у тебя имя ' + name1 ); 
}

// общая структура конструкции if   
// if (условие) { // конструкция if проверяет истинно ли условие
// console.log('делаем что-то'); код, который выполнится, если условие верно - называется телом if
// } 
// конструкция состоит из двух частей условия и тела
// условия должны давать болево значения true или false
// тело if выполняется только если условие истинно true
// если условие ложно false то тело if не выполняется - интерпретатор игнорирует конструкцию if и переходит к следующей строке

// конструкция if else
let name2 = "John";
console.log('Hi ' + name2); // Hi John

if (name2.length > 6) {
    console.log('ну и длинная же у тебя имя ' + name2 ); 
}  else {
    console.log('имя у вас не из длинных');
    }

// общая структура конструкции if else

let lemonChicken = false;
let beefWithBlackBean = true;
let sweetAndSourPork = true;

if (lemonChicken) {
    console.log('отлично я буду курицу с лимоном');
} else if (beefWithBlackBean) {
    console.log('заказываю говядину');
} else if (sweetAndSourPork) {
    console.log('ладно закажу свинину');
} else {
    console.log('что остается рис с яйцом'); // если все условия ложны
}

// Example 1
let myName = 'Yuriy';
let myFathersName = 'Evgeniy';

if (myName === 'Georg') {
console.log('привет Юрий');
} else if (myFathersName === 'Evgeniy') {
console.log('привет папа юрия');
} else if (myMorhersName === 'Maria') {
console.log('привет мама юрия');
} else {
console.log('привет незнакомец');
}

// Example 2
let name3 = "Yuriy";

if (name3 === "your_name") {
    console.log("Hello me!");
} else if (name3 === "dad's_name") {
    console.log("Hello dad!");
} else if (name3 === "mom's_name") {
    console.log("Hello mom!");
} else {
    console.log("Hello, stranger!");
}

// ==========
// циклы
// ==========
// циклы позволяют выполнять фрагмент кода многократно до тех пор пока условие истинно true

// общая структура цикла while - до тех пор пока
// while (условие) { - условия проверяется при каждом повторе цикла
//     // тело цикла console.log('делаем что-то'); - тело цикла выполняется пока условие истинно true (что-то в этом коде должно влиять на условия чтобы в какой-то момент оно дало False)
i++; // i = i + 1; - увеличивает значение переменной i на 1
// }

// Example 1
 

// цикл for
// общая структура цикла for
// for (начало; условие; шаг) {
//     // тело цикла
// }

// Example 1
for (let sheepCounted1 = 0; sheepCounted1 < 10; sheepCounted1++) {
    console.log('посчитано овец: ' + sheepCounted1 + '!!!');
    }
console.log('Xrrrrr-psssss!!!');

// let sheepCounted1 = 0; - код выполняется до начала цикла. Объявляется переменная sheepCounted1 и присваивается начальное значение 0 - для отслеживания количества повторов цикла
// sheepCounted1 < 10; - условие проверяется перед каждым повтором цикла и если оно истинно true то цикл выполняется, если ложно false то цикл прекращается
// sheepCounted1++ - код выполняется после каждого повтора цикла
// тело цикла - console.log('посчитано овец: ' + sheepCounted1 + '!!!'); - выполняется пока условие истинно true

for (let hi = 0; hi < 3; hi++) {
    console.log('hello');
    }

// Example 2
let timesToSayHello = 3;
for (i = 0; i < timesToSayHello; i++) {
console.log('hello');
}

// цикл for массивы и строки
let animals = ['лев', 'фламинго', 'белый медведь', 'удав'];
for (let i = 0; i < animals.length; i++) {
    console.log('В этом зоопарке есть ' + animals[i] + '.');
    }

// Example 3
let name4 = 'Nastya';
for (let i = 0; i < name4.length; i++) {
console.log('В моем имени есть буква: ' + name4[i]);
}

// Example 4
for (let x = 2; x < 10000; x = x * 2) {
    console.log(x);
    }

// Example 5 for
for (let y = 3; y < 10000; y = y * 3) {
    console.log(y);
    }

// Example 6 while
let y1 = 3;
while (y1 < 10000) {
    console.log(y1);
    y1 = y1 * 3;
}

// Example76
let myNameIs = 'Yuriy';
for (let i = 0; i < myNameIs.length; i++) {
    console.log('Spell your name: ' + myNameIs[i]);
}

// Example 8
for (let i = 3; i < 10000; i = i * 3) {
    console.log(i);
}

// Example 9
let animalsNew = ['Cat', 'Dog', 'Fish', 'Rabbit'];
for (let i = 0; i < animalsNew.length; i++) {
    if (animalsNew[i] === 'Cat') {
        console.log('cat is beautiful animal');
    } else if (animalsNew[i] === 'Dog') {
        console.log('dog is beautiful animal');
    } else if (animalsNew[i] === 'Fish') {
        console.log('Fish is beautiful animal');
    } else if (animalsNew[i] === 'Rabbit') {
        console.log('Rabbit is beautiful animal');
    } 
}

// Example 9.1
let animalsNewMax = ['Cat', 'Dog', 'Fish', 'Rabbit'];
for (let i = 0; i < animalsNewMax.length; i++) {
    console.log(`${animalsNewMax[i]} is a beautiful animal`);
}

// Example 10
let alphabet = "абвгдежзийклмнопрстуфхцчшщъыьэюя";
let randomString = "";
let desiredLength = 6; // can change this to any length you want

while (randomString.length < desiredLength) {
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[randomIndex];
}

console.log(randomString); // Outputs a random string of the desired length

// Example 10.1
let alphabet1 = 'abcdefghijklmnopqrstuvwxyz';
let randomString1 = '';
let stringLength = 10; // Define the desired length of the random string

for (let i = 0; i < stringLength; i++) {
    let randomIndex = Math.floor(Math.random() * alphabet1.length); // Correct random index generation
    randomString1 += alphabet1[randomIndex]; // Append random character to the string
}

console.log(randomString1); // Output the random string

// Example 11
let input = 'javascript is awesome';
let output = '';
for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a') {
        output += '4';
    } else if (input[i] === 'e') {
        output += '3';
    } else if (input[i] === 'i') {
        output += '1';
    } else {
        // Добавляем исходный символ только если это не 'a', 'e', 'i'.
        output += input[i];
    }
}
console.log(output);