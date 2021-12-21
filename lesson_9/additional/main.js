// - Є масив :
//
//     let usersList = [
//         {
//             id: 1,
//             name: 'Leanne Graham',
//             username: 'Bret',
//             email: 'Sincere@april.biz',
//             address: {
//                 street: 'Kulas Light',
//                 suite: 'Apt. 556',
//                 city: 'Gwenborough',
//                 zipcode: '92998-3874',
//                 geo: {
//                     lat: '-37.3159',
//                     lng: '81.1496'
//                 }
//             },
//             phone: '1-770-736-8031',
//             website: 'hildegard.org',
//             company: {
//                 name: 'Romaguera-Crona',
//                 catchPhrase: 'Multi-layered client-server neural-net',
//                 bs: 'harness real-time e-markets'
//             }
//         },
//         {
//             id: 2,
//             name: 'Ervin Howell',
//             username: 'Antonette',
//             email: 'Shanna@melissa.tv',
//             address: {
//                 street: 'Victor Plains',
//                 suite: 'Suite 879',
//                 city: 'Wisokyburgh',
//                 zipcode: '90566-7771',
//                 geo: {
//                     lat: '-43.9509',
//                     lng: '-34.4618'
//                 }
//             },
//             phone: '010-692-6593',
//             website: 'anastasia.net',
//             company: {
//                 name: 'Deckow-Crist',
//                 catchPhrase: 'Proactive didactic contingency',
//                 bs: 'synergize scalable supply-chains'
//             }
//         },
//         {
//             id: 3,
//             name: 'Clementine Bauch',
//             username: 'Samantha',
//             email: 'Nathan@yesenia.net',
//             address: {
//                 street: 'Douglas Extension',
//                 suite: 'Suite 847',
//                 city: 'McKenziehaven',
//                 zipcode: '59590-4157',
//                 geo: {
//                     lat: '-68.6102',
//                     lng: '-47.0653'
//                 }
//             },
//             phone: '1-463-123-4447',
//             website: 'ramiro.info',
//             company: {
//                 name: 'Romaguera-Jacobson',
//                 catchPhrase: 'Face to face bifurcated interface',
//                 bs: 'e-enable strategic applications'
//             }
//         },
//         {
//             id: 4,
//             name: 'Patricia Lebsack',
//             username: 'Karianne',
//             email: 'Julianne.OConner@kory.org',
//             address: {
//                 street: 'Hoeger Mall',
//                 suite: 'Apt. 692',
//                 city: 'South Elvis',
//                 zipcode: '53919-4257',
//                 geo: {
//                     lat: '29.4572',
//                     lng: '-164.2990'
//                 }
//             },
//             phone: '493-170-9623',
//             website: 'kale.biz',
//             company: {
//                 name: 'Robel-Corkery',
//                 catchPhrase: 'Multi-tiered zero tolerance productivity',
//                 bs: 'transition cutting-edge web services'
//             }
//         },
//         {
//             id: 5,
//             name: 'Chelsey Dietrich',
//             username: 'Kamren',
//             email: 'Lucio_Hettinger@annie.ca',
//             address: {
//                 street: 'Skiles Walks',
//                 suite: 'Suite 351',
//                 city: 'Roscoeview',
//                 zipcode: '33263',
//                 geo: {
//                     lat: '-31.8129',
//                     lng: '62.5342'
//                 }
//             },
//             phone: '(254)954-1289',
//             website: 'demarco.info',
//             company: {
//                 name: 'Keebler LLC',
//                 catchPhrase: 'User-centric fault-tolerant solution',
//                 bs: 'revolutionize end-to-end systems'
//             }
//         },
//         {
//             id: 6,
//             name: 'Mrs. Dennis Schulist',
//             username: 'Leopoldo_Corkery',
//             email: 'Karley_Dach@jasper.info',
//             address: {
//                 street: 'Norberto Crossing',
//                 suite: 'Apt. 950',
//                 city: 'South Christy',
//                 zipcode: '23505-1337',
//                 geo: {
//                     lat: '-71.4197',
//                     lng: '71.7478'
//                 }
//             },
//             phone: '1-477-935-8478 x6430',
//             website: 'ola.org',
//             company: {
//                 name: 'Considine-Lockman',
//                 catchPhrase: 'Synchronised bottom-line interface',
//                 bs: 'e-enable innovative applications'
//             }
//         },
//         {
//             id: 7,
//             name: 'Kurtis Weissnat',
//             username: 'Elwyn.Skiles',
//             email: 'Telly.Hoeger@billy.biz',
//             address: {
//                 street: 'Rex Trail',
//                 suite: 'Suite 280',
//                 city: 'Howemouth',
//                 zipcode: '58804-1099',
//                 geo: {
//                     lat: '24.8918',
//                     lng: '21.8984'
//                 }
//             },
//             phone: '210.067.6132',
//             website: 'elvis.io',
//             company: {
//                 name: 'Johns Group',
//                 catchPhrase: 'Configurable multimedia task-force',
//                 bs: 'generate enterprise e-tailers'
//             }
//         },
//         {
//             id: 8,
//             name: 'Nicholas Runolfsdottir V',
//             username: 'Maxime_Nienow',
//             email: 'Sherwood@rosamond.me',
//             address: {
//                 street: 'Ellsworth Summit',
//                 suite: 'Suite 729',
//                 city: 'Aliyaview',
//                 zipcode: '45169',
//                 geo: {
//                     lat: '-14.3990',
//                     lng: '-120.7677'
//                 }
//             },
//             phone: '586.493.6943 x140',
//             website: 'jacynthe.com',
//             company: {
//                 name: 'Abernathy Group',
//                 catchPhrase: 'Implemented secondary concept',
//                 bs: 'e-enable extensible e-tailers'
//             }
//         },
//         {
//             id: 9,
//             name: 'Glenna Reichert',
//             username: 'Delphine',
//             email: 'Chaim_McDermott@dana.io',
//             address: {
//                 street: 'Dayna Park',
//                 suite: 'Suite 449',
//                 city: 'Bartholomebury',
//                 zipcode: '76495-3109',
//                 geo: {
//                     lat: '24.6463',
//                     lng: '-168.8889'
//                 }
//             },
//             phone: '(775)976-6794 x41206',
//             website: 'conrad.com',
//             company: {
//                 name: 'Yost and Sons',
//                 catchPhrase: 'Switchable contextually-based project',
//                 bs: 'aggregate real-time technologies'
//             }
//         },
//         {
//             id: 10,
//             name: 'Clementina DuBuque',
//             username: 'Moriah.Stanton',
//             email: 'Rey.Padberg@karina.biz',
//             address: {
//                 street: 'Kattie Turnpike',
//                 suite: 'Suite 198',
//                 city: 'Lebsackbury',
//                 zipcode: '31428-2261',
//                 geo: {
//                     lat: '-38.2386',
//                     lng: '57.2232'
//                 }
//             },
//             phone: '024-648-3804',
//             website: 'ambrose.net',
//             company: {
//                 name: 'Hoeger LLC',
//                 catchPhrase: 'Centralized empowering task-force',
//                 bs: 'target end-to-end models'
//             }
//         }
//     ];
//
// Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів створити свої окремі блок.

