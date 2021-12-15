// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }


class User {

    constructor(name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, companyCatchPhrase, companyBs) {

        class Address {

            constructor(street, city, zipcode) {

                class Geo {
                    constructor(lat, lng) {
                        this.lat = lat;
                        this.lng = lng;
                    }

                }

                this.street = street;
                this.city = city;
                this.zipcode = zipcode;
                this.suite = suite;
                this.geo = new Geo(lat, lng);
            }
        }

        class Company {
            constructor(name, catchPhrase, bs) {
                this.companyName = companyName;
                this.catchPhrase = catchPhrase;
                this.bs = bs;
            }
        }

        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.website = website;
        this.company = new Company(companyName, companyCatchPhrase, companyBs);
        this.address = new Address(street, city, zipcode);
    }

}

console.log(new User('Ivan', 'ivan', 'vanya.streetworkout.sw.vol@gmail.com', 'Shyroka', 'asdasd', 'Lviv', 79052, 123, 421, '+380959127347', 'http://google.com', 'Google', 'Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor.'));


//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//     ]
// }


class Attrs {
    constructor(titleOfAttrs, actionOfAttr) {
        this.titleOfAttrs = titleOfAttrs;
        this.actionOfAttr = actionOfAttr;
    }
}

class HtmlTag {
    constructor(titleOfTag, action, attrs) {

        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}

let a = new HtmlTag('a',
    'Тег a является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег a устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.',
    [
        new Attrs('accesskey', 'Активация ссылки с помощью комбинации клавиш.'),
        new Attrs('coords', 'Устанавливает координаты активной области.'),
        new Attrs('download', 'Предлагает скачать указанный по ссылке файл.')
    ]);

let div = new HtmlTag('div',
    'Элемент div является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.',
    [
        new Attrs('align', 'Задает выравнивание содержимого тега'),
        new Attrs('title', 'Добавляет всплывающую подсказку к содержимому.')
    ]);

let h1 = new HtmlTag('h1','HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег h1 представляет собой наиболее важный заголовок первого уровня, а тег h6 служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги h1,...,h6 относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.',
    [
        new Attrs('align','Определяет выравнивание заголовка.'),
        new Attrs('hidden','Скрывает содержимое элемента от просмотра.')
    ]);

let span = new HtmlTag('span','Тег span предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как table, p или div, с помощью тега span можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега p) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег span и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.',
    [
        new Attrs('accesskey','Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'),
        new Attrs('class','Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'),
        new Attrs('dir','Задает направление и отображение текста — слева направо или справа налево.')
    ]);

let input = new HtmlTag('input','Тег input является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом input предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент input не требуется помещать внутрь контейнера form, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать form обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.',
    [
        new Attrs('autofocus','Устанавливает фокус в поле формы.'),
        new Attrs('list','Указывает на список вариантов, которые можно выбирать при вводе текста.'),
        new Attrs('name','Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать.')
    ]);

let form = new HtmlTag('form','Тег form устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению. Документ может содержать любое количество форм, но одновременно на сервер может быть отправлена только одна форма. По этой причине данные форм должны быть независимы друг от друга. Для отправки формы на сервер используется кнопка Submit, того же можно добиться, если нажать клавишу Enter в пределах формы. Если кнопка Submit отсутствует в форме, клавиша Enter имитирует ее использование.',
    [
        new Attrs('action','Адрес программы или документа, который обрабатывает данные формы.'),
        new Attrs('autocomplete','Включает автозаполнение полей формы.'),
        new Attrs('enctype','Способ кодирования данных формы.')
    ]);

let option = new HtmlTag('option','Тег option определяет отдельные пункты списка, создаваемого с помощью контейнера select. Ширина списка определяется самым широким текстом, указанным в теге option, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент select внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.',
    [
        new Attrs('disabled','Заблокировать для доступа элемент списка.'),
        new Attrs('label','Указание метки пункта списка.'),
        new Attrs('selected','Заранее устанавливает определенный пункт списка выделенным.')
    ]);

let select = new HtmlTag('select','Тег select позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега select, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге option, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега option, который должен быть вложен в контейнер select. Если планируется отправлять данные списка на сервер, то требуется поместить элемент select внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.',
    [
        new Attrs('multiple','Позволяет одновременно выбирать сразу несколько элементов списка.'),
        new Attrs('size','Количество отображаемых строк списка.'),
        new Attrs('tabindex','Определяет последовательность перехода между элементами при нажатии на клавишу Tab')
    ]);


console.log(a,div,h1,span,input,form,option,select);