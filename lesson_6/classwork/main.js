// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// let normalizeNameAndLastName = (strName) => {
//     strName = strName
//         .replaceAll('.', ' ')
//         .replaceAll('-', ' ')
//         .replaceAll('_', ' ')
//         .trim().split(' ');
//     let arr = [];
//     strName.forEach((value, index) => {
//         if (value !== '') {
//             arr.push(value);
//         }
//     });
//     return arr.join(' ');
// }
//
// console.log(normalizeNameAndLastName(n1));
// console.log(normalizeNameAndLastName(n2));
// console.log(normalizeNameAndLastName(n3));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let array = [];
//
// let createRandomArray = (array, lengthArray, randomLimit) => {
//     for (let i = 0; i < lengthArray; i++) {
//         array.push(Math.round(Math.random() * randomLimit));
//     }
//     return array;
// }
//
// console.log(createRandomArray(array, 10, 100));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let array = [];
//
// let createRandomArray = (array, lengthArray, randomLimit) => {
//     for (let i = 0; i < lengthArray; i++) {
//         array.push(Math.round(Math.random() * randomLimit));
//     }
//     return array;
// }
//
// console.log(createRandomArray(array, 10, 100).sort((a, b) => a - b));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let array = [];
//
// let createRandomArray = (array, lengthArray, randomLimit) => {
//     for (let i = 0; i < lengthArray; i++) {
//         array.push(Math.round(Math.random() * randomLimit));
//     }
//     return array;
// }
//
// console.log(createRandomArray(array, 10, 100).filter(value => value % 2 === 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let array = [];
//
// let createRandomArray = (array, lengthArray, randomLimit) => {
//     for (let i = 0; i < lengthArray; i++) {
//         array.push(Math.round(Math.random() * randomLimit));
//     }
//     return array;
// }
//
// console.log(createRandomArray(array, 10, 100).map(value => value.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let array = [];
//
// let createRandomArray = (array, lengthArray, randomLimit) => {
//     for (let i = 0; i < lengthArray; i++) {
//         array.push(Math.round(Math.random() * randomLimit));
//     }
//     return array;
// }
//
// array = createRandomArray(array, 10, 100);
//
// let sortNums = (array, direction) => {
//     switch (direction) {
//         case 'ascending': {
//             return array.sort((a, b) => b - a);
//         }
//         case 'descending': {
//             return array.sort((a, b) => a - b);
//         }
//         default: {
//             return -1;
//         }
//     }
// }
//
// console.log(sortNums(array, 'descending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let str = 'наслаждение';
//
// let cutString = (string, lengthCut) => {
//     let arr = [];
//     for (let i = 0; i < string.length; i++) {
//         if (i % lengthCut === 0) {
//             arr.push(string.slice(i, i + lengthCut));
//         }
//     }
//     return arr;
// }
//
// console.log(cutString(str, 3));
