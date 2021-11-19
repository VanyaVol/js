// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function foo(arg_1, arg_2) {
//     if (arguments.length === 1) {
//         console.log(arg_1);
//     } else if (arguments.length === 2) {
//         console.log(arg_1 + arg_2);
//     }
// }
//
// foo('1','2');

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// function addTwoArrays(array_1,array_2) {
//     let newArray = [];
//     for (let i = 0; i < array_1.length; i++) {
//         newArray[i] = array_1[i] + array_2[i];
//     }
//     return newArray;
// }
//
// let arr_1 = [1,2,3,4,5];
// let arr_2 = [1,2,3,4,5];
//
// console.log(addTwoArrays(arr_1, arr_2));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function keyObjectReturn(arrayObjects) {
//     let keyObj = [];
//     let j = 0;
//     for (const arrayObject of arrayObjects) {
//         for (const arrayObjectKey in arrayObject) {
//             keyObj[j] = arrayObjectKey;
//             j++;
//         }
//     }
//     return keyObj;
// }
//
// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// console.log(keyObjectReturn(arr));

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function keyObjectReturn(arrayObjects) {
//     let keyObj = [];
//     let j = 0;
//     for (const arrayObject of arrayObjects) {
//         for (const arrayObjectKey in arrayObject) {
//             keyObj[j] = arrayObject[arrayObjectKey];
//             j++;
//         }
//     }
//     return keyObj;
// }
//
// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// console.log(keyObjectReturn(arr));