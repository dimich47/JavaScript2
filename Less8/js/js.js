let p= document.getElementById("point"); //для отображения счета
//////////////////////////////////////////////////////
let canvas = document.getElementsByTagName("canvas")[1]; // поле для отрисовки объектов игры

canvas.width = 600;
canvas.height = 400;

let ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(0,0,900, 600);

let canvas2 = document.getElementsByTagName("canvas")[0]; //поле для отрисовки счета

canvas2.width = 600;
canvas2.height = 64;

let ctx2 = canvas2.getContext("2d");
ctx2.fillStyle = "green";
ctx2.fillRect(0,0,900, 600);
//////////////////////////////////////////////////////
let point =0;
let point2 =0;                      //количество очков

p.innerText="Счет: "+point2;        //вывод кол-ва очков

let tiger = {                       //объект 1 для отрисовки - игра
    img: 'tiger.png',
    x: 22,
    y: 15,
    width: 128,
    height: 128
};

let corX=genX();                    //генерация случайных координат
let corY=genY();

let rabbit = {                     //объект 2 для отрисовки - игра
    img: 'rabbit.png',
    x: corX,
    y: corY,
    width: 128,
    height: 128
};
let rabbit2 = {                    //объект для отрисовки - счет
    img: 'rabbit2.png',
    x: 0,
    y: 0,
    width: 64,
    height: 64
};

function genX()                     //генерация случайных координат - ось Х
{
    let x= Math.random()*1000^0;
    if(x<=canvas.width -128) {      //если вышли за границы поля прорисовки
        return x;
    }
    else{
        return genX();
    }
}
function genY()                    //генерация случайных координат - ось Y
{
    let y= Math.random()*1000^0;
    if(y<=canvas.height -128)
    {
        return y;
    }
    else{
        return genY();
    }
}

function drawImg(obj,ctx1,...x1) {      //отрисовка объектов
    let img = new Image();
    img.src = 'img/' + obj.img;
    img.onload = () => {
        if(ctx1===1)                    //отрисовка объекта игры
        {
            ctx.drawImage(img,obj.x + x1, obj.y, obj.width, obj.height  );
        }
        if(ctx1===2)                    //отрисовка объекта счета
        {
            ctx2.drawImage(img,obj.x + x1, obj.y, obj.width, obj.height );
        }
    }
}


function move(obj, event) {             //перемещение объекта по полю
    // w - перемещение вверх
    // a - перемещение влево
    // d - перемещение вправо
    // s - перемещение вниз
    console.log(event.code);
    if (event.code === "KeyD") {
        console.log("перемещение вправо");
        clearImg(obj);
        obj.x += 2;
        drawImg(obj, 1);
    } else if (event.code === "KeyA") {
        console.log("перемещение влево");
        clearImg(obj);
        obj.x -= 2;
        drawImg(obj, 1);
    } else if (event.code === "KeyW") {
        console.log("перемещение вверх");
        clearImg(obj);
        obj.y -= 2;
        drawImg(obj, 1);
    } else if (event.code === "KeyS") {
        console.log("перемещение вниз");
        clearImg(obj);
        obj.y += 2;
        drawImg(obj, 1);
    }


    if ((obj.x <= (rabbit.x + 100) && obj.x >= (rabbit.x - 100)) && (obj.y <= (rabbit.y + 128) && obj.y >= (rabbit.y - 128))) {
        clearImg(rabbit);
        rabbit.x = genX();
        rabbit.y = genY();
        drawImg(rabbit, 1);
        drawPoint();
    }
}


function clearImg(obj) {                                // очистка изображения объекта
    ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
}

function drawPoint(){                                   //отображение счета и прорисовка объекта счета
    let x=0;
    point++;
    console.log("point= "+point);
    if(point!==10) {                                    //отображение объектов счета до 10
        point2++;
        p.innerText="Счет: "+point2;
        for (let i = 0; i < point; i++) {
            drawImg(rabbit2, 2, x);
            x += 64;
        }
    }
    else{
        point2++;
        ctx2.fillRect(0,0,900, 600);    //очистка поля отображения счета (>10 очков)
        p.innerText="Счет: "+point2;
        drawImg(rabbit2, 2, x);
        point=1;

    }

}

drawImg(tiger,1);
drawImg(rabbit,1);

document.addEventListener("keydown",    move.bind(document, tiger)); // обработчик нажатия кнопок перемещения






