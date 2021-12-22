const url = new URL(window.location.href);

const urlUser = url.searchParams.get('user');

const user = JSON.parse(urlUser);

const wrapDetailsDiv = document.createElement('div');
wrapDetailsDiv.classList.add('wrapper');
wrapDetailsDiv.style.display = 'flex';
wrapDetailsDiv.style.flexWrap = 'wrap';
wrapDetailsDiv.style.maxWidth = '1200px';
wrapDetailsDiv.style.margin = '0 auto';

document.body.appendChild(wrapDetailsDiv);


const userBlockDetails = document.createElement('div');
userBlockDetails.style.boxSizing = 'border-box';
userBlockDetails.style.width = '100%';
userBlockDetails.style.padding = '13px';
userBlockDetails.style.fontFamily = 'sans-serif';
userBlockDetails.style.boxShadow = '0 2px 5px';
userBlockDetails.style.borderRadius = '3px';
userBlockDetails.style.backgroundColor = '#d3d3d3';

wrapDetailsDiv.appendChild(userBlockDetails);

const leftUserBlock = document.createElement('div');
const centerUserBlock = document.createElement('div');
const rightUserBlock = document.createElement('div');

const topBlockUser = document.createElement('div');
topBlockUser.style.display = 'flex';
topBlockUser.style.justifyContent = 'space-around';

const bottomBlockUser = document.createElement('div');
bottomBlockUser.style.display = 'flex';
bottomBlockUser.style.justifyContent = 'center'

const postsBlock = document.createElement('div');
postsBlock.style.display = 'none';
postsBlock.style.flexWrap = 'wrap';
postsBlock.style.marginTop = '15px';
postsBlock.style.height = 'auto';
postsBlock.style.columnGap = '18px';
postsBlock.style.rowGap = '20px';
postsBlock.style.marginBottom = '20px';
postsBlock.style.paddingTop = '20px';
postsBlock.style.borderTop = '1px solid grey';


userBlockDetails.append(topBlockUser, bottomBlockUser, postsBlock);

topBlockUser.append(leftUserBlock, centerUserBlock, rightUserBlock);

const userInfo = document.createElement('h2');
userInfo.innerText = 'User info';

const userInfoBlock = document.createElement('div');

const userId = document.createElement('h3');
userId.style.fontWeight = 'normal';
userId.innerText = `ID: ${user.id}`;

const userName = document.createElement('h2');
userName.style.fontWeight = '200';
userName.innerText = `Name: ${user.name}`;

const userUsername = document.createElement('h3');
userUsername.style.fontWeight = '200';
userUsername.innerText = `Username: ${user.username}`;

const userEmail = document.createElement('h4');
userEmail.style.fontWeight = '200';
userEmail.innerText = `Email: ${user.email}`;

const userPhone = document.createElement('h3');
userPhone.style.fontWeight = '200';
userPhone.innerText = `Phone: ${user.phone}`;

const userWebsite = document.createElement('h4');
userWebsite.style.fontWeight = '200';
userWebsite.innerText = `Website: ${user.website}`;

const userAddressBlock = document.createElement('div');

const userAddress = document.createElement('h2');
userAddress.innerText = 'Address';

centerUserBlock.append(userAddress, userAddressBlock);

const userAddressZipcode = document.createElement('h3');
userAddressZipcode.style.fontWeight = '200';
userAddressZipcode.innerText = `Zipcode: ${user.address.zipcode}`;

const userAddressSuite = document.createElement('h3');
userAddressSuite.style.fontWeight = '200';
userAddressSuite.innerText = `Suite: ${user.address.suite}`;

const userAddressCity = document.createElement('h3');
userAddressCity.style.fontWeight = '200';
userAddressCity.innerText = `City: ${user.address.city}`;

const userAddressGeo = document.createElement('h3');
userAddressGeo.style.fontWeight = '200';
userAddressGeo.innerText = `Geo: ${user.address.geo.lat}, ${user.address.geo.lng}`;


userAddressBlock.append(userAddressZipcode, userAddressSuite, userAddressCity, userAddressGeo);


const userCompany = document.createElement('h2');
userCompany.innerText = 'Company';

const userCompanyBlock = document.createElement('div');

