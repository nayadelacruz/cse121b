/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : "Nayade De la cruz",
    photo : "./images/naya.jpg",
    favoriteFoods : [
        'Pozole', 
        'Pizza',
        'Yellow Curry',
        'Tacos'
    ],
    hobbies : ['Reading Books', 'Baking Cookies', 'Singing'],
    placesLived : [],

};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push( {
    place : 'Rexburg',
    length : '3 years',
}
);
myProfile.placesLived.push( {
    place : 'Salt Lake City',
    length : '1.5 years',
}
);
myProfile.placesLived.push( {
    place : 'Seattle, WA',
    length : '1 year',
}
);



/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').textContent = myProfile.name
/* Photo with attributes */
imageSrc = document.getElementById('photo');
imageSrc.src = myProfile.photo;
imageAlt = document.getElementById('photo');
imageAlt.alt = myProfile.name;

/* Favorite Foods List*/
let favFoods = myProfile.favoriteFoods.forEach((food) => {
    let newLi = document.createElement('li');
    newLi.textContent = food;
    document.getElementById('favorite-foods').appendChild(newLi);
});

/* Hobbies List */
let myHobbies = myProfile.hobbies.forEach((hobbie) => {
    let newLi = document.createElement('li');
    newLi.textContent = hobbie;
    document.getElementById("hobbies").appendChild(newLi);
});

/* Places Lived DataList */

let pLived = myProfile.placesLived.forEach(placeLived =>{
    let placeElement = document.createElement('dt');
    
    placeElement.textContent = placeLived.place;
    
    let lengthElement = document.createElement('dd');
    
    lengthElement.textContent = placeLived.length;
    
    document.getElementById('places-lived').appendChild(placeElement);
   
    document.getElementById('places-lived').appendChild(lengthElement);
}
    );
