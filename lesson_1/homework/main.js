// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

// let string_1 = 'hello';
// let string_2 = 'owu';
// let string_3 = 'com';
// let string_4 = 'ua';
// let num_1 = 1;
// let num_2 = 10;
// let num_3 = -999;
// let num_4 = 123;
// let num_5 = 3.14;
// let num_6 = 2.7;
// let num_7 = 16;
// let bool_1 = true;
// let bool_2 = false;

//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// console.log(string_1);
// console.log(string_2);
// console.log(string_3);
// console.log(string_4);
// console.log(num_1);
// console.log(num_2);
// console.log(num_3);
// console.log(num_4);
// console.log(num_5);
// console.log(num_6);
// console.log(num_7);
// console.log(bool_1);
// console.log(bool_2);
//
// alert(string_1);
// alert(string_2);
// alert(string_3);
// alert(string_4);
// alert(num_1);
// alert(num_2);
// alert(num_3);
// alert(num_4);
// alert(num_5);
// alert(num_6);
// alert(num_7);
// alert(bool_1);
// alert(bool_2);
//
// document.write(string_1);
// document.write(string_2);
// document.write(string_3);
// document.write(string_4);
// document.write(num_1);
// document.write(num_2);
// document.write(num_3);
// document.write(num_4);
// document.write(num_5);
// document.write(num_6);
// document.write(num_7);
// document.write(bool_1);
// document.write(bool_2);

// - Переприсвоїти кожній змінній з завдання значення на довільне.

// string_1 = 'vanya';
// string_2 = 'voloshin';
// string_3 = 'lviv';
// string_4 = 'vol';
// num_1 = 11;
// num_2 = 100;
// num_3 = -9;
// num_4 = 13;
// num_5 = 9.124;
// num_6 = 1.7;
// num_7 = 1;
// bool_1 = false;
// bool_2 = true;

//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// console.log(string_1);
// console.log(string_2);
// console.log(string_3);
// console.log(string_4);
// console.log(num_1);
// console.log(num_2);
// console.log(num_3);
// console.log(num_4);
// console.log(num_5);
// console.log(num_6);
// console.log(num_7);
// console.log(bool_1);
// console.log(bool_2);
//
// alert(`${string_1}, ${string_2}, ${string_3}, ${string_4}, ${num_1}, ${num_2}, ${num_3}, ${num_4}, ${num_5}, ${num_6}, ${num_7}, ${bool_1}, ${bool_2}`);
//
// document.write(`<h1>${string_1}, ${string_2}, ${string_3}, ${string_4}, ${num_1}, ${num_2}, ${num_3}, ${num_4}, ${num_5}, ${num_6}, ${num_7}, ${bool_1}, ${bool_2}</h1>`);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

// let firstName = 'Ivan';
// let middleName = 'Vasylovich';
// let lastName = 'Voloshin';
//
// let person = `${firstName} ${middleName} ${lastName}`;
//
// console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.

// let firstName = prompt('Введіть своє ім`я:');
// let lastName = prompt('Введіть своє прізвище:');
// let middleName = prompt('Введіть своє імя по батькові:');
// let age = prompt('Введіть скільки Вам років:');
//
// //     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
//
// alert(`Вітаю ${lastName} ${firstName} ${middleName}. Тобі ${age} років`)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

// let a = 100 ;    //* number*//
// let b = '100';   //* string*//
// let c = true;    //* boolean*//
//
// console.log(typeof a, typeof b, typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!

// console.log(5 < 6) //  5 < 6 -> true
// console.log(5 > 6) //  5 ? 6 -> false
// console.log(5 === 6) // 5 ? 6 -> false
// console.log(5 >= 6) // 5 ? 6 -> false
// console.log(10 <= 10)// 10 ? 10 -> true
// console.log(10 === 10)// 10 ? 10 -> true
// console.log(10 > 10)// 10 ? 10 -> false
// console.log(10 < 10) // 10 ? 10 -> false
// console.log(10 !== 10) // 10 ? 10 -> false
// console.log(123 < '123')// 123 ? '123' -> false
// console.log(123 == '123')// 123 ? '123' -> true

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");  //*  205 - Тому, що при додаванні стрінги і будь якого значення після неї відбувається конкатинація (+ є бінарним оператором, якщо це інші дії -/*, то стрінгове значення буде переведено до числового типу)
// document.write(str - a + "<br/>");  // 15
// document.write(str * "2" + "<br/>"); // 40
// document.write(str / 2 + "<br/>");  //10

