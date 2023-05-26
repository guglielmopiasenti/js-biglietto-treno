console.log('JS OK')

// Creating train ticket calculator

// Targeting DOM element

const p = document.getElementById("target");
console.log(target);

// Asking km 

const travelKm = prompt ('Enter how many km to travel', '20');
console.log(travelKm);

// Declaration of the cost per km variable

const costPerKm = 0.21;
const totalKmCost = costPerKm * travelKm;
console.log(totalKmCost);

// Asking user's age

const age = prompt ('Enter your age', '25');
console.log(age);


// Inserting age variable for discount calculation

let discount = '';

if (age <= 18) {
    discount = 0.2;
} else if (age >= 65) {
    discount = 0.4;
}
console.log("ticket discount: " + (discount * 100) + "%");


// calculating ticket price

const ticketPrice = totalKmCost * travelKm;