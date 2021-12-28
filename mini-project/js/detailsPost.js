

const url = new URL(window.location.href)

const urlPost = url.searchParams.get('post');

const post = JSON.parse(urlPost);

document.title= `Comments ${post.title}`;

const wrapper = document.createElement('div');
wrapper.style.margin = '0 auto';
wrapper.style.maxWidth = '1200px';
wrapper.style.boxSizing = 'border-box';
wrapper.style.padding = '13px';
wrapper.style.fontFamily = 'sans-serif';
wrapper.style.boxShadow = '0 2px 5px';
wrapper.style.borderRadius = '3px';
wrapper.style.backgroundColor = '#d3d3d3';
document.body.appendChild(wrapper);

const postHeader = document.createElement('h2');
postHeader.innerText = `Post`;
postHeader.style.textAlign = 'center';

const postBlockDiv = document.createElement('div');
wrapper.append(postBlockDiv);



const userId = document.createElement('h2');
userId.innerText = `User id: ${post.userId}`;

const postTitle = document.createElement('h3');
postTitle.innerText = `Title: ${post.title}`;

const postBody = document.createElement('h3');
postBody.style.fontWeight = '200'
postBody.innerText = `${post.body}`;

const commentsBlock = document.createElement('div');
commentsBlock.style.display = 'flex';
commentsBlock.style.flexWrap = 'wrap';
commentsBlock.style.flexBasis = '100%';
commentsBlock.style.columnGap = '18px';
commentsBlock.style.rowGap = '18px';

postBlockDiv.append(postHeader,userId, postTitle, postBody,commentsBlock);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            const commentBlock = document.createElement('div');
            commentBlock.style.width = '280px';
            commentBlock.style.boxSizing = 'border-box';
            commentBlock.style.padding = '5px';
            commentBlock.style.borderRadius = '3px';
            commentBlock.style.border = '1px solid #818181';
            commentBlock.style.backgroundColor = '#b9b9b9';
            commentBlock.style.boxShadow = '5px 5px 10px #818181';

            commentsBlock.appendChild(commentBlock);

            const commentIdPost = document.createElement('h4');
            commentIdPost.innerText = `Post id: ${post.id}`;

            const  commentId = document.createElement('h4');
            commentId.innerText = `ID: ${comment.id}`;

            const  commentName = document.createElement('h5');
            commentName.innerText = `Name: ${comment.name}`;

            const  commentEmail = document.createElement('h5');
            commentEmail.style.fontWeight='200';
            commentEmail.innerText = `Email: ${comment.email}`;

            const  commentBody = document.createElement('h5');
            commentBody.style.fontWeight='200';
            commentBody.innerText = `${comment.body}`;


            commentBlock.append(commentIdPost, commentId, commentName, commentEmail, commentBody);
        }
    });



