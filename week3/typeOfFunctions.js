let firstName = 'Antonia';
let lastName = 'Francesca';
//funtion"""
function fullName(first, last){
    return `${first} ${last}`;
}
//create an anonimos function"""
const fullName = function (first, last){
    return `${first} ${last}`;
}

//creates an arrow function"""
const fullName = (firstName, lastName) => `${first} ${last}`;

//create an expression that calls the funtion and assigned the value to an html element with ID"""
document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);

//Using the array.filter() method, create an array named namesB with only those names from the name array that start with the character 'B'."""
let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

let namesB = names.filter((name) => name.charAt(0)==='B');

//Using the array.map() method, create a new array named namesLength that contains the length of each name in the names array. Expected output is [6, 8, 5, 9, 3]."""

let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];
let namesLength = names.map((name) => name.length);

//Using the names.reduce() method, create an expression that returns the average string length of the names in the names array. Expected output is 6.2."""

names.reduce((total,name) => total + name.length, 0) / names.length;

