
let servicePrice2 = +prompt("Сколько это будет стоить?");
console.log(servicePrice2);

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

let rollback = 50;
const servicePercentPrice = fullPrice - (rollback/100);
console.log(Math.ceil(servicePercentPrice));

if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
}else if (15000 < fullPrice && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
}else if (0 < fullPrice && fullPrice <= 15000) {
    console.log("Скидка не предусмотрена");
}else {
    console.log("Что-то пошло не так");
}


/*
не понимаю, почему при вводе любого числа в интервале 0-31к, выдаёт 'что-то пошло не так'. Я понимаю, что в каком-то тупом 
месте не замечаю ошибку, но не понимаю, где

let fullPrice = 31000;
switch (fullPrice) {
    case fullPrice > 30000:
        console.log("Даем скидку в 10%");  
        break
    case 15000 <= fullPrice && fullPrice <= 30000:
        console.log("Даем скидку в 5%"); 
        break
    case 0 < fullPrice && fullPrice <= 15000:
        console.log("Скидка не предусмотрена");
        break
    default:
        console.log("Что-то пошло не так");
}
*/ 