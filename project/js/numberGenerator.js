//import modules
import { calculateSum, displaySum, evaluateAnswer } from "./calculation.js";
//choose the easy sum
function sumTypeEventHandler(){
    document.getElementById("easyAddition").addEventListener("click", setupEasyOperation);
    document.getElementById("difficultAdd").addEventListener("click", setupDifficultOperation);

}

//start the game
function setupEasyOperation() {
    let numbers = generateEasyRandomNumbers();
    let sumValue = calculateSum(numbers);
    document.getElementById('catfact').innerHTML = "";
    document.getElementById('message').innerHTML = "";
    displaySum(numbers);
    document.getElementById('submit').addEventListener("click", function(){evaluateAnswer(sumValue);})
}

//start the game
function setupDifficultOperation() {
    let numbers = generateDifficultRandomNumbers();
    let sumValue = calculateSum(numbers);
    document.getElementById('catfact').innerHTML = "";
    document.getElementById('message').innerHTML = "";
    displaySum(numbers);
    document.getElementById('submit').addEventListener("click", function(){evaluateAnswer(sumValue);})
}

//Program generates 2 randon numbers between 0-10
function generateEasyRandomNumbers() {
    let numbers = [];
    let number1 = Math.round(Math.random() * 10);
    let number2 = Math.round(Math.random() * 10);
    numbers.push(number1, number2);
    return numbers;
}

//Program generates 2 random numbers between 0-100
function generateDifficultRandomNumbers() {
    let numbers = [];
    let number1 = Math.round(Math.random() * 100);
    let number2 = Math.round(Math.random() * 100);
    numbers.push(number1, number2);
    return numbers;
}


sumTypeEventHandler();

