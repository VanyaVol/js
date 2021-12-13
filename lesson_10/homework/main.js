// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
//   чтобы при клике на кнопку исчезал элемент с id="text".

// let btn = document.getElementsByName('btn')[0];
// let text = document.getElementById('text');
//
// text.style.display = 'block';
//
// btn.onclick = function () {
//     console.log(text.classList.value);
//     console.log(text.style.display);
//     if (text.style.display === 'block') {
//         text.style.display = 'none';
//     } else {
//         text.style.display = 'block';
//     }
// }

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let btn = document.getElementsByName('btn')[0];
// btn.onclick = function () {
//     btn.style.display = 'none';
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let text = document.getElementsByName('text')[0];
// let conf = document.getElementsByName('confirm')[0];
//
// conf.onclick = function () {
//     console.log(text.value);
//     if (+text.value >= 18 ) {
//         alert('Вам більше 18 років');
//     } else {
//         alert('Вам менше 18 років');
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.getElementsByClassName('menu')[0];
// let titleEl = document.getElementsByClassName('title')[0]
//
// titleEl.onclick = function () {
//     console.log('adadad');
//     menu.classList.toggle('active');
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// class Comment {
//     constructor(title, body) {
//         this.title = title;
//         this.body = body;
//     }
// }
//
// let arrayComments = [];
//
// arrayComments.push(new Comment('Lorem ipsum dolor', 'Lorem ipsum dolor sit amet.'));
// arrayComments.push(new Comment('Lorem ipsum dolor sit', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At earum ipsam iste labore magnam mollitia officiis optio ratione sequi, sunt?'));
// arrayComments.push(new Comment('Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet,  consectetur adipisicing elit.'));
// arrayComments.push(new Comment('Lorem4', 'Lorem ipsum dolor sit amet.  At earum ipsam iste labore magnam mollitia'));
//
// let divBlock = document.createElement('div');
// divBlock.classList.add('wrap');
// document.body.appendChild(divBlock);
//
// for (const comment of arrayComments) {
//     let divComment = document.createElement('div');
//     divComment.classList.add('block-comment');
//
//     let divCommentHeader = document.createElement('div');
//     divCommentHeader.classList.add('header-comment');
//
//     let titleComment = document.createElement('h4');
//
//     let button = document.createElement('div');
//     button.classList.add('btn');
//
//     let divCommentBody = document.createElement('div');
//     divCommentBody.classList.add('body-comment');
//
//     let textComment = document.createElement('p');
//
//     titleComment.innerText = comment.title;
//
//     textComment.innerText = comment.body;
//
//     button.innerText = 'Сховати';
//
//     button.onclick = function () {
//         if (button.innerText === 'Сховати'){
//             button.innerText = 'Показати';
//         } else {
//             button.innerText = 'Сховати';
//         }
//
//         divCommentBody.classList.toggle('hidden');
//     }
//
//     divBlock.appendChild(divComment);
//     divComment.appendChild(divCommentHeader);
//     divCommentHeader.appendChild(titleComment);
//     divCommentHeader.appendChild(button);
//     divComment.appendChild(divCommentBody);
//     divCommentBody.appendChild(textComment);
// }

