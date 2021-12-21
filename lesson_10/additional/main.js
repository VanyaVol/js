// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.body.onclick = (ev) => {
//     console.log(`Елемент: ${ev.target.localName}`);
//     console.log(`Розміри: ${ev.target.offsetHeight} * ${ev.target.offsetWidth}`);
//     if (ev.target.classList.length) {
//         console.log(`Класи: ${ev.target.classList}`);
//     }
//     if (ev.target.id) {
//         console.log(`ID: ${ev.target.id}`);
//     }
// }

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


// let clicked = false;
//
// const popup = document.createElement('div');
//
//
// const close = document.createElement('div');
//
// document.onclick = (ev) => {
//
//     if ((!clicked) && (!popup.children.length)) {
//
//         const height = window.innerHeight;
//         const width = window.innerWidth;
//
//         const h = 500;
//         const w = 700;
//
//         const rrd = popup.children;
//         console.log(rrd);
//
//         popup.style.position = 'fixed';
//         popup.style.height = `${h}px`;
//         popup.style.width = `${w}px`;
//         popup.style.zIndex = '99999';
//         popup.style.left = `${(width / 2) - (w / 2)}px`;
//         popup.style.top = `${(height / 2) - (h / 2)}px`;
//         popup.style.backgroundColor = '#8c8c8c';
//         popup.id = 'popup';
//
//         document.body.appendChild(popup);
//
//         const element = document.createElement('h3');
//         element.innerText = `HTML елемент: ${ev.target.localName}`;
//
//         const rr = document.createElement('h3');
//         rr.innerText = `Розміри: ${ev.target.offsetHeight} * ${ev.target.offsetWidth}`;
//
//         popup.append(element, rr);
//
//         if (ev.target.classList.length) {
//             const classes = document.createElement('h3');
//             classes.innerText = `Класи: ${ev.target.classList}`;
//             popup.appendChild(classes);
//         }
//
//         if (ev.target.id) {
//             const id = document.createElement('h3');
//             id.innerText = `ID: ${ev.target.id}`;
//             popup.appendChild(id);
//         }
//
//         close.innerText = 'CLOSE';
//         close.style.backgroundColor = '#ff1b1b'
//         close.style.color = '#fff';
//         close.style.position = 'absolute';
//         close.style.right = '30px';
//         close.style.top = '20px';
//         close.style.fontSize = '30px';
//         close.style.cursor = 'pointer';
//         popup.appendChild(close);
//
//         clicked = true;
//
//     } else if (!popup.children.length) {
//         clicked = false;
//     }
// }
//
// close.onclick = () => {
//     while (popup.children.length)
//         popup.removeChild(popup.firstChild);
//     popup.remove();
// }


// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//


// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}},
//     {id: 12, name: 'max', age: 28, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 121}}
// ];
//
//
// const checkBlock = document.createElement('div');
// checkBlock.style.marginTop = '30px';
//
// document.body.appendChild(checkBlock);
//
//
// const checkboxStatus = document.createElement('input');
// checkboxStatus.setAttribute('type','checkbox');
//
// const labelStatus = document.createElement('label')
// labelStatus.innerText = 'Cтатус true';
//
// const checkboxAge = document.createElement('input');
// checkboxAge.setAttribute('type','checkbox');
//
//
// const labelAge = document.createElement('label')
// labelAge.innerText = 'Старші 29 років';
//
// const checkboxCity = document.createElement('input');
// checkboxCity.setAttribute('type','checkbox');
//
//
// const labelKiev = document.createElement('label')
// labelKiev.innerText = 'Місто Київ';
//
//
// checkBlock.append(checkboxStatus, labelStatus, checkboxAge, labelAge, checkboxCity, labelKiev);
//
//
// const userBlockDiv = document.createElement('div');
//
// userBlockDiv.style.display = 'flex';
// userBlockDiv.style.flexWrap = 'wrap';
// userBlockDiv.style.columnGap = '10px';
// userBlockDiv.style.rowGap = '10px';
//
// document.body.appendChild(userBlockDiv);
//
//
// for (const itemUser of usersWithAddress) {
//
//     const userBlock = document.createElement('div');
//     userBlock.style.width = '100px';
//     userBlock.style.backgroundColor = 'grey';
//     userBlock.style.padding = '10px';
//     userBlock.classList.add(`user`);
//     userBlock.classList.add(`user-${itemUser.id}`);
//     userBlockDiv.appendChild(userBlock);
//
//
//     const userName = document.createElement('h4');
//     userName.innerText = itemUser.name;
//
//     const userAge = document.createElement('h5');
//     userAge.innerText = itemUser.age;
//
//     const userStatus = document.createElement('h6');
//     userStatus.innerText = itemUser.status;
//
//     const userAddress = document.createElement('h6');
//     userAddress.innerText = itemUser.address.city;
//
//
//     userBlock.append(userName, userAge, userStatus, userAddress);
// }
//
//
// checkBlock.onchange = () => {
//     const userCollectionHtml = document.getElementsByClassName('user');
//
//     if ((checkboxStatus.checked) && (!checkboxAge.checked) && (!checkboxCity.checked)) {
//         for (const userHTML of userCollectionHtml) {
//             userHTML.style.display = '';
//             let statusUser = userHTML.childNodes[2].textContent;
//             if (!(statusUser === 'true')) {
//                 userHTML.style.display = 'none';
//             }
//         }
//     }
//
//     if ((checkboxStatus.checked) && (checkboxAge.checked) && (!checkboxCity.checked)) {
//         for (const userHTML of userCollectionHtml) {
//             userHTML.style.display = '';
//             let statusUser = userHTML.childNodes[2].textContent;
//             let ageUser = userHTML.childNodes[1].textContent;
//             if ((statusUser === 'false') || (ageUser < 29)) {
//                 userHTML.style.display = 'none';
//             }
//         }
//     }
//
//     if ((checkboxStatus.checked) && (checkboxAge.checked) && (checkboxCity.checked)) {
//         for (const userHTML of userCollectionHtml) {
//             userHTML.style.display = '';
//             let statusUser = userHTML.childNodes[2].textContent;
//             let ageUser = userHTML.childNodes[1].textContent;
//             let cityUser = userHTML.childNodes[3].textContent;
//             if ((statusUser === 'false') || (ageUser < 29) || (cityUser !== 'Kyiv')) {
//                 userHTML.style.display = 'none';
//             }
//         }
//     }
//
//     if ((checkboxAge.checked) && (!checkboxStatus.checked) && (!checkboxCity.checked)) {
//         for (const userHTML of userCollectionHtml) {
//             let ageUser = userHTML.childNodes[1].textContent;
//             userHTML.style.display = '';
//             if (+ageUser < 29) {
//                 userHTML.style.display = 'none';
//             }
//         }
//     }
//
//     if ((checkboxAge.checked) && (!checkboxStatus.checked) && (checkboxCity.checked)) {
//         for (const userHTML of userCollectionHtml) {
//             let ageUser = userHTML.childNodes[1].textContent;
//             let cityUser = userHTML.childNodes[3].textContent;
//             userHTML.style.display = '';
//             if ((+ageUser < 29) || (cityUser !== 'Kyiv')) {
//                 userHTML.style.display = 'none';
//             }
//         }
//     }
//
//     if ((checkboxCity.checked) && (!checkboxStatus.checked) && (!checkboxAge.checked)) {
//         for (const userHTML of userCollectionHtml) {
//             userHTML.style.display = '';
//             let cityUser = userHTML.childNodes[3].textContent;
//             if (!(cityUser === 'Kyiv')) {
//                 userHTML.style.display = 'none';
//             }
//         }
//     }
//
//     if ((checkboxCity.checked) && (checkboxStatus.checked) && (!checkboxAge.checked)) {
//         for (const userHTML of userCollectionHtml) {
//             userHTML.style.display = '';
//             let cityUser = userHTML.childNodes[3].textContent;
//             let statusUser = userHTML.childNodes[2].textContent;
//             if (!(cityUser === 'Kyiv')||(!(statusUser === 'true'))) {
//                 userHTML.style.display = 'none';
//             }
//         }
//     }
//
//     if ((!checkboxStatus.checked) && (!checkboxAge.checked) && (!checkboxCity.checked)) {
//         for (const userHTML of userCollectionHtml) {
//             userHTML.style.display = '';
//         }
//     }
//
// }


