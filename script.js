let title = 'Project Name'; 
let screens = 'Простые, Сложные, Интерактивные'; 
let screenPrice = 10; 
let rollback = 50; 
let fullPrice = 300000; 
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);

let newScreens = screens.toLocaleLowerCase();
console.log(newScreens.split());

console.log(fullPrice * (rollback/100));