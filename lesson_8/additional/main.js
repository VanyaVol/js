// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль


function classesHtml(startElementHtml) {

    let classesHtml = [];

    reCall(startElementHtml);

    function reCall(startElement) {

        if (startElement.classList.value) {
            classesHtml.push(startElement.classList.value);
        }


        if (startElement.children.length) {
            for (const element of startElement.children) {
                reCall(element);
            }
        }
    }

    classesHtml = classesHtml.join(' ').split(' ');

    let count = 0;
    for (let i = 0; i < classesHtml.length; i++) {
        for (let j = 0; j < classesHtml.length; j++) {
            if (classesHtml[i] === classesHtml[j]) {
                count++;
            }
        }
        if (count > 1) {
            classesHtml.splice(i, 1);
        }

        count = 0;
    }

    return classesHtml;

}


console.log(classesHtml(document.body));