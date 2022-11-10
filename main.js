"use strict"

// Creates the initial coffee table by taking in the Coffee Array's objects and organizing them
function renderCoffee(coffee) {

    let coffeeCards = '<div class="card" style="width: 18rem;">';
    coffeeCards += '<div class="card-body">'
    coffeeCards += '<h5 class="card-title"> '+ coffee.name +' </h5>'
    coffeeCards += '<p class="card-text">placeholder info.</p>'
    coffeeCards += '</div>'
    coffeeCards += '</div>'

    return coffeeCards;
}

// Takes in the filtered Array of objects and adds to the established Coffee Table
function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        // if ()
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//-----Function takes in the input from Roast Selection and updates the Coffee Table's Content-----//
function updateCoffees(e) {
    //------------don't submit the form, we just want to update the data-------------------------//
    // e.preventDefault();

    //-------------Establishes the criteria to filter the Coffee Table--------------------------//
    let selectedRoast = roastSelection.value;
    let input = document.getElementById('search-Coffee').value;
    input = input.toLowerCase();
    let filteredCoffees = [];

    //-----------Takes in the Array's criteria and adds it to a new array--------------------------//
    coffees.forEach(function(coffee) {
        if ((coffee.roast === selectedRoast) && (coffee.name.toLowerCase().includes(input))){
            filteredCoffees.push(coffee);
        }
    });

    tbody.innerHTML = renderCoffees(filteredCoffees);
}


function searchCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data


    let selectedRoast = roastSelection.value;


    let filteredCoffees = [];


    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
// ------------------- Add to Coffee Object-----------------------------//


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 101, name: 'Light City', roast: 'light'},
    {id: 102, name: 'Half City', roast: 'light'},
    {id: 103, name: 'Cinnamon', roast: 'light'},
    {id: 201, name: 'City', roast: 'medium'},
    {id: 202, name: 'American', roast: 'medium'},
    {id: 203, name: 'Breakfast', roast: 'medium'},
    {id: 301, name: 'High', roast: 'dark'},
    {id: 302, name: 'Continental', roast: 'dark'},
    {id: 303, name: 'New Orleans', roast: 'dark'},
    {id: 304, name: 'European', roast: 'dark'},
    {id: 305, name: 'Espresso', roast: 'dark'},
    {id: 306, name: 'Viennese', roast: 'dark'},
    {id: 307, name: 'Italian', roast: 'dark'},
    {id: 308, name: 'French', roast: 'dark'},
];

let newCoffeeInput = document.getElementById('new-coffee-name').value;
let newCoffeeRoast = document.querySelector('#new-roast-selection').value;

function createCoffee(){
    let newCoffeeObj = {};
    newCoffeeObj.id = 104;
    newCoffeeObj.name = newCoffeeInput;
    newCoffeeObj.roast = newCoffeeRoast;


    console.log(newCoffeeObj);
    coffees.push(newCoffeeObj);
    console.log(coffees);
}
console.log(newCoffeeInput);
console.log(newCoffeeRoast);
createCoffee();
//------------- Creates Variable that holds Coffee Cards in html format for later display ---------//
let tbody = document.querySelector('#coffees');

//-------- Creates Variable that holds user selection for Roast Type (Dark, Medium, Light) -------//
let roastSelection = document.querySelector('#roast-selection');


//--------------- Adds filtered Coffee Cards to the HTML document for display --------------------//
tbody.innerHTML = renderCoffees(coffees);

//------------ Function filters coffee based on user input and feeds to coffee cards -----------//

//---------------- Created variable for coffee searchbar input ---------------------------------//
let coffeeInput = document.getElementById('search-Coffee');


//------------------ Filters and Updates Coffee Cards based on Roast Selection ----------------//
roastSelection.addEventListener('change', updateCoffees);
//------------------ Filters coffee card list based on coffee search bar-----------------------//
coffeeInput.addEventListener("change", updateCoffees);
/*-----------------------------------------------------------------------------------------------

Skeleton:

User Search
        - Get attribute from form ###############################################
        - Take attribute and search again known coffees ############################

create user input form that creates new coffee cards
        - Create 3 variables to count dark, medium, and light roasts
        - Set each variable equal to a function that runs through the 'Coffees' array and counts the number of
          instances each category appears
        - Make newly inputted coffee's IDs = to variable counter + 1



Design the site, make it perty
    - Change Similar Variables so its less confusing
    - Organize Global Variables
    - Make search bar update on typing or have a better button system

 */