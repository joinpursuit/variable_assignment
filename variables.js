// 1. Age Calculator:
//     * Store your birth year in a variable.
//     * Store a future year in a variable.
//     * Calculate your 2 possible ages for that year based on the stored values.
//     * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//     * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
let bdayYear=1995;
let futureYear=2036;
let ageMin = (futureYear - bdayYear);
let ageMax = (futureYear + 1 - bdayYear);
console.log('I will be either ' + ageMax + ' or ' + ageMin + ' in ' + futureYear+ '.');
//
// 2. Snack Supply Calculator:
//     * Store your current age in a variable.
//     * Store a maximum age in a variable.
//     * Store an estimated snack amount per day (as a number).
//     * Calculate how many snacks you would eat total, from your current age until the maximum age.
//     * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
let currentage = 23;
let maxage = 100;
let snacks = 5;
let days = (maxage -currentage);
console.log(days);
let snacknumber = snacks * days;
console.log(snacknumber);
console.log('You will need ' + snacknumber + ' to last you until the age of ' + maxage);



// 3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
//     * Use google: find how to get the number `PI` in JavaScript.
//     * Store a radius into a variable.
//     * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
//     * Calculate the area based on the radius, and log "The area is `areaOfCircle`".

let pi = Math.PI;
console.log(Math.PI);
let radius = 4;

let circumference = (2 * pi) * radius;

console.log(circumference);
console.log('The circumference is ' + circumference + '.');
//
// 4. Temperature Converter:
//     * Store a celsius temperature into a variable.
//     * Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
//     * Now store a fahrenheit temperature into a variable.
//     * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C."
let areaOfCircle = pi * (radius * radius);
console.log(areaOfCircle);
console.log ('The area is ' + areaOfCircle + '.');
let celsius = 40;
let tempInFahrenheit = celsius * 1.8 + 32;
console.log(celsius);
console.log('Celsius temperature ' + celsius + ' in fahrenheit is ' + tempInFahrenheit + '.');
let fahrenheit = 76;
let tempInCelcius = (fahrenheit - 32) / 1.8;
console.log(tempInCelcius);



//
// ### What will be logged:
// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.
//
// 5.

     let num1 = 2;
     let num2 = 5;
     let num3 = num1 * num2;
     console.log(num3); // 10

//
// 6.

     let str = 'jel';
     str += 'lo';
     console.log(str); // jello

//
// 7.

     let string =  'My favorite number is ';
     let number = 42;
     let sentence = string + number;
     console.log(typeof(sentence)); // String. My favorite number is 42.
