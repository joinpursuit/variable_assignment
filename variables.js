//
// # Variable Exercises
//
// For this exercises we are going to create a file called `variables.js`. Copy the description of the exercise as a comment into the file and underneath write your JavaScript code.
//
// 1. Age Calculator:
//     * Store your birth year in a variable.
//     * Store a future year in a variable.
//     * Calculate your 2 possible ages for that year based on the stored values.
//     * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//     * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

let year1;
year1 = 1995;

const birthYear = year1;
let futureYear;

futureYear = 2040;

let ageMin;
let ageMax;
ageMax = futureYear - birthYear;
ageMin = ageMax--;

console.log('I will be either ' + ageMin + ' or ' + ageMax + ' in ' + futureYear);

// 2. Snack Supply Calculator:
//     * Store your current age in a variable.
//     * Store a maximum age in a variable.
//     * Store an estimated snack amount per day (as a number).
//     * Calculate how many snacks you would eat total, from your current age until the maximum age.
//     * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

let currentAge = 23;
let maxAge;
let snackNumber;

snackNumber = 2;
maxAge = 44;

snackNumber = (maxAge - currentAge) * 365.25 * snackNumber;

console.log('You will need ' + snackNumber + ' snacks to last you until the age of ' + maxAge);

// 3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
//     * Use google: find how to get the number `PI` in JavaScript.
//     * Store a radius into a variable.
//     * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
//     * Calculate the area based on the radius, and log "The area is `areaOfCircle`".

const pi = Math.PI;
let radius;
let circumferenceResult;
let areaOfCircle;

radius = 3;

circumferenceResult = 2 * pi * radius;
areaOfCircle = pi * radius * radius;

console.log('The circumference is ' + circumferenceResult);
console.log('The area is ' + areaOfCircle);

// 4. Temperature Converter:
//     * Store a celsius temperature into a variable.
//     * Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
//     * Now store a fahrenheit temperature into a variable.
//     * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C."

let tempInCelcius;
let tempInFahrenheit;
let celsius;
let fahrenheit;

celsius = 62;
fahrenheit = 89;

tempInCelcius = (fahrenheit - 32) * 5 / 9;
tempInFahrenheit = celsius * 9 / 5 + 32;

console.log(celsius + ' degrees celsius is ' + tempInFahrenheit + ' degrees fahrenheit.');
console.log(fahrenheit + ' degrees fahrenheit is ' + tempInCelcius + ' degrees celsius.');

//
// ### What will be logged:
// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.
//
// 5.
//     ```js

let num1 = 2;
let num2 = 5;
let num3 = num1 * num2;
console.log(num3); // 10

//     ```
//
// 6.
//     ```js

let str = 'jel';
str += 'lo';
console.log(str); // jello

//     ```
//
// 7.
//     ```js

let string =  'My favorite number is ';
let number = 42;
let sentence = string + number;
console.log(typeof(sentence)); //string

//     ```
