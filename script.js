
'use strict';

let title;
let screens;
let screenPrice;
let adaptive;

//переменные функций
let rollback = 10;
let allServicePrices;
let fullPrice;  
let servicePercentPrice;
let service1;
let service2 ;

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function() {
    title = prompt("Как называется ваш проект?", "Калькулятор вёрстки");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, сложные");

    screenPrice = prompt("Сколько будет стоить данная работа?");

    do {
        screenPrice = prompt("Сколько будет стоить данная работа?"); //пытался сделать цикл. не вышло. даже с числом выводиТ вопрос 2 раза подрят 
    } while (!isNumber(screenPrice));

    adaptive = confirm("Нужен ли адаптив на сайте?"); 
};

const getAllServicePrices = function() {                             //fuction expression
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?");
        }else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?");
        } 

        do {
            sum += prompt("Сколько это будет стоить?");
        } while (!isNumber(sum));
        //проверка, что введённые данные являются числом
    
    }
    return sum;
    //return  servicePrice1 + servicePrice2;
};

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

const getFullPrice = function() {                          //function declaration
    return screenPrice + allServicePrices;
};

const getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (rollback/100));
};

const getTitle = function() {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
};

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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

//логи
console.log("allServicePrices", allServicePrices)

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log("Стоимость вёрстки экранов " + screenPrice + " рублей/ долларов/ гривен/ юаней");
