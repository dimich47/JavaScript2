// для домашнего задания номер 1 и 2
let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};


// для домашнего задания номер 3
let books = [
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'}
];


//Написать функцию со следующими аргументами: объект, from (значение от), to (значение до). Функция должна вернуть объект
// с товарами, цены которых лежат в диапазоне от значения from до значения to.
// Пример вызова функции getGoods(goods, 2000, 3000); в данном случае функция должна вернуть все товары,
// у которых цена в диапазоне от 2000 до 3000. Для проверки функции используйте объект! goods из файла forHw.js.
function myGoods (object, from, to){
    let arr = [];
    for (let key in object) // определение(перебор) имен объектов в объекте object
    {
        if( (object[key].price >= from) && (object[key].price < to) ) // просмотр в объектах свойства price
        {
            arr.push(object[key]);
        }
    }

    return arr;
}
console.log("Объект(ы) с товарами от 1000 до 3200: ");
console.log(myGoods(goods, 1000, 3200));
console.log("");

//Написать функцию addToCart(obj, title, countToCart) {} , где obj - объект, title - название товара, count - количество товара,
// которое нужно добавить в корзину. Функция ищет товар с указанным названием, если количество позволяет, то уменьшает
// количество товара на countToCart, если не позволяет, то выводит информацию об этом в консоль и завершает работу.
// Для проверки функции используйте объект! goods из файла forHw.js.
function addToCart(obj, title, countToCart)
{
    console.log("Покупка "+ countToCart+ " "+title);
    for(let key in obj)
    {
        if(obj[key].title===title)
        {
            if(obj[key].count>=countToCart)
            {
                obj[key].count-= countToCart;
                console.log("Куплено: " + countToCart);
                console.log("Осталось: " + obj[key].count);
            }
            else{
                console.log("Купить "+ countToCart+" шт. невозможно. Товара не достаточно!")
            }
        }

    }
}

addToCart(goods,"Барабаны", 10);
addToCart(goods,"Барабаны", 10);
addToCart(goods,"Барабаны", 1);
addToCart(goods,"Арфа", 1);
addToCart(goods,"Арфа", 4);
addToCart(goods,"Арфа", 1);
console.log("");

//Напишите функцию, которая отсортирует массив объектов books по значению свойства title. Массив в файле forHw.js.
// Функцию сортировки разберите самостоятельно (не получится, разбер на занятии).

// функция динамической сортировки
function compareValues(key) {
    return function(a, b) {
        if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // свойства нет ни в одном из объектов
            return 0;
        }
        const varA = (typeof a[key] === 'string') ?         //для преобразования регистра
            a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ?
            b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return comparison;
    };
}

let books2=books.slice(); //создаем второй массив чтобы не затереть исходный
console.log("Не сортированный массив: ");
console.log(books);
books2.sort(compareValues('title'));
console.log("Cортированный массив: ");
console.log(books2);