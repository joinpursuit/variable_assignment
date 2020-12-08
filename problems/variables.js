// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
    const birthYear = "1986"
    console.log(birthYear)

//  * Store a future year in a variable.    
    let futureYear = "2080"
    console.log(futureYear)

//  * Calculate your 2 possible ages for that year based on the stored values.
//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
let ageMax = (futureYear - birthYear)
console.log(ageMax)

let ageMin = (ageMax - 1)
console.log(ageMin)

let sentence1 = 'I will be either '
let sentence2 = ' or '
let sentence3 = ' in '
sentence = sentence1 + ageMin + sentence2 + ageMax + sentence3 + futureYear
console.log(sentence)

let age1 = ageMin
let age2 = ageMax
let futureTime = futureYear
console.log("I will be either " + age1 + " or " + age2 + " in " + futureTime)


// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
const currentAge = 34
console.log(currentAge)

//  * Store a maximum age in a constant variable.
const maxAgeSnack = 100
console.log(maxAgeSnack)

//  * Store an estimated snack amount per day (as a number).
let estimatedSnack = 4
console.log(estimatedSnack)

//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
let days = (maxAgeSnack - currentAge) * 365
console.log(days)
let snackNumber = days * 4
console.log(snackNumber)

//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

let sentenceSnack = "You will need " + snackNumber + " to last you until the age of " + maxAgeSnack
console.log(sentenceSnack)


// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
let radius = 4
console.log(4)

//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
let circumferenceResult = 3.14 * (radius * 2)
console.log("The circumference is " + circumferenceResult)

//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
let area0fCircle = 3.14 * (radius**2)
console.log("The area is " + area0fCircle)

//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
let celsius = 32
console.log(celsius)

//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
let fahrenheit = (celsius * 9/5) + 32
console.log(fahrenheit)

let tempInCelsius = celsius
console.log(tempInCelsius)
let tempInFahrenheit = fahrenheit
console.log(tempInFahrenheit)
let sentenceTemp = tempInCelsius + "C is " + tempInFahrenheit + "F"
console.log(sentenceTemp)


//  * Now store a fahrenheit temperature into a variable.

let fahrenheit2 = 100
console.log(fahrenheit2)

//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."

let celsius2 = (fahrenheit2 - 32) * 5/9
console.log(celsius2)

let tempInCelsius2 = celsius2
console.log(tempInCelsius2)
let tempInFahrenheit2 = fahrenheit2
console.log(tempInFahrenheit2)
let sentenceTemp2 = tempInFahrenheit2 + "F is " + tempInCelsius2 + "C"
console.log(sentenceTemp2)


// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
//  * Store Bob's grade on a test to a variable
//  * Store Cam's grade on a test to a variable
//  * Find the average grade of all students
//  * Store Dee's grade on a test to a variable
//  * Find the average grade of all students
//  * Print out if Dee's grade is higher than the class average

let aliceGrade =100
let bobGrade = 95
let camGrade = 90
let averageGrade = (aliceGrade + bobGrade + camGrade) / 3
let deeGrade = 100
let classAverage = (aliceGrade + bobGrade +camGrade +deeGrade) /4

console.log (deeGrade > classAverage || false)


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

// ## Problem Nine: Predict the output

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

// ## Problem Ten (BONUS - PREVIEW)

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.  
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.


