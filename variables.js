// 1. Age Calculator:
//* Store your birth year in a variable.
//* Store a future year in a variable.
//* Calculate your 2 possible ages for that year based on the stored values.
//* For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//* Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
const birthYear = 1994;
let year = 2040;
let currentAge = 25;
ageMax = year - birthYear;
ageMin = year - birthYear - 1;

console.log('I am currently ' + currentAge + ' years old. ' + 'I will either be ' + ageMin + ' or ' + ageMax + ' in ' + year + '.');

/* 2. Snack Supply Calculator:
    * Store your current age in a variable.
    * Store a maximum age in a variable.
    * Store an estimated snack amount per day (as a number).
    * Calculate how many snacks you would eat total, from your current age until the maximum age.
    * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
*/

let myAge = 25;
let maxAge =75;
let snacks = 2;
let days = maxAge - myAge;
snackNumber = days * snacks;
console.log('You will need '+ snackNumber + ' snacks to last you until the age of ' + maxAge + '.');

/*
Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
    * Use google: find how to get the number `PI` in JavaScript.
    * Store a radius into a variable.
    * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
    * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
*/


let radius = 5;
let circumferenceResult = Math.PI * radius * 2;
console.log('The circumference is ' + circumferenceResult);
let areaOfCircle = Math.PI * Math.pow(radius, 2);
console.log('The area is ' + areaOfCircle);

/* 4. Temperature Converter:
    * Store a celsius temperature into a variable.
    * Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
    * Now store a fahrenheit temperature into a variable.
    * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C." */

    let tempInCelcius = 0;
    let tempInFahrenheit = 0;
    let celciusResult = 0;
    let fahrenheitResult = 0;
    tempInFahrenheit = tempInCelcius * (9/5) + 32;
    console.log(tempInCelcius + '°C is ' + tempInFahrenheit + '°F.');
    celciusResult = fahrenheitResult * (5/9) - 32;
    console.log(fahrenheitResult + '°F is ' + celciusResult + '°C.');

   5.
      let num1 = 2
      let num2 = 5
      let num3 = num1 * num2
      console.log(num3) // 10
// My prediction was correct.

6.
    let str = 'jel'
    str += 'lo'
    console.log(str) // jello
// My prediction was correct.

    7.
        let string =  'My favorite number is ';
        let number = 42
        let sentence = string + number
        console.log(typeof(sentence)) // string
// My prediction was correct.
