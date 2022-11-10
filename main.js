"use strict"

// Creates the initial coffee table by taking in the Coffee Array's objects and organizing them
function renderCoffee(coffee) {
    // let html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    // html += '<td>' + coffee.name + '</td>';
    // html += '<td>' + coffee.roast + '</td>';
    // html += '</tr>';
    //
    // return html;

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
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// Takes in the input from Roast Selection and updates the Coffee Table's Content
function updateCoffees(e) {

    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;//Establishes the criteria to filter the Coffee Table

    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee); //takes in the Array's criteria and adds it to a new array
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// Function to take in users coffee name and check against known coffees
function searchCoffees(e) {

    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;//Establishes the criteria to filter the Coffee Table

    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee); //takes in the Array's criteria and adds it to a new array
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}





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

let tbody = document.querySelector('#coffees'); //Holds the Coffee Table contents in HTML
let roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

// let userCoffeeSearch = document.getElementById('userInput').value;
// console.log(userCoffeeSearch)


function searchCoffee() {
    let input = document.getElementById('search-Coffee').value;
    input = input.toLowerCase();
    let coffeeType =[];
    coffees.forEach(function(coffee) {
        coffeeType.push(coffee.name);
    })


    for (let i = 0; i < coffeeType.length; i++) {
        if (coffeeType[i].toLowerCase().includes(input)) {
            console.log(coffeeType[i]);
            // return coffeeType[i];
        }
        // console.log(coffeeType)
        // else {
        //     coffeeType[i].style.display="list-item";
        // }
    }
}


//created variable for coffee searchbar input
let coffeeInput = document.getElementById('search-Coffee');
console.log(coffeeInput)
coffeeInput.addEventListener("change", searchCoffee);






roastSelection.addEventListener('change', updateCoffees);

/*

Skeleton:

User Search
        - Get attribute from form
        - Take attribute and search again known coffees

create user input form that creates new coffee cards
        - Create 3 variables to count dark, medium, and light roasts
        - Set each variable equal to a function that runs through the 'Coffees' array and counts the number of
          instances each category appears
        - Make newly inputted coffee's IDs = to variable counter + 1



Design the site, make it perty

 */