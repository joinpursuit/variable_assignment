// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
"use strict"
const birthYear = 1982
// console.log(birthYear)

//  * Store a future year in a variable.
let futureYear = 2045

//  * Calculate your 2 possible ages for that year based on the stored values.
let ageMax = futureYear - birthYear
console.log(ageMax)

let ageMin = ageMax-1
console.log(ageMin)

//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.

//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
let sentence = `I will be either ${ageMin} or ${ageMax} in ${futureYear}.`
console.log(sentence)


// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
let currentAge = 38

//  * Store a maximum age in a constant variable.
const maxAge = 120

//  * Store an estimated snack amount per day (as a number).
let snackAmt = 6

//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
let snackTotal = (maxAge - currentAge) * snackAmt * 365
console.log(snackTotal)

//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
let sentence2 = `You will need ${snackTotal} to last you until the age of ${maxAge}.`
console.log(sentence2)

// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
let radius = 8

//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
let pI = Math.PI
let circumferenceResult = Math.floor(2 * (pI * radius))
console.log(circumferenceResult)

let sentenceCircumference = `The circumference is ${circumferenceResult}.`
console.log(sentenceCircumference)

//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
let areaOfCircle = Math.floor(pI * (radius * radius)) 
console.log(areaOfCircle)

let sentenceArea = `The area is ${areaOfCircle}.`
console.log(sentenceArea)

//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
let celsius = 40

//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
let tempInFahrenheit = (celsius * 1.8) + 32 
console.log(tempInFahrenheit)

let tempInCelsius = (tempInFahrenheit - 32) / (1.8) 
console.log(tempInCelsius)

let tempSen1 = `${tempInCelsius}°C is ${tempInFahrenheit}°F` 
console.log(tempSen1)

//  * Now store a fahrenheit temperature into a variable.
let fahrenheit = 88

//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."
tempInCelsius = Math.floor((fahrenheit - 32) / (1.8)) 
// Math.floor(tempInCelsius)  
// console.log(tempInCelsius)
console.log(tempInCelsius)

tempInFahrenheit = (tempInCelsius * 1.8) + 32
console.log(tempInFahrenheit)

// console.log(Math.floor(tempInCelsius))
let tempSen2 = `${tempInFahrenheit}°F is ${tempInCelsius}°C.`  
console.log(tempSen2)

// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
let aliceGrade = 55

//  * Store Bob's grade on a test to a variable
let bobGrade = 66

//  * Store Cam's grade on a test to a variable
let camGrade = 77

//  * Find the average grade of all students
let averageGrade = (aliceGrade + bobGrade + camGrade) / 3
console.log(averageGrade)

//  * Store Dee's grade on a test to a variable
let deeGrade = 88

//  * Find the average grade of all students
averageGrade = (aliceGrade + bobGrade + camGrade + deeGrade) /4
console.log(averageGrade)

//  * Print out if Dee's grade is higher than the class average
let gradeReport = `Dee's grade of ${deeGrade} is higher than the class average of ${averageGrade}.`
console.log(gradeReport)

// ## Problem Six

// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
// * a = 123
// * Output:
// * 3
let a = 2603

let finalDigit = a % 2600
console.log(Math.floor(finalDigit))

// Hint:
// Use the remainder % operator.


// ## Problem Seven

// Alice's Age
// * x years from now Alice will be y times older than her brother Bob. Bob is 12 years old. How old is Alice?
// * Example 1
// * Input: 
// * x = 3
// * y = 2
// * bob = 12
// * Expected values: 
// * alice = 27
// 
let x = 8
let y = 2
let bob2 = 12
let alice = (y * (bob2 + x))
// let alice = aliceAge + x

console.log(alice)

// * Example 2
// * Input: 
// * x = 1
// * y = 3
// * bob = 12
// * Expected values: 
// * alice = 38

// * Hint:
// * alice + x = y * (bob + x)
// * Solve for alice

// ## Problem Eight

// * Cat and Dog Percentages
// * An animal daycare consists of `numberOfCats` cats and `numberOfDogs` dogs.
// * Print the percentage of dogs in the daycare followed by the percentage of cats in the class. 
//   The percentage should be printed rounded down to the nearest integer.
//   For example 33.333333333333 will be printed as 33.
// * Example 
// * Input
// * numberOfCats = 20  
// * numberOfDogs = 60
// * Output:
// * 25% of the daycare animals are cats
// * 75% of the daycare animals are dogs

let numberOfCats = 75
let numberOfDogs = 25

let daycareTotal = 100

console.log(`${(numberOfCats / daycareTotal) * 100}% of the daycare animals are cats`)
console.log(`${(numberOfDogs / daycareTotal) * 100}% of the daycare animals are dogs`)

// ## Problem Nine

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.  
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.


// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next to `console.log` like 
// so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
//     ```js
//     let num1 = 2
//     let num2 = 5
//     let num3 = num1 * num2
    // console.log(num3) //10
//     ```
let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3)


// b. 
//     ```js
//     let str = 'jel' 
//     str += 'lo'
//     console.log(str)  //'jello'
//     ```
let str = 'jel'
str += 'lo'
console.log(str)

// c. 
//     ```js
//     let string =  'My favorite number is ';
//     let number = 42
//     let sentence = string + number
//     console.log(typeof(sentence))  // string
//     ```
let string = 'My favorite number is ';
let number = 42
let sentence3 = string + number   // I used sentence several times above in this assigment
console.log(typeof(sentence3))



function sum(){
    let x = 15;
    let y = 8;
    return x + y
}
console.log(sum())



