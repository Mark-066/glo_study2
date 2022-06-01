
'use strict';

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 10;

//переменные функций
let allServicePrices;
let fullPrice;  

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

function getAllServicePrices() {                             //fuction expression
    allServicePrices =  servicePrice1 + servicePrice2;
}

const getFullPrice = function() {                          //function declaration
    fullPrice = screenPrice + allServicePrices;
}

const getTitle = function(title) {
    return title[0].toUpperCase() + title.slice(1);
}

const getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (rollback/100));
}

const getRollbackMessage = function(price) {
    if (price >= 30000) {
        return "Даем скидку в 10%";
    }else if (price >= 15000 && fullPrice < 30000) {
        return "Даем скидку в 5%";
    }else if (price >= 0 && fullPrice < 15000) {
        return "Скидка не предусмотрена";
    }else {
        return "Что-то пошло не так";
    }
};


showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

getAllServicePrices();
getFullPrice();
getTitle(title);
getServicePercentPrices();
getRollbackMessage();

//логи функций
console.log(screens);
console.log("Стоимость вёрстки экранов " + screenPrice + " рублей/ долларов/ гривен/ юаней");

