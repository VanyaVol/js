const wrapDiv = document.createElement('div');
wrapDiv.classList.add('wrapper');
wrapDiv.style.display = 'flex';
wrapDiv.style.flexWrap = 'wrap';
wrapDiv.style.columnGap = '20px';
wrapDiv.style.rowGap = '20px';
wrapDiv.style.maxWidth = '1200px';
wrapDiv.style.margin = '0 auto';

document.body.appendChild(wrapDiv);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const itemUser of users) {
            const userBlock = document.createElement('div');
            userBlock.style.boxSizing = 'border-box';
            userBlock.style.width = '590px';
            userBlock.style.padding = '13px';
            userBlock.style.fontFamily = 'sans-serif';
            userBlock.style.boxShadow = '0 2px 5px';
            userBlock.style.borderRadius = '3px';
            userBlock.style.backgroundColor = '#d3d3d3';

            wrapDiv.appendChild(userBlock);

            const userId = document.createElement('h3');
            userId.style.fontWeight = 'normal';
            userId.innerText = `ID: ${itemUser.id}`;

            const userName = document.createElement('h2');
            userName.style.fontWeight = '200';
            userName.innerText = `Name: ${itemUser.name}`;

            const buttonUser = document.createElement('button');
            buttonUser.style.height = '35px';
            buttonUser.style.width = '270px';
            buttonUser.style.backgroundColor = '#ffffff';
            buttonUser.style.border = 'none';
            buttonUser.style.cursor = 'pointer';
            buttonUser.style.textTransform = 'uppercase';
            buttonUser.style.fontWeight = '500';
            buttonUser.innerText = 'Детальніше про користувача';

            userBlock.append(userId, userName, buttonUser);

            buttonUser.addEventListener('mouseover', () => {
                buttonUser.style.transition = '0.2s';
                buttonUser.style.textDecoration = 'underline';
                buttonUser.style.textUnderlineOffset = '1px';
                buttonUser.style.boxShadow = '2px 2px 5px';
            })

            buttonUser.addEventListener('mouseleave', () => {
                buttonUser.style.transition = '0.2s';
                buttonUser.style.boxShadow = '';
                buttonUser.style.textDecoration = '';

            })

            buttonUser.addEventListener('click', () => {
                window.location.href = `user-details.html?user=${JSON.stringify(itemUser)}`;
            });
        }
    });




