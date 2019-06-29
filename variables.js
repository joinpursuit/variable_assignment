//
// 1. Age Calculator:
//     * Store your birth year in a variable.
//     * Store a future year in a variable.
//     * Calculate your 2 possible ages for that year based on the stored values.
//     * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//     * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.


let birth = 1974;
let futureYear = 2040;
let ageMax = futureYear - birth;
let ageMin = ageMax --;

console.log('I will be ' + ageMin + ' or ' + ageMax + ' in ' + futureYear)
// I will be 66 or 65 in 2040
// -------------------------------------------------------------------------------------------------------------------------------

// 2. Snack Supply Calculator:
//     * Store your current age in a variable.
//     * Store a maximum age in a variable.
//     * Store an estimated snack amount per day (as a number).
//     * Calculate how many snacks you would eat total, from your current age until the maximum age.
//     * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".


let myAge = 44;
let maxAge = 60;
let daySnacks = 3;
let year = 365;
let yearSnacks = (year * daySnacks);
let snackNumber = (maxAge -  myAge) * yearSnacks;
console.log('You will need ' + snackNumber + ' last you until the age of '+ maxAge);

// You will need 17520 last you until the age of 60


//-------------------------------------------------------------------------------------------------------------------------------

//
// 3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
//     * Use google: find how to get the number `PI` in JavaScript.
//     * Store a radius into a variable.
//     * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
//     * Calculate the area based on the radius, and log "The area is `areaOfCircle`".

let r = 4;
let d = 2 * r;
let pi = Math.PI;
let circumferenceResult = pi * ( 2 * r);
console.log('The circumference is ' + circumferenceResult);

// The circumference is 25.132741228718345


let area = pi * (Math.pow(r,2));
console.log('The area is ' + area);

// The area is 50.26548245743669

// --------------------------------------------------------------------------------------------------------------------------------



// 4. Temperature Converter:
//     * Store a celsius temperature into a variable.
//     * Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
//     * Now store a fahrenheit temperature into a variable.
//     * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C."



let tempInCelcius = 35;
let tempInFahrenheit = (1.8 * tempInCelcius) + 32
console.log(tempInFahrenheit +  '°F is ' +  tempInCelcius + '°C');

// --------------------------------------------------------------------------------------------------------------------------------

5.

    let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3) // My Answer: 10 multiply the first num1 by num 2

// --------------------------------------------------------------------------------------------------------------------------------

6.

    let str = 'jel'
    str += 'lo'
    console.log(str) // My Answer:jello it will combine the jel with lo (concatenate)

// --------------------------------------------------------------------------------------------------------------------------------

7.

    let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    console.log(typeof(sentence)) // My Answer: string; first 'My favorite number is 42 and because it is mix of # and letter so the output will be string.
