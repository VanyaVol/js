// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


let wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);

fetch
('https://jsonplaceholder.typicode.com/users')
    .then(responseUsers => responseUsers.json())
    .then(users => {
        for (const user of users) {
            let blockContent = document.createElement('div');
            blockContent.classList.add('content-block');
            wrap.appendChild(blockContent);

            let userBlock = document.createElement('div');
            userBlock.classList.add('user-block');
            blockContent.appendChild(userBlock);

            let userTopBlock = document.createElement('div');
            userTopBlock.classList.add('user-top-block');
            userBlock.appendChild(userTopBlock);

            let userBottomBlock = document.createElement('div');
            userBottomBlock.classList.add('user-bottom-block');
            userBlock.appendChild(userBottomBlock);

            let nameUser = document.createElement('h3');
            nameUser.classList.add('name-user');
            nameUser.innerText = user.name;

            let userName = document.createElement('h5');
            userName.classList.add('username-user')
            userName.innerText = `Username: ${user.username}`;

            let emailUser = document.createElement('span');
            emailUser.classList.add('email-user');
            emailUser.innerText = `Email: ${user.email}`;

            let addressUser = document.createElement('span');
            addressUser.classList.add('address-user');
            addressUser.innerText = `Address: ${user.address.zipcode}, ${user.address.suite}, ${user.address.city}, ${user.address.street} `;

            let phoneUser = document.createElement('span');
            phoneUser.classList.add('phone-user');
            phoneUser.innerText = `Phone: ${user.phone}`;

            let websiteUser = document.createElement('span');
            websiteUser.classList.add('website-user');
            websiteUser.innerText = `Website: ${user.website}`;

            let companyUser = document.createElement('span');
            companyUser.classList.add('company-user');
            companyUser.innerText = `Company: ${user.company.name}`;

            userTopBlock.append(nameUser, userName, emailUser, addressUser, phoneUser, websiteUser, companyUser);

            let buttonUser = document.createElement('button');
            buttonUser.classList.add('button-user');
            buttonUser.innerText = 'Показати пости користувача';
            userBottomBlock.appendChild(buttonUser);


            let postBlock = document.createElement('div');
            postBlock.classList.add('post-block');
            blockContent.appendChild(postBlock);


            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(responsePosts => responsePosts.json())
                .then(posts => {
                    for (const post of posts) {
                        if (user.id === post.userId) {
                            let postDiv = document.createElement('div');
                            postDiv.classList.add('post');
                            postBlock.appendChild(postDiv);

                            let postBody = document.createElement('div');
                            postBody.classList.add('post-body');
                            postDiv.appendChild(postBody);

                            let titlePost = document.createElement('h4');
                            titlePost.classList.add('title-post');
                            titlePost.innerText = `${post.title}`;

                            let bodyPost = document.createElement('p');
                            bodyPost.classList.add('text-post');
                            bodyPost.innerText = `${post.body}`;

                            let buttonPost = document.createElement('button');
                            buttonPost.classList.add('button-post');
                            buttonPost.innerText = 'Показати коментарі поста';

                            let postClicked = false;

                            buttonUser.onclick = () => {

                                if (!postClicked) {
                                    postClicked = true;
                                    postBlock.style.display = 'flex';
                                    buttonUser.innerText = 'Сховати пости користувача';

                                } else {
                                    postClicked = false;
                                    postBlock.style.display = 'none';
                                    buttonUser.innerText = 'Показати пости користувача';
                                }

                            }

                            let commentBlock = document.createElement('div');
                            commentBlock.classList.add('comment-block');


                            postBody.append(titlePost, bodyPost, buttonPost);
                            postDiv.appendChild(commentBlock);

                            fetch('https://jsonplaceholder.typicode.com/comments')
                                .then(responseComments => responseComments.json())
                                .then(comments => {
                                    for (const comment of comments) {
                                        if (post.id === comment.postId) {
                                            let commentDiv = document.createElement('div');
                                            commentDiv.classList.add('comment');
                                            commentBlock.appendChild(commentDiv);

                                            let nameComment = document.createElement('h4');
                                            nameComment.classList.add('name-comment');
                                            nameComment.innerText = `${comment.name}`;

                                            let emailComment = document.createElement('h5');
                                            emailComment.classList.add('email-comment');
                                            emailComment.innerText = `Email: ${comment.email}`;

                                            let bodyComment = document.createElement('p');
                                            bodyComment.classList.add('text-comment');
                                            bodyComment.innerText = `${comment.body}`;


                                            commentDiv.append(nameComment, emailComment, bodyComment);


                                            let commentClicked = false;

                                            buttonPost.onclick = () => {

                                                if (!commentClicked) {
                                                    commentClicked = true;
                                                    commentBlock.style.display = 'flex';
                                                    buttonPost.innerText = 'Сховати пости користувача';

                                                } else {
                                                    commentClicked = false;
                                                    commentBlock.style.display = 'none';
                                                    buttonPost.innerText = 'Показати пости користувача';
                                                }

                                            }

                                        }
                                    }
                                });


                        }
                    }
                });

        }
    });


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(responsePosts => responsePosts.json())
//     .then(posts => {
//         fetch('https://jsonplaceholder.typicode.com/comments')
//             .then(responseComments => responseComments.json())
//             .then(comments => {
//                 for (const user of users) {
//                     for (const post of posts) {
//                         for (const comment of comments) {
//                             if ((user.id === post.userId) && (post.id === comment.postId)) {
//                                 console.log(comment);
//                             }
//                         }
//                     }
//                 }
//             });
//     });