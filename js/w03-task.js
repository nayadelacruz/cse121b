/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.getElementById('sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function(number1, number2){
    return number1 - number2;
}
let subtractNumbers = function (){
    let subtract1 = Number(document.getElementById('subtract1').value);
    let subtract2 = Number(document.getElementById('subtract2').value);
    document.getElementById('difference').value = subtract(subtract1, subtract2);

}
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;
let multiplyNumbers = () => {
    let factor1 = Number(document.getElementById('factor1').value);
    let factor2 = Number(document.getElementById('factor2').value);
    document.getElementById('product').value = multiply(factor1, factor2);}
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers (){
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.getElementById('quotient').value = divide(dividend, divisor);
}
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */
let date = new Date();
let year = date.getFullYear();
document.getElementById('year').innerHTML = year;

/* ARRAY METHODS - Functional Programming */
let arrNumbers = [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */
document.getElementById('array').innerHTML = arrNumbers;
/* Output Odds Only Array */
let oddNumbers = arrNumbers.filter(numbers =>
    numbers % 2 == 1);
document.getElementById('odds').innerHTML = oddNumbers;   
/* Output Evens Only Array */
let evenNumbers = arrNumbers.filter(numbers =>
    numbers % 2 == 0); 
document.getElementById('evens').innerHTML = evenNumbers;   
/* Output Sum of Org. Array */
let sumArrey = arrNumbers.reduce((total, number) => total + number, 0);
document.getElementById('sumOfArray').innerHTML = sumArrey;
/* Output Multiplied by 2 Array */
document.getElementById('multiplied').innerHTML = arrNumbers.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.getElementById('sumOfMultiplied').innerHTML = (arrNumbers.map(number => number * 2)).reduce((total, number) => total + number, 0);