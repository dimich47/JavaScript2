// Допустим, пользователь вводит названия городов через пробел. Вы их присваиваете переменной.
// Переставьте названия так, чтобы они были упорядочены по алфавиту.
let str1;
str1=prompt("Введите названия городов через пробел");
console.log(str1);
str1=str1.toUpperCase();                //делаем одинаковый регистр
let arr=str1.split(" ");        // разбиваем на массив
console.log(arr.sort());                //выполняем сортировку

//Найти все вхождения подстроки в строку. Строку и подстроку вводит пользователь.
let str=prompt("Введите строку");
str=str.toLowerCase();
let substr=prompt("Введите подстроку");
substr=substr.toLowerCase();
let pos = str.indexOf(substr);
let cnt=0;
while (pos !== -1) {
    cnt++;
    pos = str.indexOf(substr, pos+1);
}
console.log(`Количество подстрок - ${substr} = ${cnt}`);
//Написать функцию, которая проверяет, является ли строка палиндромом (использовать стандартные методы)!
// Палиндром — это слово или фраза, которые одинаково читаются по буквам или по словам как слева направо, так и
// справа налево.
function pali(str){
    let arr = str.toLowerCase().split(" ").join("");
    let arr2= arr.split("").reverse().join("");


    console.log(arr);
    console.log(arr2);

    if(arr==arr2)
    return console.log("В строке есть палиндромы!");
    else{
        return console.log("В строке нет палиндромов!");
    }

}
pali(prompt("Введите строку с палидромами"));