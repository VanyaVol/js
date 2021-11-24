// - Дано натуральное число n. Выведите все числа от 1 до n.

// let naturalNumberWriter = (toNumber) => {
//     for (let i = 0; i < toNumber+1 ; i++) {
//         console.log(`Натуральне число: ${i}`);
//     }
// }
//
// naturalNumberWriter(100);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let writerIntNumbers = (a,b) => {
//     if (b > a) {
//         for (let i = a; i <= b ; i++) {
//             console.log(i);
//         }
//     } else if (a > b) {
//         for (let i = a; i >= b ; i--) {
//             console.log(i);
//         }
//     }
// }
//
// writerIntNumbers(30,20);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let changeArrayElementIndex = (array, pointer) => {
//     let temp = array[pointer + 1];
//     array[pointer + 1] = array[pointer];
//     array[pointer] = temp;
//     return array;
// }
//
// console.log(changeArrayElementIndex([9, 8, 0, 4], 1));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arrayRandom = () => {
//     let array = [];
//     let lengthArray = Math.round(Math.random() * 100) + 2;
//     for (let i = 0; i < lengthArray; i++) {
//         array[i] = Math.round(Math.random() * 9);
//     }
//     return array;
// }
//
// let array = arrayRandom();
//
// let transferEndZeroElement = (array) => {
//     let j = 0;
//     let arr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]) {
//             arr[j] = array[i];
//                 j++;
//         }
//     }
//     for (let i = 0; i < array.length; i++) {
//         if (arr[i] === undefined) {
//             arr[i] = 0;
//         }
//     }
//     return arr;
// }
//
// console.log(array);
//
// console.log(transferEndZeroElement(array));

