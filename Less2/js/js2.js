//Дан массив целых чисел. Числа не отсортированы и могут повторяться. Необходимо найти в данном массиве такие два числа M и N,
// чтобы их сумма была равна 7. Например, 3 + 4 = 7 или 0 + 7 = 7 или -2 + 9 = 7 и тд.Для решения достаточно найти хотя бы одну
// подходящую пару чисел M и N
let array1 = [7, 12, 3, 67, 4, 0, 3];
let N;
let M;
let j;
for(let i=0;i<array1.length-1;i++)
{
    N=array1[i];
    j=0;
    while (j<array1.length-1-i)
    {
        M = array1[j + 1+i];

        if (N + M == 7) {
            console.log("Числа найдены: " + N + " и " + M);
        }
        j++;
    }
}

//Вывести через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить
// ‘Three’, а для чисел, делящихся на 5 (но не на 3) – ‘Five’. Измените код так, чтобы она выводила «ThreeFive» для всех чисел,
// которые делятся и на 3 и на 5
console.log("");
for(let i=1;i<=100;i++)
{
    if(i%3==0 && i%5==0)
        console.log("ThreeFive");
    else if(i%3==0)
        console.log("Tree");
    else if(i%5==0)
        console.log("Five");
    else{
        console.log(i);
    }
}
//Задать количество тарелок и количество моющего средства. Моющее средство расходуется из расчета 0,5 на одну тарелку.
// В цикле выводить сколько моющего средства осталось после мытья каждой тарелки В конце вывести, сколько тарелок
// осталось, когда моющее средство закончилось или наоборот.

console.log("");
let plate = 6;
let fairy = 3.5;
let i=0;
console.log("Количество тарелок: "+plate);
console.log("Количество моющего средства: "+fairy);
while(fairy!=0){
    i++;
    plate--;
    fairy-=0.5;
    console.log("Моющего средства осталось после мытья " + (i) +" тарелки(лок) - "+" "+ fairy+" л");
    if(plate==0)
        break;
}
console.log("Моющего средства осталось " + fairy)
console.log("Тарелок осталось "+ plate)
//
console.log("");

//Создайте 2 массива равной длины, выведите массивы на экран.
// Посчитайте среднее арифметическое элементов каждого массива и сообщите, для какого из массивов это значение
// оказалось больше (либо сообщите, что их средние арифметические равны).
let array2 = [1.0,2.0,3.0,4.0,5.0];
let array3 = [2.0,3.0,3.0,4.0,5.0];

console.log("Массив1");
for(let i=0;i<array2.length;i++)
    console.log(array2[i]);
console.log("Массив2");
for(let i=0;i<array3.length;i++)
    console.log(array3[i]);

let a_mean1 = 0;
let a_mean2 = 0;
for(let i=0;i<array2.length;i++)
    a_mean1+=array2[i];
a_mean1/=array2.length;
for(let i=0;i<array3.length;i++)
    a_mean2+=array3[i];
a_mean2/=array3.length;
console.log("Cреднее арифметическое первого массива: "+a_mean1);
console.log("Cреднее арифметическое второго массива: "+a_mean2);
if(a_mean1>a_mean2)
    console.log("Cреднее арифметическое значение элементов первого массива больше");
else if(a_mean1<a_mean2)
    console.log("Cреднее арифметическое значение элементов второго массива больше");
else{
    console.log("Cредние арифметические значения массивов равны");
}
//Пользователь вводит число, создать массив заданного размера, вывести элементы массива в обратном порядке
console.log("");
let str = "1 2 3 4 5 6 7 8 9 10";
let array4 = str.split(" ",prompt("Введите целое число от 1 до 10"));
array4.reverse();
console.log(array4);
// Напишите цикл, который выводит в консоль треугольник из символов #, высотой 10 символов
console.log("");
let j2=1;
for(let i=0;i<10;i++)
{
    for(let i2=0;i2<j2;i2++)
    {
        console.log("#");
    }
    console.log("");
    j2++;

}
