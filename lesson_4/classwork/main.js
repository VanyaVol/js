// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function min(num_1, num_2, num_3) {
//     if ((num_1 < num_2) && (num_1 < num_3)) {
//         return num_1;
//     } else if ((num_2 < num_3) && (num_2 < num_1)) {
//         return num_2;
//     } else return num_3;
// }
//
// console.log(min(1, 4, 2,));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function max(num_1, num_2, num_3) {
//     if ((num_1 > num_2) && (num_1 > num_3)) {
//         return num_1;
//     } else if ((num_2 > num_3) && (num_2 > num_1)) {
//         return num_2;
//     } else return num_3;
// }
//
// console.log(max(99, 4, 2,));

// - створити функцію яка повертає найбільше число з масиву

// function maxArray(array) {
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (max < array[i+1]){
//             max = array[i+1];
//         }
//     }
//     return max;
// }
//
// let array = [1,2,3,4,5,6,7,8,9,0,111,3,455,1,5,441,155,134];
//
// console.log(maxArray(array));

// - створити функцію яка повертає найменьше число з масиву

// function minArray(array) {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (min > array[i+1]){
//             min = array[i+1];
//         }
//     }
//     return min;
// }
//
// let array = [1,2,3,4,5,6,7,8,9,-10,111,3,455,1,5,441,155,134];
//
// console.log(minArray(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function sumArray(array) {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum;
// }
//
// let array = [1,2,3,4,5,6,7,8,9,111,3,455,1,5,441,155,134];
//
// console.log(sumArray(array));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function sumArray(array) {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return Math.round(sum / array.length);
// }
//
// let array = [1,2,3,4,5,6,7,8,9,111,3,455,1,5,441,155,134];
//
// console.log(sumArray(array));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function maxMinReturn() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (max < arguments[i + 1]) {
//             max = arguments[i + 1];
//         }
//     }
//     console.log(`Найбільше число:  ${max}`);
//     for (let i = 0; i < arguments.length; i++) {
//         if (min > arguments[i + 1]) {
//             min = arguments[i + 1];
//         }
//     }
//     return min;
// }
//
// console.log(maxMinReturn(1, -2, 3, 99, 5, 6, 7, 8));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function randomArray(emptyArray,sizeArray) {
//     for (let i = 0; i < sizeArray; i++) {
//         emptyArray[i] = Math.round(Math.random()*100);
//     }
//     return emptyArray;
// }
//
// let arr = [];
// console.log(randomArray(arr, 10));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomArray(emptyArray,sizeArray, limit = 10) {
//     for (let i = 0; i < sizeArray; i++) {
//         emptyArray[i] = Math.round(Math.random()* limit);
//     }
//     return emptyArray;
// }
//
// let arr = [];
// console.log(randomArray(arr, 10, 100));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function reverseArray(array) {
//     let arr = [];
//     let j = 0;
//     for (let i = array.length-1; i >= 0; i--) {
//         arr[j] = array[i];
//         j++;
//     }
//     return arr;
// }
//
// let arr = [1,2,3,4,5,6]
//
// console.log(reverseArray(arr));