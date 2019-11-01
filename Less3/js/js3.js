//Дано натуральное число N. Вычислите сумму его цифр, используя рекурсию (строки, массивы и циклы использовать запрещено)
function summ(num){
    if(num<10)
    {
        return num;
    }
    else{
        return num%10 + summ(num/10 ^ 0);
    }
}
let a=0;
a=summ(26);
console.log("Cумма чисел = " + a);

//Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона, третий аргумент -
// необязательный (если он не задан, шаг равен единице) – шаг для построения массива. Функция возвращает массив,
// который содержит все числа из него, включая начальное и конечное. Например, вызов функции range(1, 10, 2)
// должен будет вернуть [1, 3, 5, 7, 9].
function range(start,end, other=1)
{
    let arr = [];
    let j=start;
    for(let i=0;j<=end;i++)
    {
        arr[i]= j;
        j+=other;
    }
    return arr;
}
console.log("");
console.log("Массив от  4 до 13 с шагом 2 - "+ range(4,13,2));
console.log("Массив от  2 до 11 с шагом 1 - "+ range(2,11));

//Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count, будет возвращать
// слово «день» в нужной форме («12 дней», но «22 дня» и тд).
/*
1 день
2 - 4 дня
5 - 20 дней
*/
console.log("");

function day (num) {

    if(num<1000) {
        if (num < 10)
        {
            if (num === 1)
                return " день";
            else if (num >= 2 && num <= 4)
                return " дня";
            else {
                return " дней";
            }
        }
        else {
                if(num<=20)
                    return " дней";
                else{
                    if(num>100) {
                        num = num % 100;
                        return day(num);
                    }
                    else {
                        return day(num % 10);
                    }
                }

        }
    }
    else{
        return " число больше 1000";
    }

}
console.log(21+day(1));
console.log(8+day(8));
console.log(12+day(12));
console.log(64+day(64));
console.log(36+day(36));
console.log(412+day(412));
console.log(564+day(564));
console.log(121+day(121));
console.log(120+day(120));

//Сгенерировать 5 массивов из случайных чисел (самостоятельно посмотреть про рандом). Вывести массивы и сумму их
// элементов на экран. Найти массив с максимальной суммой элементов. Вывести его на экран еще раз. Генерация массива
// и подсчет суммы - разные функции

let arr1=[], arr2=[],arr3=[],arr4=[],arr5=[],sum=[];
function random(num) {
    let arr=[];
    for(let i=0;i<num;i++)
        arr[i]=Math.random(num)*100 ^ 0;

    return arr;
}
function sumArr(mass){
    let summ=0
    for (let i=0;i<mass.length;i++)
    {
        summ+=mass[i];
    }
    return summ;
}
function sumArr2(mass){
    let j=0;
    let maxindex=0;
    for (let i=0;i<mass.length-1;i++)
    {
        if(mass[i-j]>mass[i+1])
        {
            maxindex=i-j;
            j++;
        }
        else{
            maxindex=i+1;
        }

    }
    return maxindex;
}

console.log("массив 1: "+ (arr1=random(5)) + " Cумма его элементов= "+ (sum[0]=sumArr(arr1)) );
console.log("массив 2: "+ (arr2=random(6))+ " Cумма его элементов= "+ (sum[1]=sumArr(arr2)) );
console.log("массив 3: "+ (arr3=random(7))+ " Cумма его элементов= "+ (sum[2]=sumArr(arr3)) );
console.log("массив 4: "+ (arr4=random(3))+ " Cумма его элементов= "+ (sum[3]=sumArr(arr4)) );
console.log("массив 5: "+ (arr5=random(7))+ " Cумма его элементов= "+ (sum[4]=sumArr(arr5)) );

console.log(sumArr2(sum));
