// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і b

// function rectangleSquare(num_1, num_2) {
//     return num_1 * num_2;
// }
// console.log(rectangleSquare(3, 3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circleS(radius) {
//     return Math.round(Math.pow((Math.PI * radius),2));
// }
// console.log(circleS(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinderS(hight, radius) {
//     return Math.round(2 * Math.PI * radius * (hight + radius));
// }
// console.log(cylinderS(2, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

// function arrayLog (array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
// let array = [1,2,4,5,true,'string'];
// arrayLog(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function createTagP (textParagraph) {
//     document.write(`
//     <p>${textParagraph}</p>
//     `);
// }
// createTagP('Hello i am is paragraph');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function createUlLi (textElementLi) {
//     document.write(`
//     <ul>
//         <li>${textElementLi}</li>
//         <li>${textElementLi}</li>
//         <li>${textElementLi}</li>
//     </ul>
//     `);
// }
// createUlLi('Item');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function createUlLi (textElementLi,size) {
//     document.write(`<ul>`);
//     for (let i = 0; i < size; i++) {
//         document.write(`
//         <li>${textElementLi}</li>
//     `);
//     }
//     document.write(`</ul>`);
// }
//
// createUlLi('hello',100);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function list(arrayList) {
//     document.write(`<ul>`);
//     for (const arrayListElement of arrayList) {
//         document.write(`
//             <li>${arrayListElement}</li>
//         `);
//     }
//     document.write(`</ul>`);
// }
//
// let array = ['string',1222,true,2332,'bool'];
//
// list(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function createBlock(arrayObjects) {
//     document.write(`<div>`);
//     for (const arrayObject of arrayObjects) {
//         document.write(`<div>`);
//         for (const arrayObjectKey in arrayObject) {
//             document.write(`</br>${arrayObjectKey} ${arrayObject[arrayObjectKey]}`);
//         }
//         document.write(`</div>`);
//     }
//     document.write(`</div>`);
// }
//
// let arr = [
//     {
//         id: 1,
//         name: 'Ivan',
//         age:21
//     },
//     {
//         id: 2,
//         name: 'Andrey',
//         age:21
//     },
//     {
//         id: 3,
//         name: 'Kolya',
//         age:22
//     },
//     {
//         id: 4,
//         name: 'Taras',
//         age:24
//     }
// ];
//
// createBlock(arr);



