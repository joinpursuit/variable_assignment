
//# Variable Exercises
//For this exercises we are going to create a file called `variables.js`.
//Copy the description of the exercise as a comment into the file and underneath write your JavaScript code.

// 1. Age Calculator:
//  * Store your birth year in a variable.
//  * Store a future year in a variable.
//  * Calculate your 2 possible ages for that year based on the stored values.
//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

let birthyr= 1996;
let futureyr= 2056;
let ageMin= futureyr-birthyr- 1;
let ageMax= futureyr-birthyr;

console.log('I will be either ' + ageMin + ' or ' + ageMax + ' in ' + futureyr + '.');

// ----------------------------------------------------------------------------------------------------------------------------------------------

// 2. Snack Supply Calculator:
//     * Store your current age in a variable.
//     * Store a maximum age in a variable.
//     * Store an estimated snack amount per day (as a number).
//     * Calculate how many snacks you would eat total, from your current age until the maximum age.
//     * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

let ageNow= 22;
let maxAge= 62;
let snackDay= 2;
let snackYr= 2 * 365
let snackNumber= (maxAge - ageNow) * snackYr * snackDay;

console.log('You will need ' + snackNumber + ' snacks to last you until the age of ' + maxAge + '.');

//----------------------------------------------------------------------------------------------------------------------------------------------------
// 3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
//     * Use google: find how to get the number `PI` in JavaScript.
//     * Store a radius into a variable.
//     * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
//     * Calculate the area based on the radius, and log "The area is `areaOfCircle`".

let radius = 8;
let circumferenceResult = Math.PI * (radius * 2);
let radiuSquared = Math.pow (radius,2);
let areaOfCircle = Math.PI * radiuSquared;

console.log('The circumference is ' + circumferenceResult + '.');
console.log('The area is ' + areaOfCircle + '.');


//--------------------------------------------------------------------------------------------------------------------------------------------------------
 // 4. Temperature Converter:
 //    * Store a celsius temperature into a variable.
 //    * Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
 //    * Now store a fahrenheit temperature into a variable.
 //    * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C."

let tempInCelcius = 28
let tempInFahrenheit = tempInCelcius * (9/5) + 32

console.log(tempInCelcius + 'C° is ' + tempInFahrenheit + '°F.');

//--------------------------------------------------------------------------------------------------------------------------------------------------------
//### What will be logged:
//For this section write what you think will be logged as a comment next to `console.log` like so:
//`console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

5.

    let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3); // myanswer: '10'

6.

    let str = 'jel'
    str += 'lo'
    console.log(str); // myanswer: 'jello'

7.

    let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    console.log(typeof(sentence)); // my answer: 'String'
    
