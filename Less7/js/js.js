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

function generateTable(data)
{
    let table = document.createElement("table");    //создание тега таблицы
    let cap = table.createCaption();                         //создание заголовка
    cap.innerText = "Таблица ";


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


    document.body.prepend(table); //расположить снизу
}
generateTable(goods); // генерация таблицы с товарами

// ЗАДАНИЕ 1   //////////////////////////////////////////////////////////////////////////////////////////////////////
//
let titleTable= document.querySelector("tr:first-child");
let table = document.querySelector("table");                //      ???? - ПОЧЕМУ НЕ РАБОТАЕТ -document.getElementsByTagName ???

titleTable.addEventListener("click",tableSort);

function tableSort(event)
{
    //event.target-элемент на котором сработал "click"
    let clickElem = event.target.innerText.toLowerCase();

    if(clickElem=== "title")
    {
        goods.sort( (a,b)=>a.title.localeCompare(b.title));
    }
    if(clickElem=== "price")
    {
        goods.sort( (a,b)=>a.price - b.price);
    }
    if(clickElem=== "count")
    {
        goods.sort( (a,b)=>a.count - b.count);
    }
    table.parentNode.removeChild(table);
    generateTable(goods);
}
// ЗАДАНИЕ 2 /////////////////////////////////////////////////////////////////////////////////////////////////////////
//

let att2 = 0;
let rowForPrize=3;          // количество карточек - rowForPrize*rowForPrize
let att = 3;                // количество попыток
let numberPrize = 5;        // количество призовых номеров
let num2 = [];              // массив с призовыми номерами


let myDiv=document.getElementById("less3");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let p2 = document.createElement("p");

p2.innerText = "Количество попыток - "+(att-att2);
p2.classList.add("myp");
div2.append(p2);


myDiv.style.cssText = `
            width: 700px;
            height: 350px;
 `;
div1.style.cssText = `
            width: 600px;
            height: 300px;
 `;
let newWidth=String(rowForPrize*200+25*rowForPrize)+"px";
div1.style.width=newWidth;

function genElem(numArr,numPrize){                                            //генерация карточек
    let j=0;
    let text=1;          //подпись карточки
    while(j<numArr) {
        for (let i = 0; i < numArr; i++) {
            let p1 = document.createElement("p");
            p1.innerText = text;
            p1.style.cssText = `
            width: 200px;         
            border: 1px solid black;
            display: inline-block;
            margin: 10px;
            background: yellow;
            text-align: center;
            padding: 30px 0px;
        `;
            div1.append(p1);
            text++;
        }
        j++;
    }
    num2=randNumPrize(numPrize);       // формируем счастливые числа
    console.log(num2);




    myDiv.append(div1);
    myDiv.append(div2);

}
function randNumPrize(numP) {                                               //генерация призовых номеров

    let randArr=[];
    for(let i=0;i<numP;i++)
    randArr[i]= Math.random() * 10 ^ 0;

    for(let j3=0;j3<numP;j3++)
    {
        for (let j = j3; j < (numP - 1); j++)                // проверка на одинаковые и нулевые номера
        {
            if (randArr[j3] === randArr[j + 1] || randArr[j]===0 || randArr[j+1]===0)
                return randNumPrize(numP);
        }
    }

    return randArr;
}

div1.addEventListener("click",prize);                // обработчик нажатия на карточку

function prize(event){                                   // открытие карточек

    let num=event.target.innerText;
    let p=document.querySelector("div p:last-child");       //вывод количества попыток

    att2++;
    p2.innerText = "Количество попыток - "+(att-att2);

    if(att2===att)
    {
        div1.removeEventListener("click",prize);     //удаляем обработчик
        console.log("пока");
    }

    for(let i2=0;i2<numberPrize;i2++)
    {

        if (num === String(num2[i2]) ) {                        // если число призовое
            event.target.style.background = "green";
            event.target.innerText = "ПРИЗ!!!";
         //   event.target.setAttribute("disabled", "true");                                     //не работает!!!
            break;
        }
        else {
            event.target.style.background = "red";
            event.target.innerText = "Ничего нет("
        }

    }


}

genElem(rowForPrize,numberPrize);               // формируем карточки

// ЗАДАНИЕ 3 /////////////////////////////////////////////////////////////////////////////////////////////////////////
//

let check1 = document.getElementById("check");
let first = check1.firstElementChild;                       //label
let last = check1.lastElementChild;                         //input "text"

first.addEventListener("click",checked);

function checked()
{

    if( (first.firstElementChild).checked )                 //input "checkbox"
    {
         last.removeAttribute("disabled");
    }
     else
     {
         last.setAttribute("disabled","true");
     }
}







