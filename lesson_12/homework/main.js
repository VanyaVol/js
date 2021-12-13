// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// let wrap = document.createElement('div');
// wrap.classList.add('wrap');
// document.body.appendChild(wrap);
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         for (let post of posts) {
//             let postDiv = document.createElement('div');
//             postDiv.classList.add('post');
//             wrap.appendChild(postDiv);
//
//             let titlePost = document.createElement('h4');
//             titlePost.classList.add('title');
//             titlePost.innerText = post.title;
//
//             let bodyPost = document.createElement('p');
//             bodyPost.classList.add('body-post');
//             bodyPost.innerText = post.body;
//
//             postDiv.append(titlePost, bodyPost);
//         }
//     });

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// ля кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// let wrap = document.createElement('div');
// wrap.classList.add('wrap');
// document.body.appendChild(wrap);
//
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(comments => {
//         for (let comment of comments) {
//             let commentDiv = document.createElement('div');
//             commentDiv.classList.add('comment');
//             wrap.appendChild(commentDiv);
//
//             let nameComment = document.createElement('h4');
//             nameComment.classList.add('name');
//             nameComment.innerText = comment.name;
//
//             let emailComment = document.createElement('span');
//             emailComment.classList.add('email');
//             emailComment.innerText =  `email: ${comment.email}`;
//
//             let bodyComment = document.createElement('p');
//             bodyComment.classList.add('body-comment');
//             bodyComment.innerText = comment.body;
//
//             commentDiv.append(nameComment, emailComment, bodyComment);
//         }
//     });