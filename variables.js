// Age Calculator:

// Store your birth year in a variable.
// Store a future year in a variable.
// Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// Log them to the screen like so: "I will be either ageMin or ageMax in futureYear", substituting the values.

const birthYear = '1993';
let futureYear = '2020';
let ageMax = futureYear - birthYear;
let ageMin = ageMax - 1 ;

console.log('I will be either ' + ageMin + ' or ' + ageMax) 


// Snack Supply Calculator:

// Store your current age in a variable.
// Store a maximum age in a variable.
// Store an estimated snack amount per day (as a number).
// Calculate how many snacks you would eat total, from your current age until the maximum age.
// Log the result to the screen like this: "You will need snackNumber to last you until the age of maxAge".

const currentAge = 25
const daysPerYear = 365
let maxAge = 100
let snackCount = 5 

let totalSnacks = ((maxAge - currentAge) * daysPerYear ) *snackCount

console.log('You will need ' + totalSnacks + ' snacks to last you until the age of ' + maxAge)




// Calculate properties of a circle, using the definitions here.

// Use google: find how to get the number PI in JavaScript.
// Store a radius into a variable.
// Calculate the circumference based on the radius, and log "The circumference is circumferenceResult".
// Calculate the area based on the radius, and log "The area is areaOfCircle".

const pi = Math.PI
let circleRadius = 5
let areaOfCircle = 2* pi * circleRadius

console.log('The area is ' + areaOfCircle)

// Temperature Converter:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "tempInCelcius°C is tempInFahrenheit°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "tempInFahrenheit°F is tempInCelcius°C."

let celsiusTemperature = 9
const fahrenheit = (9/5 * celsiusTemperature) + 32 

console.log('Temp in Fahrenheit is ' + fahrenheit)

let fahTemperature = 48 
const celsius = (fahTemperature - 32) * 5/9 

 console.log('Temp. In Celsius is ' + celsius)

// What will be logged:
// For this section write what you think will be logged as a comment next to console.log like so: console.log('Cat') //'Cat' before running the code. Then execute your file and compare with your prediction.


// let num1 = 2  
// let num2 = 5
// let num3 = num1 * num2
// console.log(num3)
console.log(10)

// let str = 'jel' 
// str += 'lo'
// console.log(str)
console.log('jello')

// let string =  'My favorite number is ';
// let number = 42
// let sentence = string + number
// console.log(typeof(sentence))
console.log('string')
;