let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

const wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);

for (const user of usersList) {
    const userBlock = document.createElement('div');
    userBlock.classList.add('user-block');
    wrap.appendChild(userBlock);

    const UserBlockHeader = document.createElement('div');
    UserBlockHeader.classList.add('user-block-header');
    userBlock.appendChild(UserBlockHeader);

    const userInfo = document.createElement('div');
    userInfo.classList.add('user-info');
    UserBlockHeader.appendChild(userInfo);

    const userHeader = document.createElement('h3');
    userHeader.innerText='User';

    const userContent = document.createElement('div');

    userInfo.append(userHeader,userContent);


    const userId = document.createElement('h4');
    userId.innerText = `ID: ${user.id}`;

    const userName = document.createElement('h3');
    userName.innerText = user.name;

    const userUsername = document.createElement('h4');
    userUsername.innerText = `username: ${user.username}`;

    const userEmail = document.createElement('h5');
    userEmail.innerText = `email: ${user.email}`;

    const userPhone = document.createElement('h6');
    userPhone.innerText = `Phone: ${user.phone}`;

    const userWebsite = document.createElement('p');
    userWebsite.innerText = `website: ${user.website}`;

    userContent.append(userId, userName, userUsername, userEmail, userPhone, userWebsite);

    const userAddressBlock = document.createElement('div');
    userAddressBlock.classList.add('user-address');
    UserBlockHeader.appendChild(userAddressBlock);

    const userAddressHeader = document.createElement('h3');
    userAddressHeader.innerText = 'Address';

    const userAddressContent = document.createElement('div');
    userAddressContent.classList.add('user-address-content');

    userAddressBlock.append(userAddressHeader,userAddressContent);

    const userAddressCity = document.createElement('h4');
    userAddressCity.innerText = `City: ${user.address.city}`;

    const userAddressStreet = document.createElement('h4');
    userAddressStreet.innerText = `Street: ${user.address.street}`;

    const userAddressSuite = document.createElement('h4');
    userAddressSuite.innerText = `Suite: ${user.address.suite}`;

    const userAddressZipcode = document.createElement('h4');
    userAddressZipcode.innerText = `Index: ${user.address.zipcode}`;

    const userAddressGeo = document.createElement('div');
    userAddressGeo.classList.add('user-address-geo');

    const userAdDressGeoTitle = document.createElement('h4');
    userAdDressGeoTitle.innerText = 'Geo:'

    const userGeoLngLet = document.createElement('p');
    userGeoLngLet.innerText = `Lng: ${user.address.geo.lng}, lat: ${user.address.geo.lat}`

    userAddressGeo.append(userAdDressGeoTitle,userGeoLngLet);

    userAddressContent.append(userAddressZipcode, userAddressCity, userAddressStreet, userAddressSuite,userAddressGeo);

    const userCompanyBlock = document.createElement('div');
    userCompanyBlock.classList.add('user-company');
    userBlock.appendChild(userCompanyBlock);

    const userCompanyHeader = document.createElement('h3');
    userCompanyHeader.innerText = 'Company';

    const userCompanyContent = document.createElement('div');

    userCompanyBlock.append(userCompanyHeader, userCompanyContent);

    const userCompanyName = document.createElement('p');
    userCompanyName.innerText = `Name: ${user.company.name}`;

    const userCompanyCatchPhrase = document.createElement('p');
    userCompanyCatchPhrase.innerText = `${user.company.catchPhrase}`;

    const userCompanyBs = document.createElement('p');
    userCompanyBs.innerText = `${user.company.bs}`;

    userCompanyContent.append(userCompanyName, userCompanyCatchPhrase, userCompanyBs);


}




