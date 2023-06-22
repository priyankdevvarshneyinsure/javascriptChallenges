
Question :


/* CHALLENGE 13 - Template Literals

Create carInfo() function that
will return info about each car.

Car is considered cheap if it's price is <= 20000
Car is considered expensive it it's price is > 20000
*/

"use strict";

var cars = [
  { brand: "Honda", price: 13000 },
  { brand: "Rolls-Royce", price: 120000 }
];

// Write carInfo() function here

cars.forEach(car => console.log(carInfo(car)));
/* Price of my new Honda is 13000$
 and it is cheap car. */

/* Price of my new Rolls-Royce
 is 120000$ and it is expensive car. */


 solution:

 
"use strict";

var cars = [
  { brand: "Honda", price: 13000 },
  { brand: "Rolls-Royce", price: 120000 }
];

// Write carInfo() function here


function carInfo(car){
    let message = ` Price of my new  ${car.brand} is  ${car.price}$ and it is`;
    if(`${car.brand}`<=20000){
        message+="cheap car";
    }
    else{
    message+=" expensive car ";
    }
    return message;
}

cars.forEach(car => console.log(carInfo(car)));

/* Price of my new Honda is 13000$
 and it is cheap car. */

/* Price of my new Rolls-Royce
 is 120000$ and it is expensive car. */
