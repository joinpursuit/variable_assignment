
// 1. Age Calculator:
//     * Store your birth year in a variable.
//     * Store a future year in a variable.
//     * Calculate your 2 possible ages for that year based on the stored values.
//     * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//     * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

const birthYear = 1994;
let futureYear = 2023;
ageMin = futureYear - birthYear;
ageMax = ageMin + 1;
console.log('I will either be ' + ageMin + ' or ' + ageMax + ' in ' + futureYear);

// 2. Snack Supply Calculator:
//     * Store your current age in a variable.
//     * Store a maximum age in a variable.
//     * Store an estimated snack amount per day (as a number).
//     * Calculate how many snacks you would eat total, from your current age until the maximum age.
//     * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

let age = 25;
let maxAge = 30;
const snacks = 3;
result = (((maxAge - age) * 365) * 2);
console.log('You will need ' + result + ' to last you until the age of ' + maxAge);

// 3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
//     * Use google: find how to get the number `PI` in JavaScript.
//     * Store a radius into a variable.
//     * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
//     * Calculate the area based on the radius, and log "The area is `areaOfCircle`".

//circumference = pi * diameter
//diameter = 2r
// area = pi * r2

let radius = 6;
circumferenceResult = Math.PI * (radius * 2);
areaOfCircle = Math.PI * Math.pow(radius, 2);
console.log('The circumference is ' + circumferenceResult + 'The area is ' + areaOfCircle);

// Temperature Converter:
//     * Store a celsius temperature into a variable.
//     * Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
//     * Now store a fahrenheit temperature into a variable.
//     * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C."

// C × 9/5) + 32 =F
//°F − 32) × 5/9 = 0°C
let celsius = 45;
let fahrenheit = 80
tempInFahrenheit = (celsius * 9 / 5) + 32;
tempInCelcius = (fahrenheit - 32 ) * 5 / 9;
console.log('tempInCelcius is ' + celsius + ' tempInFahrenheit is ' + tempInFahrenheit);
console.log('tempInFahrenheit is ' + fahrenheit + ' tempInCelcius is ' + tempInCelcius);

5.

    let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3)  // 10


6.

    let str = 'jel'
    str += 'lo'
    console.log(str) //jello


7.

    let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    console.log(typeof(sentence)) //string
