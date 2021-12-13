// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, manufacter, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.manufacter = manufacter;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info = function () {
//         console.log(`Виробник - ${this.manufacter}, модель - ${this.model}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed} км на годину, об'єм двигуна - ${this.engineCapacity}`);
//     }
//     this.increaseMaxSpeed = function (newValue) {
//         console.log(this.maxSpeed += newValue);
//     }
//     this.changeYear = function (newValue) {
//         console.log(this.year = newValue);
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// function Driver (name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
// }
//
// let audi = new Car('A8', 'Audi', '2010', 320, 2.5);
//
// let driver1 = new Driver('Andrey','Kutcey',25);
//
// audi.addDriver(driver1);
//
// console.log(audi);
//
// audi.info();
//
// audi.increaseMaxSpeed(230);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, manufacter, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.manufacter = manufacter;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info() {
//         console.log(`Виробник - ${this.manufacter}, модель - ${this.model}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed} км на годину, об'єм двигуна - ${this.engineCapacity}`);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         console.log(this.maxSpeed += newSpeed);
//     }
//
//     changeYear(newValue) {
//         console.log(this.year = newValue);
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
//
// class Driver {
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//     }
// }
//
// let bmw = new Car('M5','BMW','2010',220,2.5);
//
// let driverAndrey = new Driver('Ivan','Voloshin',21);
//
// bmw.drive();
//
// bmw.info();
//
// bmw.increaseMaxSpeed(100);
//
// bmw.changeYear('2012');
//
// bmw.addDriver(driverAndrey);
//
// console.log(bmw);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Popelushka {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// class Prince {
//     constructor(name, age, shoes) {
//         this.name = name;
//         this.age = age;
//         this.shoes = shoes;
//     }
// }
//
// let pop1 = new Popelushka('Anya',21,35);
// let pop2 = new Popelushka('Ira',22,34);
// let pop3 = new Popelushka('Kira',23,35);
// let pop4 = new Popelushka('Nadya',24,36);
// let pop5 = new Popelushka('Alina',26,37);
// let pop6 = new Popelushka('Yulia',25,38);
// let pop7 = new Popelushka('Katya',21,39);
// let pop8 = new Popelushka('Kristina',23,32);
// let pop9 = new Popelushka('Albina',24,33);
// let pop10 = new Popelushka('Angelina',22,35);
//
// let arrayPop = [pop1,pop2,pop3,pop4,pop5,pop6,pop7,pop7,pop9,pop10];
//
// let princeObj = new Prince('Maks',25,34);
//
// for (const popelushkaObj of arrayPop) {
//     if (princeObj.shoes === popelushkaObj.footSize) {
//         console.log(popelushkaObj);
//     }
// }
//
// let find = (arrayPopeluhok, princeObj) => arrayPopeluhok.find(value => value.footSize === princeObj.shoes);
//
// console.log(find(arrayPop, princeObj));

// function Popelushka(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// function Prince(name, age, shoes) {
//     this.name = name;
//     this.age = age;
//     this.shoes = shoes;
// }
//
// let pop1 = new Popelushka('Anya',21,35);
// let pop2 = new Popelushka('Ira',22,34);
// let pop3 = new Popelushka('Kira',23,35);
// let pop4 = new Popelushka('Nadya',24,36);
// let pop5 = new Popelushka('Alina',26,37);
// let pop6 = new Popelushka('Yulia',25,38);
// let pop7 = new Popelushka('Katya',21,39);
// let pop8 = new Popelushka('Kristina',23,32);
// let pop9 = new Popelushka('Albina',24,33);
// let pop10 = new Popelushka('Angelina',22,35);
//
// let arrayPop = [pop1,pop2,pop3,pop4,pop5,pop6,pop7,pop7,pop9,pop10];
//
// let princeObj = new Prince('Maks',25,34);
//
// for (const popelushkaObj of arrayPop) {
//     if (princeObj.shoes === popelushkaObj.footSize) {
//         console.log(popelushkaObj);
//     }
// }
//
// let find = (arrayPopeluhok, princeObj) => arrayPopeluhok.find(value => value.footSize === princeObj.shoes);
//
// console.log(find(arrayPop, princeObj));