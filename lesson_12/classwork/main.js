// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (let post of posts) {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');
            wrap.appendChild(postDiv);

            let postDivBlock = document.createElement('div');
            postDivBlock.classList.add('post-block');
            postDiv.appendChild(postDivBlock);

            let idPost = document.createElement('h3');
            idPost.classList.add('id-post')
            idPost.innerText = `ID: ${post.id}`;

            let titlePost = document.createElement('h4');
            titlePost.classList.add('title');
            titlePost.innerText = post.title;

            let bodyPost = document.createElement('p');
            bodyPost.classList.add('body-post');
            bodyPost.innerText = post.body;

            let buttonPost = document.createElement('button');
            buttonPost.classList.add('btn');
            buttonPost.innerText = 'Показати коменти';

            postDivBlock.append(idPost, titlePost, bodyPost, buttonPost);


            let commentBlockDiv = document.createElement('div');


            let postCommentBlock = document.createElement('div');
            postCommentBlock.classList.add('post-comment-block');
            postDiv.appendChild(postCommentBlock);


            postCommentBlock.appendChild(commentBlockDiv);

            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then(comments => {

                    for (let comment of comments) {
                        if (JSON.parse(post.id) === JSON.parse(comment.postId)) {

                            let commentDiv = document.createElement('div');

                            commentBlockDiv.classList.add('comment-block', 'hide');

                            commentDiv.classList.add('comment');

                            commentBlockDiv.append(commentDiv);

                            let idComment = document.createElement('h4');
                            idComment.classList.add('id-comment');
                            idComment.innerText = `ID: ${comment.id}`;

                            let idPostComment = document.createElement('h5');
                            idComment.classList.add('id-post-comment');
                            idPostComment.innerText = `POST ID: ${comment.postId}`;


                            let nameComment = document.createElement('span');
                            nameComment.classList.add('name-comment');
                            nameComment.innerText = `NAME: ${comment.name}`;

                            let emailComment = document.createElement('span');
                            emailComment.classList.add('email-comment');
                            emailComment.innerText = `EMAIL: ${comment.email}`;

                            let textComment = document.createElement('p');
                            textComment.classList.add('body-comment');
                            textComment.innerText = comment.body;


                            commentDiv.append(idPostComment, idComment, nameComment, emailComment, textComment);


                        }
                    }
                });

            let clicked = false;

            buttonPost.onclick = (e) => {

                if (!clicked) {
                    clicked = true;
                    commentBlockDiv.style.display = 'flex';
                } else {
                    commentBlockDiv.style.display = 'none';
                    clicked = false;
                }

            }
        }
    })
;