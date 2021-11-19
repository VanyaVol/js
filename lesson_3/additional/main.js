// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

// let array = [];
// let i = 0;
// while (array.length < 50) {
//     let random = Math.floor(Math.random() * 100);
//     if (random % 2 === 0) {
//         array[i] = random;
//         i++;
//     }
// }
// console.log(array);

//     b. заповнити його 50 непарними числами за допомоги циклу.

// let array = [];
// let i = 0;
// while (array.length < 50) {
//     let random = Math.floor(Math.random() * 100);
//     if (random % 2 === 1) {
//         array[i] = random;
//         i++;
//     }
// }
// console.log(array);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let array = [];
// let i = 0;
// while (i < 20) {
//         array[i] =  Math.floor(Math.random() * 100);
//         i++;
// }
// console.log(array);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let array = [];
// let i = 0;
// while (i < 20) {
//         array[i] =  Math.floor(Math.random() * (732-8)+8);
//         i++;
// }
// console.log(array);

// 2. Вивести за допомогою console.log кожен третій елемен

// let array = [];
// let i = 0;
// while (i < 20) {
//         array[i] =  Math.floor(Math.random() * 100);
//         i++;
// }
//
// for (let j = 0; j < array.length; j++) {
//     if (j % 3 === 0 ) {
//         console.log(`${array[j]} index ${j}`);
//     }
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let array = [];
// let i = 0;
// while (i < 20) {
//         array[i] =  Math.floor(Math.random() * 100);
//         i++;
// }
//
// for (let j = 0; j < array.length; j++) {
//     if ((j % 3 === 0 ) && (array[j] % 2 ===0)) {
//         console.log(`${array[j]} index ${j}`);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let array = [];
// let arrayNew = [];
// let i = 0;
// while (i < 20) {
//         array[i] =  Math.floor(Math.random() * 100);
//         i++;
// }
//
// let k = 0;
// for (let j = 0; j < array.length; j++) {
//     if ((j % 3 === 0 ) && (array[j] % 2 ===0)) {
//         arrayNew[k] = array[j];
//         k++;
//     }
// }
//
// console.log(array);
// console.log(arrayNew);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let array = [];
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.floor(Math.random() * 100);
// }
//
// for (let i = 0; i < 20; i++) {
//     if (array[i+1] % 2 === 0)  {
//         console.log(array[i]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let array = [100,250,50,168,120,345,188];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
//
// console.log(`Середній чек становить: ${Math.round(sum / array.length)} грн`);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let array = [];
// let arrayNew = [];
//
// for (let i = 0; i < 50; i++) {
//     array[i] =  Math.floor(Math.random() * 100);
// }
//
// for (let j = 0; j < array.length; j++) {
//         arrayNew[j] = array[j] * 5;
// }
//
// console.log(array);
// console.log(arrayNew);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let array = ['okten', 12, '214', 411, true, 44, false, 'hello'];
// let arrayNew = [];
// let i = 0;
// for (const arrayElement of array) {
//     if (typeof arrayElement === "number") {
//         arrayNew[i] = arrayElement;
//         i++;
//     }
// }
// console.log(arrayNew);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:

//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let usersWithCities = [];
//
// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; j < citiesWithId.length; j++) {
//         if (usersWithId[i].id === citiesWithId[j].user_id) {
//             usersWithCities[i] = usersWithId[i];
//             usersWithCities[i].adress = citiesWithId[j];
//         }
//     }
// }
//
// console.log(usersWithCities);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let array = [];
// for (let i = 0; i < 10; i++) {
//     array[i] = Math.round(Math.random()*20);
// }
// for (const arrayElement of array) {
//     if (arrayElement % 2 === 0) {
//         console.log(arrayElement);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let array = [];
// let arrayNew = [];
//
// for (let i = 0; i < 10; i++) {
//     array[i] = Math.round(Math.random()*20);
// }
//
// for (let i = 0; i < array.length; i++) {
//     arrayNew[i] = array[i];
// }
// console.log(array);
// console.log(arrayNew);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arrStr = ['a', 'b', 'c'];
// let str = '';
// for (let i = 0; i < arrStr.length; i++) {
//     str += arrStr[i];
// }
// console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let arrStr = ['a', 'b', 'c'];
// let str = '';
// let i = 0;
// while (i < arrStr.length) {
//     str += arrStr[i];
//     i++;
// }
// console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let arrStr = ['a', 'b', 'c'];
// let str = '';
// for (const string of arrStr) {
//     str += string;
// }
// console.log(str);