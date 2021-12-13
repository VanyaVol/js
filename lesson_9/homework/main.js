// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let divElement = document.createElement('div');
// divElement.classList.add('wrap','collapse','alpha','beta');
// divElement.style.width = '100px';
// divElement.style.height = '100px';
// divElement.style.backgroundColor = 'grey';
// document.body.appendChild(divElement);
// document.body.appendChild(divElement.cloneNode());

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let array = ['Main','Products','About us','Contacts'];
// let menu = document.getElementsByClassName('menu');
// for (const item of array) {
//     let liMenu = document.createElement('li');
//     liMenu.innerText = item;
//     menu[0].appendChild(liMenu);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let wrapper = document.createElement('div');
// wrapper.style.width = '1000px'
// wrapper.style.margin = '0 auto';
// wrapper.style.display = 'flex';
// wrapper.style.justifyContent = 'space-between'
// document.body.appendChild(wrapper);
//
// for (const item of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.style.width = '140px';
//     div.style.height = '100px';
//     div.style.padding = '10px';
//     div.style.backgroundColor = 'tomato'
//     let h3 = document.createElement('h3');
//     let p = document.createElement('p');
//     h3.innerText = item.title;
//     p.innerText = item.monthDuration;
//     wrapper.appendChild(div);
//     div.appendChild(h3);
//     div.appendChild(p);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let wrapper = document.createElement('div');
// wrapper.style.justifyContent = 'space-between'
// wrapper.classList.add('wrap');
// document.body.appendChild(wrapper);
//
// for (const item of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading')
//     let p = document.createElement('p');
//     p.classList.add('description');
//     h1.innerText = item.title;
//     p.innerText = item.monthDuration;
//     wrapper.appendChild(div);
//     div.appendChild(h1);
//     div.appendChild(p);
// }
