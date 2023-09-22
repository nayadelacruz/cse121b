/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Nayade De la cruz';
let currentYear = 2023;
let profilePicture = "/week2/w02-task/images/naya.jpg";

/* Step 3 - Element Variables */
let nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ["Pozole", "Enchiladas", "Tacos", "Huaraches"]
foodElement.innerText = `${favoriteFoods}`;
let oneOtherFood = 'Carnitas';
favoriteFoods.push(oneOtherFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;









