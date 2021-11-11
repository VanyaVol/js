// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

// let array = [10];
//
// array[0] = Math.floor(Math.random() * 10);
// array[1] = Math.floor(Math.random() * 10);
// array[2] = Math.floor(Math.random() * 10);
// array[3] = Math.floor(Math.random() * 10);
// array[4] = Math.floor(Math.random() * 10);
// array[5] = Math.floor(Math.random() * 10);
// array[6] = Math.floor(Math.random() * 10);
// array[7] = Math.floor(Math.random() * 10);
// array[8] = Math.floor(Math.random() * 10);
// array[9] = Math.floor(Math.random() * 10);
//
// let result = array[0] + array[1] + array[2] + array[3] + array[4] + array[5] + array[6] + array[7] + array[8] + array[9];
//
// console.log(result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

// let book = {
//     title: "JS",
//     numPage: 300,
//     genre: "IT"
// }
//
// console.log(book);

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

// let book = {
//     title: "JS",
//     numPage: 300,
//     genre: "IT",
//     authors: "Хавербеке Морейн"
// }

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

// let book = [
//     {
//         title: "JS",
//         numPage: 300,
//         genre: "IT",
//         authors: "Хавербеке Морейн"
//     },
//     {
//         title: "C++",
//         numPage: 320,
//         genre: "IT",
//         authors: "Хавербеке Морейн"
//     },
//     {
//         title: "JAVA",
//         numPage: 200,
//         genre: "IT",
//         authors: "Хавербеке Морейн"
//     },
//     {
//         title: "C#",
//         numPage: 420,
//         genre: "IT",
//         authors: "Хавербеке Морейн"
//     }
// ];
//
// console.log(book[0], book[1], book[2], book[3]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

// let height = 23;
// let width = 10;
// let s = height * width;
//
// console.log('Площа = ' + s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

// let heightC = 10;
// let dC = 4;
// const PI = 3.14;
// let v = PI * (dC**2) * heightC;
//
// console.log('Об`єм циліндра: ' + Math.floor(v));

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n,2) + Math.pow(m,2));
console.log(`Гіпотенуза: ${k}`);