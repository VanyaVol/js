// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let div = document.createElement('div');
// document.body.appendChild(div);
//
// let formNum1 = document.createElement('form');
// formNum1.setAttribute('name','form1');
// div.appendChild(formNum1);
//
// let inputForm1Num1 = document.createElement('input');
// inputForm1Num1.setAttribute('name','inp1');
// formNum1.appendChild(inputForm1Num1);
//
// let inputForm1Num2 = document.createElement('input');
// inputForm1Num2.setAttribute('name','inp2');
// formNum1.appendChild(inputForm1Num2);
//
// let formNum2 = document.createElement('form');
// formNum2.setAttribute('name','form2');
// div.appendChild(formNum2);
//
// let inputForm2Num1 = document.createElement('input');
// inputForm2Num1.setAttribute('name','inp3');
// formNum2.appendChild(inputForm2Num1);
//
// let inputForm2Num2 = document.createElement('input');
// inputForm2Num2.setAttribute('name','inp4');
// formNum2.appendChild(inputForm2Num2);
//
// let button = document.createElement('button');
// button.setAttribute('name','btn');
// button.innerText = 'Lets go !!!!';
//
//
// div.appendChild(button);
//
// button.onclick = function () {
//     console.log(formNum1.inp1.value);
//     console.log(formNum1.inp2.value);
//     console.log(formNum2.inp3.value);
//     console.log(formNum2.inp4.value);
// }

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let div = document.createElement('div');
// document.body.appendChild(div);
//
// let tableRowInput = document.createElement('input');
// tableRowInput.setAttribute('placeholder','Input count row');
//
// let tableDataInput = document.createElement('input');
// tableDataInput.setAttribute('placeholder','Input count data');
//
// let dataInput = document.createElement('input');
// dataInput.setAttribute('placeholder','Input text');
//
// let createTableButton = document.createElement('button');
// createTableButton.innerText = 'Create table'
//
// div.append(tableRowInput,tableDataInput,dataInput,createTableButton);
//
// let table = document.createElement('table');
// table.style.borderCollapse = 'collapse';
// div.appendChild(table);
//
// createTableButton.onclick = function () {
//     for (let i = 0; i < tableRowInput.value; i++) {
//         let tr = document.createElement('tr');
//         // tr.style.border = '1px solid black';
//         table.appendChild(tr);
//         for (let j = 0; j < tableDataInput.value; j++) {
//             let td = document.createElement('td');
//             td.innerText = dataInput.value;
//             td.style.border = '1px solid black';
//             tr.appendChild(td);
//         }
//     }
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let array = ['редиска', 'капуста', 'дурачок'];
//
// let input = document.createElement('input');
// input.setAttribute('type', 'text');
// document.body.appendChild(input);
//
// let button = document.createElement('button');
// button.innerText = 'OK';
// document.body.appendChild(button);
//
// button.onclick = function () {
//     for (const item of array) {
//         if (input.value.includes(item)) {
//             return alert('Не матюкайтесь');
//         }
//     }
//     alert('Молодець')
// }