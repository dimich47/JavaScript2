let someDate = moment('2019-01-05');
let currentDate = moment(); // текущая дата
let someDateTime = moment('2019-03-05 16:40');
//console.log(someDate.format("YYYY MMMM dddd"));
//console.log(currentDate.format("YY MM dd"));
//console.log(someDateTime.format("YYYY MMM d"));

someDate.add(1, 'day'); // увеличение на 1 день
someDate.add(2, 'hours'); // увеличение на 2 часа
someDate.add(3, 'year'); // увеличение на 3 года

//console.log(someDate.format("LLL"));
//console.log(someDate.format("LL"));

// parse from string
let strDate = "01/12/2019";
let parseDate = moment(strDate, "DD/MM/YYYY", true);

// временные зоны
let moscow = currentDate.tz("Europe/Moscow");
let london = moscow.clone().tz("America/New_York");
console.log("Московское время : " + moscow.format("YYYY MMMM DD HH:mm"));
console.log("Время по Нью-Йорку : " + london.format("YYYY MMMM DD HH:mm"));


// самолет москва - нью-йорк
// время в полете 10 часов
// когда (дата и время) самолет
// прилетит в нью-йорк (по местному времени),
// если из Москвы он вылетает
// в 22:15 28 декабря 2019 года

let moscow2 = currentDate.tz("Europe/Moscow");
let usa = moscow2.clone().tz("America/New_York");

let someDateTime2 = moment('2019-12-28 22:15');
console.log("Время вылета из Москвы: "+someDateTime2.format("HH:mm - DD MMMM YYYY"));
console.log(`Разница по времени: ${(moscow2.format("HH") - usa.format("HH"))} часов`);
someDateTime2.add(10-(moscow2.format("HH") - usa.format("HH")), 'hours'); //Время прилета в Нью-Йорк

console.log("Время прилета в Нью-Йорк: "+someDateTime2.format("HH:mm - DD MMMM YYYY"));