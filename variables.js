// Age Calculator:

// Store your birth year in a variable.
var birthYear = 1991
// Store a future year in a variable.
var futureYear = 2020
// Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
let ageMin = futureYear - birthYear - 1
let ageMax = futureYear - birthYear + 1
// Log them to the screen like so: "I will be either ageMin or ageMax in futureYear", substituting the values.
console.log("I will either be " + ageMin + " or " + ageMax + " in " + futureYear);
// Snack Supply Calculator:

// Store your current age in a variable.
var currentAge = 27
// Store a maximum age in a variable.
var maxAge = 99
// Store an estimated snack amount per day(as a number).
var dailySnacks = 5
// Calculate how many snacks you would eat total, from your current age until the maximum age.
snackNum = (maxAge - currentAge) * 365 * dailySnacks
// Log the result to the screen like this: "You will need snackNumber to last you until the age of maxAge".
console.log("You will need " + snackNum + " to last until the age of " + maxAge)

// Calculate properties of a circle, using the definitions here.

// Use google: find how to get the number PI in JavaScript.
let pi = Math.PI
// Store a radius into a variable.
let radius = 5
// Calculate the circumference based on the radius, and log "The circumference is circumferenceResult".
let circumferenceResult = 2 * radius * pi

console.log("the circumference is "+ circumferenceResult);

// Calculate the area based on the radius, and log "The area is areaOfCircle".
let areaOfCircle = pi * radius * radius

console.log("The area is "+ areaOfCircle);

// Temperature Converter:

// Store a celsius temperature into a variable.
let celsiusTemp = 20
// Convert it to fahrenheit and output "tempInCelcius°C is tempInFahrenheit°F".
let fahrenheitTemp = (celsiusTemp * 9 / 5) + 32

console.log(celsiusTemp + " °C is " + fahrenheitTemp + " °F");

// Now store a fahrenheit temperature into a variable.
let fahrenheit = 69
let celsius = (fahrenheit - 32) * 5 / 9

// Convert it to celsius and output "tempInFahrenheit°F is tempInCelcius°C."
console.log(fahrenheit + " °F is " + celsius + " °C.");

// What will be logged:
// For this section write what you think will be logged as a comment next to console.log like so: console.log('Cat') //'Cat' before running the code. Then execute your file and compare with your prediction.

// let num1 = 2
// let num2 = 5
// let num3 = num1 * num2
// console.log(num3)

//10

// let str = 'jel'
// str += 'lo'
// console.log(str)

//jello

// let string = 'My favorite number is ';
// let number = 42
// let sentence = string + number
// console.log(typeof (sentence))

//string