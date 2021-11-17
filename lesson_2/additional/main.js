// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
//     кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// if (friends.length >= 3 ) {
//     alert('Це великий масив, в якому  3 і більше елементів');
// } else {
//     alert('Це маленький масив, в якому менше 3-х елементів');
// }

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

// let arrNumThree = [5, 6, 3];
// if (((arrNumThree[0] > arrNumThree[1]) && (arrNumThree[0] < arrNumThree[2])) || ((arrNumThree[0] < arrNumThree[1]) && (arrNumThree[0] > arrNumThree[2]))) {
//     console.log(arrNumThree[0]);
// } else if (((arrNumThree[1] > arrNumThree[0]) && (arrNumThree[1] < arrNumThree[2])) || ((arrNumThree[1] < arrNumThree[0]) && (arrNumThree[1] > arrNumThree[2]))) {
//     console.log(arrNumThree[1]);
// } else console.log(arrNumThree[2]);

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

// let a = 0;
// let b = 2;
// let result;
// a+b<4? result = 'Мало': result = 'Багато';
// console.log(result);

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

// let num = 1100;
// (num > 0) && (num <= 100) ? console.log('Число є позитивним!!') : (num >= -100) && (num <= 0) ? console.log('Число є негативним або нулем!!') : console.log('Число не є в вказаному діапазоні');
