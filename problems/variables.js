// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
const birthYear = 1992


//  * Store a future year in a variable.

let futureYear = 2030

//  * Calculate your 2 possible ages for that year based on the stored values.
 
console.log(futureYear-birthYear)
"I will be either '37' or '38' in '2030'"


//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
let myAge = 28

//  * Store a maximum age in a constant variable.
const maxAge = 100

//  * Store an estimated snack amount per day (as a number).
let dailySnack = 3

//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
let year = 365
console.log(maxAge - myAge)
let totalAge = 72
console.log(totalAge * year)
let totalDays = 26280
console.log(dailySnack * totalDays)
let snackNumber = 78840

//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
"you will need '7840' to last you until the age of '100'"

// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
let radius = 2
let diamater = 4
let pi = 3.14
console.log(pi * diamater)

//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
"the circumference is '12.56'"

//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
let radiusSquared = 4
console.log(pi * radiusSquared)

"the area is '12.56'"

//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
let celciusTemp = 5

//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
"'5°C' is 41°F'"

//  * Now store a fahrenheit temperature into a variable.

let fahreinheitTemp = 80

//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."
"'80°F' is '27°C'"


// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable

let aliceTestGrade = 85

//  * Store Bob's grade on a test to a variable

let bobTestGrade = 90

//  * Store Cam's grade on a test to a variable
let camTestGrade = 77
//  * Find the average grade of all students
let totalGrade = 85 + 90 + 77


console.log(totalGrade / 3)


//  * Store Dee's grade on a test to a variable

let deeTestGrade = 100

//  * Find the average grade of all students
console.log((deeTestGrade + totalGrade) /4)

//  * Print out if Dee's grade is higher than the class average
"'Dee's grade is higher than class average" 
// ## Problem Six

// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
// * a = 123
// * Output:
// * 3

let a = 65432
console.log(a % 10)

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

let bob = 12
let x = 5
let y = 4
let alice = 4 * (12+5)-5
console.log(alice)
"Alice is '63'"
// ## Problem Eight

// * Cat and Dog Percentages
// * An animal daycare consists of `numberOfCats` cats and `numberOfDogs` dogs.
// * Print the percentage of dogs in the daycare followed by the percentage of cats in the class. The percentage should be printed rounded down to the nearest integer. For example 33.333333333333 will be printed as 33.
// * Example 
// * Input
// * numberOfCats = 20  
// * numberOfDogs = 60
// * Output:
// * 25% of the daycare animals are cats
// * 75% of the daycare animals are dogs

let numberOfCats = 100
let numberOfDogs = 120

let totalNumber = 120 + 100
console.log(numberOfDogs / totalNumber)
console.log(numberOfCats / totalNumber)

"An animal daycare holds '45%' cats and '55%' numberOfDogs."
// ## Problem Nine

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.  
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.

let leapYear = 2020
let isLeapYear = leapYear % 4 && (leapYear % 100 && leapYear % 400)
console.log(isLeapYear)

console.log((isLeapYear === 0 && "LeapYear ") || isLeapYear !== 0 && "NotALeapYear" )
// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
//     ```js
//     let num1 = 2
//     let num2 = 5
//     let num3 = num1 * num2
//     console.log(num3)
//     ```

// b. 
//     ```js
//     let str = 'jel' 
//     str += 'lo'
//     console.log(str)
//     ```

// c. 
//     ```js
//     let string =  'My favorite number is ';
//     let number = 42
//     let sentence = string + number
//     console.log(typeof(sentence))
//     ```


