// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('Введіть число від 0 до 59: ');
// if ((time >= 0) && (time < 15)) {
//     console.log('Число попадає в першу частину години');
// } else if ((time >= 15) && (time < 30)) {
//     console.log('Число попадає в другу частину години');
// } else if ((time >= 30) && (time < 45)) {
//     console.log('Число попадає в третю частину години');
// } else if ((time >= 45) && (time <= 59)) {
//     console.log('Число попадає в четверту частину години');
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt('Введіть число від 1 до 31: ');
// if ((day >= 1) && (day <= 10)) {
//     console.log('Число попадає в першу частину декади');
// } else if ((day >= 11) && (day <= 20)) {
//     console.log('Число попадає в другу частину декади');
// } else if ((day >= 21) && (day <= 31)) {
//     console.log('Число попадає в третю частину декади');
// }

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = false;
// if (!!test) {
//     console.log('Вірно');
// } else {
//     console.log('Неправильно');
// }

// let test = true;
// !!test?console.log('Вірно'):console.log('Неправильно');

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = +prompt('Введіть число: ');
// if (a === 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let dayWeek = +prompt('Введіть порядковий номер дня тижня: ');
// switch (dayWeek) {
//     case 1: {
//         console.log('Зробити ДЗ по JS');
//         break;
//     }
//     case 2: {
//         console.log('Зробити ремонт вдома');
//         break;
//     }
//     case 3: {
//         console.log('Поїхати у відпустку');
//         break;
//     }
//     case 4: {
//         console.log('Почистити зуби');
//         break;
//     }
//     case 5: {
//         console.log('Зробити ДЗ по JS');
//         break;
//     }
//     case 6: {
//         console.log('Сходити в магазин');
//         break;
//     }
//     case 7: {
//         console.log('Зробити ДЗ по JS');
//         break;
//     }
// }

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = +prompt('Введіть рік: ');
// if (year % 4 === 0) {
//     console.log('Введений рік є високосним');
// } else {
//     console.log('Введений рік не є високосним');
// }

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let jsName = prompt('Яка «офіційна» назва JavaScript?');
// if (jsName === 'ECMAScript') {
//     console.log('Правильно');
// } else {
//     console.log('Не знаєте? ECMAScript!')
// }