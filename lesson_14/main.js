// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.
//     Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі

// function iWokeUp(callback) {
//     setTimeout(() => {
//         console.log('Прокинувся');
//         callback();
//     }, 3000);
// }
//
// function brushedHisTeeth(callback) {
//     setTimeout(() => {
//         console.log('Почистив зуби');
//         callback();
//     }, 2000);
// }
//
// function toWash(callback) {
//     setTimeout(() => {
//         console.log('Вмився');
//         callback();
//     }, 1000);
// }
//
// function gotDressed(callback) {
//     setTimeout(() => {
//         console.log('Одягнувся');
//         callback();
//     }, 1500);
// }
//
// function eat(callback) {
//     setTimeout(() => {
//         console.log('Поїв');
//         callback();
//     }, 4000);
// }
//
// function goToWork(callback) {
//     setTimeout(() => {
//         console.log('Поїхав на роботу');
//         callback();
//     }, 500);
// }
//
// function goToHome(callback) {
//     setTimeout(() => {
//         console.log('Поїхав додому');
//         callback();
//     }, 300);
// }
//
// function didHM(callback) {
//     setTimeout(() => {
//         console.log('Зробив дз');
//         callback();
//     }, 250);
// }
//
// function dinner(callback) {
//     setTimeout(() => {
//         console.log('Повечеряв');
//         callback();
//     }, 2000);
// }
//
// function wentToBad() {
//     setTimeout(() => {
//         console.log('Ліг спати');
//     }, 2000);
// }
//
// iWokeUp(() => {
//     brushedHisTeeth(() => {
//         toWash(() => {
//             gotDressed(() => {
//                 eat(() => {
//                     goToWork(() => {
//                         goToHome(() => {
//                             didHM(() => {
//                                dinner(()=>{
//                                    brushedHisTeeth(()=>{
//                                        wentToBad();
//                                    })
//                                })
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

// function iWokeUp() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Прокинувся');
//             resolve();
//         }, 3000);
//     });
// }
//
// function brushedHisTeeth() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Почистив зуби');
//             resolve();
//         }, 2000);
//     });
// }
//
// function toWash() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Вмився');
//             resolve();
//         }, 1000);
//     });
// }
//
// function gotDressed() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Одягнувся');
//             resolve();
//         }, 1500);
//     });
// }
//
// function eat() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Поїв');
//             resolve();
//         }, 4000);
//     });
// }
//
// function goToWork() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Поїхав на роботу');
//             resolve();
//         }, 500);
//     });
// }
//
// function goToHome() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Поїхав додому');
//             resolve();
//         }, 300);
//     });
// }
//
// function didHM() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Зробив дз');
//             resolve();
//         }, 250);
//     });
// }
//
// function dinner() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Повечеряв');
//             resolve();
//         }, 2000);
//     });
// }
//
// function wentToBad() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Ліг спати');
//             resolve();
//         }, 2000);
//     });
// }
//
//
// iWokeUp()
//     .then(() => {
//         return brushedHisTeeth();
//     })
//     .then(() => {
//         return toWash();
//     })
//     .then(() => {
//         return gotDressed();
//     })
//     .then(() => {
//         return eat();
//     })
//     .then(() => {
//         return goToWork()
//     })
//     .then(() => {
//         return goToHome()
//     })
//     .then(() => {
//         return didHM();
//     })
//     .then(()=>{
//         return dinner()
//     })
//     .then(()=>{
//         return brushedHisTeeth()
//     })
//     .then(() => {
//         return wentToBad();
//     });

// function iWokeUp() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Прокинувся');
//         }, 3000);
//     })
// }
//
// function brushedHisTeeth() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Почистив зуби');
//         }, 2000);
//     })
// }
//
//
// function toWash() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Вмився');
//         }, 1000);
//     });
// }
//
// function gotDressed() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Одягнувся');
//         }, 1500);
//     });
// }
//
// function eat() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Поїв');
//         }, 4000);
//     });
// }
//
// function goToWork() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Поїхав на роботу');
//         }, 500);
//     });
// }
//
// function goToHome() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Поїхав додому');
//         }, 300);
//     });
// }
//
// function didHM() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Зробив дз');
//         }, 250);
//     });
// }
//
// function dinner() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Повечеряв');
//         }, 2000);
//     });
// }
//
// function wentToBad() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Ліг спати');
//         }, 2000);
//     });
// }
//
//
// async function routine() {
//     console.log(await iWokeUp());
//     console.log(await brushedHisTeeth());
//     console.log(await toWash());
//     console.log(await gotDressed());
//     console.log(await eat());
//     console.log(await goToWork());
//     console.log(await goToHome());
//     console.log(await didHM());
//     console.log(await dinner());
//     console.log(await brushedHisTeeth());
//     console.log(await wentToBad());
// }
//
// routine();




