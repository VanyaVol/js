// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str_1 = 'hello world';
// let str_2 = 'lorem ipsum';
// let str_3 = 'javascript is cool';
// console.log(str_1.length);
// console.log(str_2.length);
// console.log(str_3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str_1 = 'hello world';
// let str_2 = 'lorem ipsum';
// let str_3 = 'javascript is cool';
// console.log(str_1.toUpperCase());
// console.log(str_2.toUpperCase());
// console.log(str_3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str_1 = 'HELLO WORLD';
// let str_2 = 'LOREM IPSUM';
// let str_3 = 'JAVASCRIPT IS COOL';
// console.log(str_1.toLowerCase());
// console.log(str_2.toLowerCase());
// console.log(str_3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let stringToarray = (str) => str.split(' ');
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(`${arr}`)

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => str.substr(0,length);
// document.write(delete_characters(str,7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => str.replaceAll(' ','-').toUpperCase();
// document.write(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = 'lorem ipsum';
// let firstSymbolUp = (str) => {
//     let bS = str[0].toUpperCase();
//     str = str.replace(str[0],'');
//     return bS + str;
// }
// console.log(firstSymbolUp(str));

// let str = 'lorem ipsum';
// let firstSymbolUp = (str) => str[0].toUpperCase() + str.replace(str[0],'');
// console.log(firstSymbolUp(str));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitalize = (str) => str.split(' ').map(value => (value[0].toUpperCase() + value.slice(1))).join(' ');
// let str = 'hello my name is ivan';
// console.log(capitalize(str));



