// є масив -
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// створити під кожен об'єкт свій блок з кнопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє
//         до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторінку favorites.html при переході на яку потрібно вивести в документ всіх обраних на попередньому етапі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let divWrap = document.createElement('div');
divWrap.classList.add('wrap');
document.body.appendChild(divWrap);

let favorites = JSON.parse(localStorage.getItem('Favorite users'));


if (!favorites) {
    favorites = [];
}


for (let i = 0; i < users.length; i++) {
    let divObjBlock = document.createElement('div');
    divObjBlock.classList.add('object-block');
    divWrap.appendChild(divObjBlock);

    let name = document.createElement('h4');
    let age = document.createElement('p');
    let status = document.createElement('span');
    let buttonFavorite = document.createElement('button');

    name.innerText = 'Name: ' + users[i].name;
    age.innerText = 'Age: ' + users[i].age;
    status.innerText = 'Status - ' + users[i].status;
    buttonFavorite.innerText = 'додати до улюблених';
    buttonFavorite.classList.add('btn');

    divObjBlock.append(name, age, status, buttonFavorite);

    if (users[i].status) {
        divObjBlock.style.backgroundColor = '#c8e0bd';
    } else {
        divObjBlock.style.backgroundColor = '#eca2a2';
    }

    for (const itemFavorite of favorites) {
        if ((itemFavorite.name === users[i].name) && (itemFavorite.age === users[i].age) && (itemFavorite.status === users[i].status)) {
            buttonFavorite.innerText = 'Видалити з улюблених';
            buttonFavorite.style.backgroundColor = '#ff0015';
        }
    }

    buttonFavorite.onclick = function () {
        for (let j = 0; j < favorites.length; j++) {
            if ((buttonFavorite.innerText === 'Видалити з улюблених') && (users[i].name === favorites[j].name) && (users[i].age === favorites[j].age) && (users[i].status === favorites[j].status)) {
                favorites.splice(j, 1);
            }
        }

        if (buttonFavorite.innerText === 'додати до улюблених') {
            favorites.push(users[i]);
            buttonFavorite.style.backgroundColor = '#ff0015';
            buttonFavorite.innerText = 'Видалити з улюблених';
        } else {
            buttonFavorite.innerText = 'додати до улюблених';
            buttonFavorite.style.backgroundColor = '#f6ff80';
        }

        localStorage.setItem('Favorite users', JSON.stringify(favorites));



    }


}





