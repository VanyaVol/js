let divWrap = document.createElement('div');
divWrap.classList.add('wrap');
document.body.appendChild(divWrap);

let favorites = JSON.parse(localStorage.getItem('Favorite users'));

for (let i = 0; i < favorites.length; i++) {
    let divObjBlock = document.createElement('div');
    divObjBlock.classList.add('object-block');
    divWrap.appendChild(divObjBlock);

    let name = document.createElement('h4');
    let age = document.createElement('p');
    let status = document.createElement('span');
    let buttonFavorite = document.createElement('button');

    name.innerText = 'Name: ' + favorites[i].name;
    age.innerText = 'Age: ' + favorites[i].age;
    status.innerText = 'Status - ' + favorites[i].status;
    buttonFavorite.innerText = 'Видалити з улюблених';
    buttonFavorite.style.backgroundColor = '#ff0015';
    buttonFavorite.classList.add('btn');

    divObjBlock.append(name, age, status, buttonFavorite);

    if (favorites[i].status) {
        divObjBlock.style.backgroundColor = '#c8e0bd';
    } else {
        divObjBlock.style.backgroundColor = '#eca2a2';
    }

    buttonFavorite.onclick = function () {
        favorites.splice(i,1);
        buttonFavorite.style.backgroundColor = 'green';
        divObjBlock.style.display = 'none';
        console.log(favorites)
        localStorage.setItem('Favorite users',JSON.stringify(favorites));
    }
}