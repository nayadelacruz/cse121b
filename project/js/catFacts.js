// fetch dogfacts
export async function fetchCatFacts(){
    let url = "https://meowfacts.herokuapp.com/";
    let response = await fetch(url ,{
        mode: 'cors'
    });
    return await response.json();
}

//Display dog fatcs
export async function displayCatFacts(element){
    let objcatFact = await fetchCatFacts();
    let catFact = objcatFact.data[0];
    element.innerHTML = catFact;
}

