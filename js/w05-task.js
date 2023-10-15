/* W05: Programming Tasks */
/* Declare and initialize global variables */
const templeElement = document.getElementById('temples');
let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    console.log(temples);
    temples.forEach(temple => {
        let elementArticle = document.createElement('article');

        let elementH3 = document.createElement('h3')
        elementH3.textContent = temple.templeName;

        let elementImg = document.createElement('img');elementImg.src=temple.imageUrl;
        elementImg.alt = temple.location;
        elementArticle.appendChild(elementH3);
        elementArticle.appendChild(elementImg);
        templeElement.appendChild(elementArticle);    
    });    

}

/* async getTemples Function using fetch()*/
const getTemples = async() => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json()
    console.log(templeList);
}

/* reset Function */
function reset () {
    templeElement.innerHTML = "";

}

/* sortBy Function */
function sortBy(){
    reset();
    let filter = document.getElementById('sortBy').value;
    console.log(filter);
    switch (filter){
        case "utah":
            displayTemples(templeList.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(templeList.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(templeList.filter(temple =>  new Date(temple.dedicated) <  new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(templeList);       
    }
}

getTemples();

/* Event Listener */
document.getElementById('sortBy').addEventListener("change", sortBy);