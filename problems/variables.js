
// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
//  * Store a future year in a variable.
//  * Calculate your 2 possible ages for that year based on the stored values.
//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

const birthYear= 1991
let futureYear= 2021
let ageMax= futureYear - birthYear
let ageMin= ageMax -1
console.log (ageMax)
console.log (ageMin)
console.log (`I will be either ${ageMax} or ${ageMin} in ${futureYear}.`)

// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
//  * Store a maximum age in a constant variable.
//  * Store an estimated snack amount per day (as a number).
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

let myAge= 29
const maxAge= 50
let snackEstmt= 2
let snacksMaxAge= snackEstmt * 365 * (maxAge - myAge)
console.log (`You will need ${snacksMaxAge} to last you until the age of ${maxAge}.`)

// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

let r= 10
let circumferenceResult= 2 * Math.PI * r
console.log ("The circumference is" +circumferenceResult)
let areaOfCircle= Math.PI * r **2
console.log ("The area is" +areaOfCircle)

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
//  * Now store a fahrenheit temperature into a variable.
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."
let tempInC= 30
let tempInF= 36 * (9/5) + 32
console.log (`${tempInC}°C is ${tempInF}°F `) 
let tempInF2 = 17
let tempInC2 = 17 - 32 * (5/9)
console.log (`${tempInF2}°F is ${tempInC2}°C`)

// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
//  * Store Bob's grade on a test to a variable
//  * Store Cam's grade on a test to a variable
//  * Find the average grade of all students
//  * Store Dee's grade on a test to a variable
//  * Find the average grade of all students
//  * Print out if Dee's grade is higher than the class average

let aliceGrade= 90
let bobGrade= 80
let camGrade= 85
let studentAvg= (aliceGrade + bobGrade + camGrade)/3
console.log (studentAvg)
let deeGrade= 100
let classAvg= (deeGrade + studentAvg) / 2
console.log (classAvg)
console.log (`Dee's grade of ${deeGrade} is higher than the class average of ${classAvg}`)


// ## Problem Six

// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
// * a = 123
// * Output:
// * 3
// Hint:
// Use the remainder % operator.

let a= 153 % 5
console.log (a)

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

let x = 1
let y = 2
let bobAge = 12
//Alice's age equation: A+x=y*(B+x) => A= yB + yx -x
let aliceAge = y * bobAge + y * x - x
console.log(aliceAge)


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

let numberOfCats = 40
let numberOfDogs = 30
let totalAnimals = 70
let catPercent = Math.round ((numberOfCats / totalAnimals) * 100)
let dogPercent = Math.round ((numberOfDogs / totalAnimals) * 100)
console.log (`Percentage of cats in animal daycare is: ${catPercent}%.`)
console.log (`Percentage of dogs in animal daycare is: ${dogPercent}%.`)

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

// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
//     ```js
//     let num1 = 2
//     let num2 = 5
//     let num3 = num1 * num2
//     console.log(num3) // 10
//     ```
let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3)


// b. 
//     ```js
//     let str = 'jel' 
//     str += 'lo'
//     console.log(str)// 'jello'
//     ```
let str = 'jel' 
str += 'lo'
console.log(str)

// c. 
//     ```js
//     let string =  'My favorite number is ';
//     let number = 42
//     let sentence = string + number
//     console.log(typeof(sentence))// string
//     ```
let string =  'My favorite number is ';
let number = 42
let sentence = string + number
console.log(typeof(sentence))