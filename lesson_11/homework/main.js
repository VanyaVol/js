// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// let form = document.createElement('form');
// document.body.appendChild(form);
//
// let inputName = document.createElement('input');
// inputName.setAttribute('placeholder', 'input name');
//
// let inputAge = document.createElement('input');
// inputAge.setAttribute('placeholder', 'input age');
//
// let button = document.createElement('button');
// button.innerText = 'Record'
//
// form.append(inputName, inputAge, button);
//
// let arrayHuman = JSON.parse(localStorage.getItem('Human'));
//
// if (!arrayHuman)  {
//     arrayHuman = [];
// }
//
// button.onclick = function (e) {
//     e.preventDefault();
//     arrayHuman.push(new Human(inputName.value, inputAge.value));
//     localStorage.setItem('Human', JSON.stringify(arrayHuman));
//
// }

// -створити форму з інпутами для model, type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// class Auto {
//     constructor(model, type, volume) {
//         this.model = model;
//         this.type = type;
//         this.volume = volume;
//     }
// }
//
// let form = document.createElement('form');
// document.body.appendChild(form);
//
// let inputModel = document.createElement('input');
// inputModel.setAttribute('placeholder', 'input model');
//
// let inputType = document.createElement('input');
// inputType.setAttribute('placeholder', 'input type');
//
// let inputVolume = document.createElement('input');
// inputVolume.setAttribute('placeholder', 'input volume');
//
// let button = document.createElement('button');
// button.innerText = 'Record'
//
// form.append(inputModel, inputType, inputVolume, button);
//
// let arrayAuto = JSON.parse(localStorage.getItem('Auto'));
//
// if (!arrayAuto) {
//     arrayAuto = [];
// }
//
// button.onclick = function (e) {
//     e.preventDefault();
//     arrayAuto.push(new Auto(inputModel.value, inputType.value, inputVolume.value));
//     localStorage.setItem('Auto', JSON.stringify(arrayAuto));
// }