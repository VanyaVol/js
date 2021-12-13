// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

// let elementMainHeader = document.getElementById('main_header');
// elementMainHeader.classList.add('sep-2021-frontend');
// console.log(elementMainHeader.classList);

// b) робить шириниу елементу ul 400px

// let elementsUl = document.getElementsByTagName('ul');
// for (const elementUl of elementsUl) {
//     elementUl.style.width = '400px';
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let linkLists = document.getElementsByClassName('linkList');
// for (const linkList of linkLists) {
//     linkList.style.width = '50%';
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// let listElement = document.getElementsByClassName('listElement2');
// console.log(listElement[0].innerText);

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let liElements = document.getElementsByTagName('li');
// for (const liElement of liElements) {
//     liElement.style.backgroundColor = 'grey';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let links = document.getElementsByTagName('a');
// for (const link of links) {
//     link.classList.add('anchor');
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let links = document.getElementsByTagName('a');
// for (const link of links) {
//     if (link.innerText === 'link3'){
//         link.style.fontSize = '40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let links = document.getElementsByTagName('a');
// for (const link of links) {
//     link.classList.add(`element_${link.innerText}`);
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let colorSubHeader = prompt('Input color sub-header element: ');
// let elSubHeader = document.getElementsByClassName('sub-header');
// for (const subHeaderEl of elSubHeader) {
//     subHeaderEl.style.backgroundColor = colorSubHeader;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let colorSubHeader = prompt('Input color sub-header element: ');
// let elSubHeader = document.getElementsByClassName('sub-header');
// for (const subHeaderEl of elSubHeader) {
//     if (subHeaderEl.innerText === 'content 2 segment') {
//         subHeaderEl.style.backgroundColor = colorSubHeader;
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let textContent = prompt('Input text content_1 element: ');
// let elContent1 = document.getElementsByClassName('content_1');
// for (const content1Elements of elContent1) {
//     content1Elements.innerText = textContent;
// }

// l) отримати елементи p та змінити їм padding на 20px

// let pList = document.getElementsByTagName('p');
// for (const pListElement of pList) {
//     pListElement.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let elementsText = document.getElementsByClassName('text2');
// for (const elementText of elementsText) {
//     elementText.innerText = 'sept-2021-frontend';
// }
