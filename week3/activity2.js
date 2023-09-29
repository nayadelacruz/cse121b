alert('negron');
let numbers = ['one', 'two', 'three'];
let htmlList = numbers.map(number => `<li>${number}</li>`)
document.getElementById('myList').innerHTML = htmlList;

let grades = ['A', 'B', 'A'];
function gpaScore(grade){
    let points = 0;
    if (grade === 'A'){
        points = 4;
  } else if (grade === 'B'){
    points = 3;
  } 
  return points;
}
let gpaPoints = grades.map(gpaScore);
let total = gpaPoints.reduce(function(total, item){
    return total + item;
});
let gpa = total / gpaPoints.length;

let fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
let longFruits = fruits.filter(fruit => fruit.length > 6); 

let manyNumber = [12, 34, 21, 54];
let luckNumber = 21;
let arrIndex = manyNumber.indexOf(luckNumber);



