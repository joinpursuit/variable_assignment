// This is Problem #1

const myBirthYear = 1994
let futureYear = 2025
console.log(futureYear - myBirthYear);
let ageMin = 30
let ageMax = 31
console.log("In " + futureYear + " I will be either " + ageMin + " or " + ageMax);

// This is Problem 2

let currentAge = 25
let maxAge = 85
let snackNumber = 5
const daysYear = 365
let yearsUntilMaxAge = 60
console.log(snackNumber * daysYear * yearsUntilMaxAge);
let survivalSnackAmount = 109500
console.log("I will need " + survivalSnackAmount + " snacks to last until the age of " + maxAge + " . ");

// This is Problem 3

let radius = 30
let diameter = radius * 2
console.log(diameter)
const pi = 3.141592
console.log(pi * diameter);
let circumference = pi * diameter 
console.log("The circumference is " + circumference);
let area = Math.pow(radius, 2) * pi 
console.log(area);
console.log("The area is " + area);

// This is Problem 4

let celcius = 35 
let fahrenheit = celcius * 1.8 + 32;
console.log(fahrenheit + " degrees fahrenheit " + "is " + celcius + " degrees celcius " + "when converted. ")
let fahrenheitVariable = 35
let celciusVariable = (fahrenheitVariable - 32) * 1.8
console.log(celciusVariable)
console.log("The temperature " + fahrenheitVariable + " degrees fahrenheit is " + celciusVariable + "degrees celcius when converted. ");

// This is Problem 5

let aliceGrade = 75
let bobGrade = 50
let camGrade = 20
let aBCaverage = (aliceGrade + bobGrade + camGrade) / 3;
console.log(aBCaverage);
let deeGrade = 90
let aBCDaverage = (aliceGrade + bobGrade + camGrade + deeGrade) / 4;
console.log(aBCDaverage);
let gradeQuestion = "Will Dee's grade be higher than the class average?"
let gradeAnswer = deeGrade >= aBCDaverage
console.log(gradeAnswer);
console.log(" Dee's grade is higher than the class average. ")

// this is problem 6

let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3) // "10" 

let str = "jel"
str += "lo"
console.log(str) // jello

let string = "My favorite number is"
let number = 42
let sentence = string + number 
console.log(typeof(sentence)) // string

