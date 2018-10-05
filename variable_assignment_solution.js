
//#  Variable Exercises

// 1. Age Calculator:
// * Store your birth year in a variable.
// * Store a future year in a variable.
// * Calculate your 2 possible ages for that year based on the stored values.
// * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
console.log("### Prob 1: Age Calculator ###")

let birthYear = 1987;
let futureYear = 2020;
let ageMin = futureYear - birthYear - 1;
let ageMax = futureYear - birthYear;
console.log("I will be either " + ageMin + " or " + ageMax + " in " + futureYear);


// 2. Snack Supply Calculator:
// * Store your current age in a variable.
// * Store a maximum age in a variable.
// * Store an estimated snack amount per day (as a number).
// * Calculate how many snacks you would eat total, from your current age until the maximum age.
// * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
console.log("### Prob 2: Snack Supply Calculator ###")

let currentAge = 31;
let maxAge = 90;
let dailySnacks = 2;
let maxSnackNum = (maxAge - currentAge) * 365 * 2;
console.log("I will need " + maxSnackNum + " to last me until the age of " + maxAge);


// 3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
// * Use google: find how to get the number `PI` in JavaScript.
// * Store a radius into a variable.
// * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
// * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
console.log("### Prob 3: properties of a circle ###")

let radius = 5;
let circumferenceResult = radius * Math.PI;
console.log("The circumference is " + circumferenceResult);

let areaOfCircle = Math.PI * Math.pow(radius, 2);
console.log("The area is " + areaOfCircle);


// 4. Temperature Converter:
// * Store a celsius temperature into a variable.
// * Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
// * Now store a fahrenheit temperature into a variable.
// * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C."
console.log("### Prob 4: Temperature Converter ###")

let tempInCelcius = 33;
let tempInFahrenheit = (tempInCelcius * (9/5) + 32);
console.log(tempInCelcius + "°C is " + tempInFahrenheit + "°F.");

let tempInFahrenheit2 = 33;
let tempInCelcius2 = (tempInFahrenheit2 - 32) * (5/9);
console.log(tempInFahrenheit2 + "°F is " + tempInCelcius2 + "°C." );

// ### What will be logged: 
// 5. 
// ```js

// let num1 = 2
// let num2 = 5
// let num3 = num1 * num2
// console.log(num3)
// ```
console.log("### Prob 5: will log 10 ###");
//10 

// 6. 
// ```js
// let str = 'jel' 

// str += 'lo'

// console.log(str)
// ```
console.log("### Prob 6: will log jello ###");
//jello

// 7. 
// ```js

// let string =  'My favorite number is ';
// let number = 42
// let sentence = string + number
// console.log(typeof(sentence))
// ```
console.log("### Prob 7: will log string ###");
//string