//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


const buttonsDiv = document.createElement('divButtons');
document.body.appendChild(buttonsDiv);

const buttonPrev = document.createElement('button');
buttonPrev.innerText = 'Prev';
const buttonNext = document.createElement('button');
buttonNext.innerText = 'Next';

buttonsDiv.append(buttonPrev, buttonNext);

let i = 0;

let recurs = (startElement) => {
    // console.log('startElement---------------Start');
    // console.log(startElement);
    // console.log('startElement---------------End');
    //
    // if (startElement.children) {
    //
    //     console.log('if---------------------Start');
    //     console.log(startElement.children, 'if ---------------- start element children');
    //     console.log('if---------------------End');
    //     for (let j = 0; j < startElement.children.length; j++) {
    //         console.log('for----------------Start');
    //         console.log(startElement.children.length,'length children---------------');
    //         console.log(startElement.children[j],'start el J----------');
    //         console.log(j,' J----------');
    //         console.log('for');
    //         console.log('for------------------End');
    //         recurs(startElement.children[j]);
    //     }
    // }
    // console.log('recurs----------------');

    if (i >=startElement.children.length) {
        i = 0;
    }

    // if (startElement.children) {
    //
    //     if ((i < startElement.children.length) || (startElement.children[i])) {
    //
    //         return startElement.children[i];
    //     }
    //     // recurs(startElement.children[i]);
    //
    // }

    if (startElement.children) {
        if ((i < startElement.children.length) || (startElement.children[i])) {
            i++;
            console.log(startElement);

            recurs(startElement.children[i]);
            // return startElement.children[i];
        }


    }

}

buttonNext.onclick = () => {

        recurs(document.body);


}


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//

