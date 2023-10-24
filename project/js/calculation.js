import { fetchCatFacts, displayCatFacts } from "./catFacts.js";

//Program will store the result of adding both random numbers 
export function calculateSum(numbers) {
    let number1 = numbers[0];
    let number2 = numbers[1];
    return number1 + number2;
}

//The addition operation will be displayed for the user to solved 
export function displaySum(numbers) {
    let number1 = numbers[0];
    let number2 = numbers[1];
    let sum= `${number1} + ${number2} = `;
    document.getElementById("additionDisplay").innerHTML=sum;
}

//The user will enter the answer (write and press enter )
export function evaluateAnswer(sumResult) {
 // If the input is equal to the result of the addition a congratulation message will be displayed with a random dog fact 
    // If the input is different to the result will display a fail message
    let userInput = document.getElementById('userInput').value;
    let elementCatFact = document.getElementById('catfact');
    if (userInput == sumResult){
        let message = `Good job! Now, lets treat you with a cat fact`;    
        document.getElementById('message').innerHTML=message;
        fetchCatFacts();
        displayCatFacts(elementCatFact);
    }
    else{
        let message = `Opps, the result is ${sumResult}`;
        document.getElementById('message').innerHTML=message;
        elementCatFact.innerHTML = "";
    }
}

