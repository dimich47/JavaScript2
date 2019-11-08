let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];
let cnt=1;
function generateTable(data)
{
    let table = document.createElement("table");    //создание тега таблицы
    let cap = table.createCaption();                         //создание заголовка
    cap.innerText = "Таблица "+cnt;


    let row = table.insertRow(0);                     // добавить ряд 0
    let row2 = table.insertRow(1);                    // добавить ряд 1

    for( let elem in data[0])                               // создание шапки таблицы
    {
        let  cell = row.insertCell(elem);                   // ячейки
        cell.innerText = elem.toUpperCase();                // запись содержимого + изменение регистра
        cell.style.border= "1px solid lightgrey";
    }

    for(let i=1;i<data.length+1;i++)                        // заполнение таблицы
    {
        row2 = table.insertRow(i);                          // добавить ряд

        for(let elem2 in data[0]) {

                let cell2 = row2.insertCell(elem2);          // ячейки
                cell2.innerText = data[i-1][elem2];          // данные
                cell2.style.border= "1px solid lightgrey";
            }
    }

    cnt++; // счетчик таблиц
    document.body.append(table); //расположить снизу
}

// примеры вызова функции:
generateTable(articles); // генерация таблицы со статьями
generateTable(goods); // генерация таблицы с товарами