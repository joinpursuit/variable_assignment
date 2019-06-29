// JOSEPH P. PASAOA
/* 1. Age Calculator:
    * Store your birth year in a variable.
    * Store a future year in a variable.
    * Calculate your 2 possible ages for that year based on the stored values.
    * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
    * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
*/
console.log('1. Age Calculator:');
const born = 1982;
let futureYear = 2032;
let ageMax = futureYear - born;
let ageMin = ageMax - 1;
console.log('I will either be ' + ageMin + ' or ' + ageMax + ' years old in ' + futureYear + '.');

console.log(' ');
/* 2. Snack Supply Calculator:
    * Store your current age in a variable.
    * Store a maximum age in a variable.
    * Store an estimated snack amount per day (as a number).
    * Calculate how many snacks you would eat total, from your current age until the maximum age.
    * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
*/
console.log('2. Snack Supply Calculator:');
const currentAge = 37;
let maxAge = 47;
let avgSnacks = 2;
let howManyYears = maxAge - currentAge;
let howManyDaysNoLeaps = howManyYears * 365;
let leaps = Math.floor(howManyYears / 4);
let howManyTotalDays = howManyDaysNoLeaps + leaps;
let snackNumber = howManyTotalDays * avgSnacks;
console.log('You will need ' + snackNumber + ' snacks to last you until the age of ' + maxAge + ' years old!');

console.log(' ');
/* 3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
    * Use google: find how to get the number `PI` in JavaScript.
    * Store a radius into a variable.
    * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
    * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
*/
console.log('3. Calculate properties of a circle, using the definitions here.');
let someRadius = 11;
let circumferenceResult = 2 * Math.PI * someRadius;
console.log('The circumference is ' + circumferenceResult + '.');
let areaOfCircle = Math.PI * someRadius * someRadius;
console.log('The area is ' + areaOfCircle + '.');

console.log(' ');
/* 4. Temperature Converter:
    * Store a celsius temperature into a variable.
    * Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
    * Now store a fahrenheit temperature into a variable.
    * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C."
*/
console.log('4. Temperature Converter:');
let tempInCelcius = 50;
let tempInFahrenheit = tempInCelcius * 9 / 5 + 32;
console.log(tempInCelcius + '°C is ' + tempInFahrenheit + '°F.');
tempInFahrenheit = 200;
tempInCelcius = (tempInFahrenheit - 32) * 5 / 9;
console.log(tempInFahrenheit + '°F is ' + tempInCelcius + '°C.');

console.log(' ');

// ### What will be logged:
// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.
/*
5.
    ```js
    let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3)
    ```
*/
console.log('5.');

let num1 = 2;
let num2 = 5;
let num3 = num1 * num2;

console.log('console.log(num3) // 10');
console.log(num3);

console.log(' ');
/*
6.
    ```js
    let str = 'jel'
    str += 'lo'
    console.log(str)
    ```
*/
console.log('6.');

let str = 'jel';
str += 'lo';

console.log('console.log(str) // jello');
console.log(str);

console.log(' ');
/*
7.
    ```js
    let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    console.log(typeof(sentence))
    ```
*/
console.log('7.');

let string =  'My favorite number is ';
let number = 42;
let sentence = string + number;

console.log('console.log(typeof(sentence)) // string');
console.log(typeof (sentence));

console.log(' ');