const userCompanyName = document.createElement('h2');
userCompanyName.style.fontWeight = '200';
userCompanyName.innerText = `${user.company.name}`;

const userCompanyCatchPhase = document.createElement('h3');
userCompanyCatchPhase.style.fontWeight = '200';
userCompanyCatchPhase.innerText = `Catch phase: ${user.company.catchPhrase}`;

const userCompanyBS = document.createElement('h3');
userCompanyBS.style.fontWeight = '200';
userCompanyBS.innerText = `Bs: ${user.company.bs}`;

userCompanyBlock.append(userCompanyName, userCompanyCatchPhase, userCompanyBS);

rightUserBlock.append(userCompany, userCompanyBlock);


const buttonUserDetails = document.createElement('button');
buttonUserDetails.style.height = '35px';
buttonUserDetails.style.width = '90%';
buttonUserDetails.style.backgroundColor = '#ffffff';
buttonUserDetails.style.border = 'none';
buttonUserDetails.style.cursor = 'pointer';
buttonUserDetails.style.textTransform = 'uppercase';
buttonUserDetails.style.fontWeight = '500';
buttonUserDetails.innerText = 'Показати пости поточного користувача';

leftUserBlock.append(userInfo, userInfoBlock);
userInfoBlock.append(userId, userName, userUsername, userEmail, userPhone, userWebsite);

buttonUserDetails.addEventListener('mouseover', () => {
    buttonUserDetails.style.transition = '0.2s';
    buttonUserDetails.style.textDecoration = 'underline';
    buttonUserDetails.style.textUnderlineOffset = '1px';
    buttonUserDetails.style.boxShadow = '2px 2px 5px';
});

buttonUserDetails.addEventListener('mouseleave', () => {
    buttonUserDetails.style.transition = '0.2s';
    buttonUserDetails.style.boxShadow = '';
    buttonUserDetails.style.textDecoration = '';

});


// window.location.href = `user-details.html?user=${JSON.stringify(user)}`;
fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {

            const postBlock = document.createElement('div');
            postBlock.style.width = '220px';
            postBlock.style.display = 'flex';
            postBlock.style.flexDirection = 'column';
            postBlock.style.justifyContent = 'space-between';
            postBlock.style.boxSizing = 'border-box';
            postBlock.style.padding = '5px';
            postBlock.style.borderRadius = '3px';
            postBlock.style.border = '1px solid #818181';
            postBlock.style.backgroundColor = '#b9b9b9';
            postBlock.style.boxShadow = '5px 5px 10px #818181';

            postsBlock.append(postBlock);

            const titlePost = document.createElement('p');
            titlePost.innerText = `${post.title}`;

            const buttonPost = document.createElement('button');
            buttonPost.style.height = '20px';
            buttonPost.style.backgroundColor = '#ffffff';
            buttonPost.style.border = 'none';
            buttonPost.style.cursor = 'pointer';
            buttonPost.style.textTransform = 'uppercase';
            buttonPost.style.fontWeight = '500';
            buttonPost.style.fontSize = '11px';
            buttonPost.innerText = 'Детальніше про пост';

            postBlock.append(titlePost, buttonPost);

            buttonPost.addEventListener('mouseover', () => {
                buttonPost.style.transition = '0.2s';
                buttonPost.style.textDecoration = 'underline';
                buttonPost.style.textUnderlineOffset = '1px';
                buttonPost.style.boxShadow = '1px 1px 3px';
            });

            buttonPost.addEventListener('mouseleave', () => {
                buttonPost.style.transition = '0.2s';
                buttonPost.style.boxShadow = '';
                buttonPost.style.textDecoration = '';

            });

            buttonPost.addEventListener('click', () => {
                console.log('yes',post.title);
            });

        }

        let click = false;

        buttonUserDetails.addEventListener('click', () => {
            if (!click) {
                postsBlock.style.display = 'flex';
                click = true;
                buttonUserDetails.innerText = 'Сховати пости поточного користувача';

            } else {
                postsBlock.style.display = 'none';
                click = false;
                buttonUserDetails.innerText = 'Показати пости поточного користувача';

            }


        });

    });


bottomBlockUser.appendChild(buttonUserDetails);