// let image = [{
//     url: 'https://agropolit.com/media/news/o-o-w/00/21/21552/insulinovyj-indeks-produktov-pitaniya-polnaya-tablica-dlya-diabetikov_0_0-11840-28624.jpg'
// }, {
//     url: 'https://publish.com.ua/images/2020/08/04/scale_12001_large.jpg'
// }, {
//     url: 'https://uaeu.top/images/2021/04/23/pnut7mh38l41_large.jpg'
// }, {
//     url: 'https://d3d173w0vohr0k.cloudfront.net/ua-ua/articles/6a/8bcc9c7e1c47b199b5c039846e72e5/chim-korisni-ovochi-na-pari.jpg'
// }, {
//     url: 'https://dniprograd.org/system/App/Post/images/000/089/606/very_large/shutterstock_633378200.jpeg'
// }, {
//     url: 'https://uaeu.top/images/2021/05/27/food_large.jpg'
// }, {
//     url: 'https://economy.24tv.ua/resources/photos/news/1200x675_DIR/202108/1710989.jpg'
// }, {
//     url: 'https://economy.24tv.ua/resources/photos/news/1200x675_DIR/201908/1197521.jpg'
// }];
//
// const div = document.createElement('div');
// div.style.maxWidth = 'fit-content';
// div.style.display = 'flex';
// div.style.flexDirection = 'row';
// div.style.columnGap = '10px';
// div.style.alignItems = 'center';
//
// document.body.appendChild(div);
//
// const divCarousel = document.createElement('div');
// divCarousel.style.display = 'flex';
// divCarousel.style.flexDirection = 'row';
// divCarousel.style.flexBasis = '100%';
// divCarousel.style.height = '250px';
// divCarousel.style.columnGap = '25px';
// divCarousel.style.backgroundColor = '#d3d3d3';
// divCarousel.style.paddingLeft = '30px';
// divCarousel.style.paddingRight = '30px';
// divCarousel.style.borderRadius = '5px';
// divCarousel.style.border = '1px solid black';
// divCarousel.style.alignItems = 'center';
//
// let btnNext = document.createElement('i');
// btnNext.setAttribute('class','fas fa-chevron-right');
// btnNext.style.cursor = 'pointer';
// btnNext.style.fontSize = '50px';
// btnNext.style.color = 'black';
//
// let btnPrev = document.createElement('i');
// btnPrev.setAttribute('class', 'fas fa-chevron-left');
// btnPrev.style.cursor = 'pointer';
// btnPrev.style.fontSize = '50px';
// btnPrev.style.color = 'black';
//
//
// div.appendChild(btnPrev);
//
// div.appendChild(divCarousel);
//
//
// for (let i = 0; i < image.length; i++) {
//     const img = document.createElement('img');
//     img.src = image[i].url;
//     img.style.width = '300px';
//     img.style.height = 'fit-content';
//     img.style.border = '4px solid white';
//     img.style.borderRadius= '5px';
//     img.style.display = 'none';
//     if ((i >= 0) && (i <= 2)) {
//         img.style.display = 'inline-block';
//     }
//     divCarousel.appendChild(img);
// }
//
// div.appendChild(btnNext);
//
// let next = 0;
// let prev = 0;
//
// btnNext.onclick = () => {
//
//     const img = document.getElementsByTagName('img');
//
//     next++;
//
//     for (let i = 0; i < image.length; i++) {
//         img[i].src = image[i].url;
//         img[i].style.display = 'none';
//         if (next === img.length - 2) {
//             next = 0;
//         }
//         if ((i >= next) && (i <= next + 2)) {
//             img[i].style.display = 'inline-block'
//         }
//     }
// }
//
//
// btnPrev.onclick = () => {
//     const img = document.getElementsByTagName('img');
//
//     for (let i = 0; i < img.length; i++) {
//         if (img[i].style.display === 'inline-block') {
//             prev = i - 2;
//         }
//     }
//
//     prev--;
//
//     for (let i = 0; i < image.length; i++) {
//         img[i].src = image[i].url;
//         img[i].style.display = 'none';
//
//         if (prev === -1) {
//             prev = img.length - 3;
//         }
//
//         if ((i >= prev) && (i <= prev + 2)) {
//             img[i].style.display = 'inline-block'
//         }
//     }
// }

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// let clicked = false;
//
// window.onmouseup = (e) => {
//
//     let str = e.target.innerText;
//     if (!clicked) {
//
//         clicked = true;
//         let newStr = [...str];
//
//         let select = window.getSelection().toString();
//
//         let startElement;
//         let finishElement;
//
//         if (window.getSelection().anchorOffset < window.getSelection().focusOffset) {
//
//             startElement = window.getSelection().anchorOffset;
//             finishElement = window.getSelection().focusOffset;
//
//         } else {
//
//             startElement = window.getSelection().focusOffset;
//             finishElement = window.getSelection().anchorOffset;
//         }
//
//         if (startElement !== finishElement) {
//             newStr.splice(startElement, finishElement - startElement - 1);
//
//             console.log(newStr);
//
//             for (let i = startElement; i < startElement + 1; i++) {
//                 newStr[i] = `<i>${select}</i>`;
//             }
//
//             e.target.innerText = str;
//
//             newStr = newStr.join('');
//
//             e.target.innerHTML = newStr;
//
//             console.log(newStr);
//
//         }
//
//     } else {
//         e.target.onmousedown = (ev) => {
//             const srr = e.target.innerText;
//             e.target.innerText = '';
//             e.target.innerText = srr;
//             clicked = false;
//         }
//
//     }
// }









