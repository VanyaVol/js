// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User (id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user1 = new User(1,'Ivan', 'Voloshin', 'vanya.vol@gmail.com','+380677655017');
// let user2 = new User(2,'Andriy', 'Buriy', 'andriy.buriy@gmail.com','+380969127347');
// let user3 = new User(3,'Kolya', 'Statutyak', 'kolya.statutyak@gmail.com','+38096460394');
// let user4 = new User(4,'Taras', 'Rizniv', 'tarasriz@gmail.com','+380951233345');
// let user5 = new User(5,'Misha', 'Tretyak', 'mishatretyak@gmail.com','+380677688011');
// let user6 = new User(6,'Oleg', 'Butiter', 'oleg.butt112@gmail.com','+380667655017');
// let user7 = new User(7,'Rostik', 'Porohovnik', 'rostik111@gmail.com','+38098658817');
// let user8 = new User(8,'David', 'Prokaza', 'davidprok1112@gmail.com','+380507355021');
// let user9 = new User(9,'Eduard', 'Kozlovskiy', 'kozlovskiy@gmail.com','+380977445447');
// let user10 = new User(10,'Stepan', 'Documinskiy', 'stepan122d@gmail.com','+380666655011');
//
// let arrayUsers = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
//
// console.log(arrayUsers);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// function User (id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user1 = new User(1,'Ivan', 'Voloshin', 'vanya.vol@gmail.com','+380677655017');
// let user2 = new User(2,'Andriy', 'Buriy', 'andriy.buriy@gmail.com','+380969127347');
// let user3 = new User(3,'Kolya', 'Statutyak', 'kolya.statutyak@gmail.com','+38096460394');
// let user4 = new User(4,'Taras', 'Rizniv', 'tarasriz@gmail.com','+380951233345');
// let user5 = new User(5,'Misha', 'Tretyak', 'mishatretyak@gmail.com','+380677688011');
// let user6 = new User(6,'Oleg', 'Butiter', 'oleg.butt112@gmail.com','+380667655017');
// let user7 = new User(7,'Rostik', 'Porohovnik', 'rostik111@gmail.com','+38098658817');
// let user8 = new User(8,'David', 'Prokaza', 'davidprok1112@gmail.com','+380507355021');
// let user9 = new User(9,'Eduard', 'Kozlovskiy', 'kozlovskiy@gmail.com','+380977445447');
// let user10 = new User(10,'Stepan', 'Documinskiy', 'stepan122d@gmail.com','+380666655011');
//
// let arrayUsers = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
//
// console.log(arrayUsers.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// function User (id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user1 = new User(1,'Ivan', 'Voloshin', 'vanya.vol@gmail.com','+380677655017');
// let user2 = new User(2,'Andriy', 'Buriy', 'andriy.buriy@gmail.com','+380969127347');
// let user3 = new User(3,'Kolya', 'Statutyak', 'kolya.statutyak@gmail.com','+38096460394');
// let user4 = new User(4,'Taras', 'Rizniv', 'tarasriz@gmail.com','+380951233345');
// let user5 = new User(5,'Misha', 'Tretyak', 'mishatretyak@gmail.com','+380677688011');
// let user6 = new User(6,'Oleg', 'Butiter', 'oleg.butt112@gmail.com','+380667655017');
// let user7 = new User(7,'Rostik', 'Porohovnik', 'rostik111@gmail.com','+38098658817');
// let user8 = new User(8,'David', 'Prokaza', 'davidprok1112@gmail.com','+380507355021');
// let user9 = new User(9,'Eduard', 'Kozlovskiy', 'kozlovskiy@gmail.com','+380977445447');
// let user10 = new User(10,'Stepan', 'Documinskiy', 'stepan122d@gmail.com','+380666655011');
//
// let arrayUsers = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
//
// console.log(arrayUsers.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let client1 = new Client(1, 'Ivan', 'Voloshin', 'vanya.vol@gmail.com', '+380677655017', ['iphone x', 'ssd']);
// let client2 = new Client(2, 'Andriy', 'Buriy', 'andriy.buriy@gmail.com', '+380969127347', ['Xiaomi Redmi Note 10']);
// let client3 = new Client(3, 'Kolya', 'Statutyak', 'kolya.statutyak@gmail.com', '+38096460394', ['USB Cable micro', 'Headphones Xiaomi', 'Card Reader']);
// let client4 = new Client(4, 'Taras', 'Rizniv', 'tarasriz@gmail.com', '+380951233345', ['Card Reader', 'USB cable Type C', 'USB cable micro', 'HDMI cable']);
// let client5 = new Client(5, 'Misha', 'Tretyak', 'mishatretyak@gmail.com', '+380677688011', ['Poco M3 Pro']);
// let client6 = new Client(6, 'Oleg', 'Butiter', 'oleg.butt112@gmail.com', '+380667655017', ['Card Reader', 'AUX cable']);
// let client7 = new Client(7, 'Rostik', 'Porohovnik', 'rostik111@gmail.com', '+38098658817', ['Micro SD card 64gb']);
// let client8 = new Client(8, 'David', 'Prokaza', 'davidprok1112@gmail.com', '+380507355021', ['Battery Xiaomi Redmi 4x', 'Screen protector for Redmi 4x']);
// let client9 = new Client(9, 'Eduard', 'Kozlovskiy', 'kozlovskiy@gmail.com', '+380977445447', ['Speaker Asus']);
// let client10 = new Client(10, 'Stepan', 'Documinskiy', 'stepan122d@gmail.com', '+380666655011', ['Screen protector Xiaomi Redmi 5a, Display Xiaomi Redmi 5a', 'Micro SD card 128gb', 'USB cable micro']);
//
// let clientsArray = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
// console.log(clientsArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let client1 = new Client(1, 'Ivan', 'Voloshin', 'vanya.vol@gmail.com', '+380677655017', ['iphone x', 'ssd']);
// let client2 = new Client(2, 'Andriy', 'Buriy', 'andriy.buriy@gmail.com', '+380969127347', ['Xiaomi Redmi Note 10']);
// let client3 = new Client(3, 'Kolya', 'Statutyak', 'kolya.statutyak@gmail.com', '+38096460394', ['USB Cable micro', 'Headphones Xiaomi', 'Card Reader']);
// let client4 = new Client(4, 'Taras', 'Rizniv', 'tarasriz@gmail.com', '+380951233345', ['Card Reader', 'USB cable Type C', 'USB cable micro', 'HDMI cable']);
// let client5 = new Client(5, 'Misha', 'Tretyak', 'mishatretyak@gmail.com', '+380677688011', ['Poco M3 Pro']);
// let client6 = new Client(6, 'Oleg', 'Butiter', 'oleg.butt112@gmail.com', '+380667655017', ['Card Reader', 'AUX cable']);
// let client7 = new Client(7, 'Rostik', 'Porohovnik', 'rostik111@gmail.com', '+38098658817', ['Micro SD card 64gb']);
// let client8 = new Client(8, 'David', 'Prokaza', 'davidprok1112@gmail.com', '+380507355021', ['Battery Xiaomi Redmi 4x', 'Screen protector for Redmi 4x']);
// let client9 = new Client(9, 'Eduard', 'Kozlovskiy', 'kozlovskiy@gmail.com', '+380977445447', ['Speaker Asus']);
// let client10 = new Client(10, 'Stepan', 'Documinskiy', 'stepan122d@gmail.com', '+380666655011', ['Screen protector Xiaomi Redmi 5a, Display Xiaomi Redmi 5a', 'Micro SD card 128gb', 'USB cable micro']);
//
// let clientsArray = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
// console.log(clientsArray.sort((a, b) => a.order.length - b.order.length));