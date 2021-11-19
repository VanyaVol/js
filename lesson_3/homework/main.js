// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arrayNum = [10,20,40,33,45];
// let arrayStr = ["hello","okten","school","ok10","work"];
// let arrayNumStrBool = ["okten",20,true,33,"school"];
// console.log(arrayNum);
// console.log(arrayStr);
// console.log(arrayNumStrBool);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arrayEmpty = [];
// arrayEmpty[0] = 'hello';
// arrayEmpty[1] = 5;
// arrayEmpty[2] = true;

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10 ; i++) {
//     document.write(`<div>Block</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10 ; i++) {
//     document.write(`<div>Block ${i}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0
// while (i < 20){
//     document.write(`<h1>Block H1</h1>`);
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0
// while (i < 20){
//     document.write(`<h1>Block - ${i+1}</h1>`);
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arrayNum = [1,2,3,4,22,41,51,55,11,44];
// for (let i = 0; i < arrayNum.length; i++) {
//     console.log(arrayNum[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arrayNum = ['one','two','three','four','work','life','hello','okten','ok10','school'];
// for (const stringElem of arrayNum) {
//     console.log(stringElem);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arrayNum = [true,2,'3',4,22,'41',51,false,'OKTEN',44];
// for (let i = 0; i < arrayNum.length; i++) {
//     console.log(arrayNum[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arrayNum = [true, 2, '3', 4, 22, '41', 51, false, 'OKTEN', 44];
// for (let i = 0; i < arrayNum.length; i++) {
//     if (typeof arrayNum[i] === 'boolean') {
//         console.log(arrayNum[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arrayNum = [true, 2, '3', 4, 22, '41', 51, false, 'OKTEN', 44];
// for (const arrayNumElement of arrayNum) {
//     if (typeof arrayNumElement === 'number') {
//         console.log(arrayNumElement);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arrayNum = [true, 2, '3', 4, 22, '41', 51, false, 'OKTEN', 44];
// for (const arrayNumElement of arrayNum) {
//     if (typeof arrayNumElement === 'string') {
//         console.log(arrayNumElement);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arrayNum = [true, 2, '3', 4, 22, '41', 51, false, 'OKTEN', 44];
// for (let i = 0; i < arrayNum.length; i++) {
//     console.log(arrayNum[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(`Поточний крок ${i}`);
//     document.write(`Поточний крок ${i}</br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(`Поточний крок ${i}`);
//     document.write(`Поточний крок ${i}</br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i = i + 2) {
//     console.log(`Поточний крок ${i}`);
//     document.write(`Поточний крок ${i}</br>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(`Поточний крок ${i}`);
//         document.write(`Поточний крок ${i}</br>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(`Поточний крок ${i}`);
//         document.write(`Поточний крок ${i}</br>`);
//     }
// }