//Problem One

let birthYear = 1996
let futureYear = 2020
let ageMax = futureYear - birthYear
let ageMin = ageMax - 1

console.log('I will be either ' + ageMin + ' or ' + ageMax + ' in ' + futureYear)

//Problem 2

let currentAge = 23
let maxAge = 30
let snackPerDay = 2
let snackNumber = (maxAge - currentAge) * 365 * snackPerDay

console.log('You will need ' + snackNumber + ' to last you until the age of ' + maxAge)

//Problem 3

let radius = 5
let circumferenceResult = (2 * Math.PI) * radius
let areaOfCircle = Math.PI * (radius * radius)

console.log("The circumference is " + circumferenceResult)
console.log("The area is " + areaOfCircle)

//Problem 4

let tempInCelsius = 30
let tempInFahrenheit = (tempInCelsius * 1.8) + 32

let farenheitTemp = 50
let celsiusTemp = (farenheitTemp - 32) / 1.8

console.log(tempInFahrenheit + "°F is " + tempInCelsius + "°C.")
console.log(farenheitTemp + "°F is " + celsiusTemp + "°C.")
