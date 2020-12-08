// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
const year = 1983
//  * Store a future year in a variable.
let futureYear = 2021
//  * Calculate your 2 possible ages for that year based on the stored values.
let ageMin = 37
let ageMax = 38
console.log("I will be either " +  ageMin + " or " + ageMax + " in " + futureYear)
//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
let currentAge = 40
//  * Store a maximum age in a constant variable.
const maxAge = 42
//  * Store an estimated snack amount per day (as a number).
let estimatedSnack = 4
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
let snackNumber = 2290
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
console.log("You will need " + snackNumber + " to last you until the age of " + maxAge)

// ## Problem Three
// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
let radius = 10
let diameter = 20
let circumferenceResult = 3.14 * diameter 
console.log(circumferenceResult)
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
let areaOfCircle = 3.14 * 100 
console.log("The area is" + " " + areaOfCircle)
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
let tempInCelsius = 37.7778
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
let tempInFahrenheit =100.00004
//  * Now store a fahrenheit temperature into a variable.

//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."
console.log(tempInFahrenheit + " °F is " + tempInCelsius + " °C.")

// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
let aliceGrade = 80
//  * Store Bob's grade on a test to a variable
let bobGrade = 80
//  * Store Cam's grade on a test to a variable
let camGrade = 90
//  * Find the average grade of all students

let averageGrade = (aliceGrade + bobGrade + camGrade)/3
console.log(averageGrade)
//  * Store Dee's grade on a test to a variable
let deeGrade = 100
averageGrade = (aliceGrade + bobGrade + camGrade + deeGrade)/4
//  * Find the average grade of all students
console.log(averageGrade)
//  * Print out if Dee's grade is higher than the class average
console.log("Dee's grade of " + deeGrade + " is higher than the class average")

// ## Problem Six

// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
// * a = 123
// * Output:
// * 3
let a = 123 
let lastOfA = a % 10
console.log(lastOfA)
// Hint:
// Use the remainder % operator.


// ## Problem Seven

// Alice's Age
// * x years from now Alice will be y times older than her brother 
//. Bob is 12 years old. How old is Alice?
// * Example 1
// * Input: 
// * x = 3
// * y = 2
// * bob = 12
// * Expected values: 
// * alice = 2
let x = 8
let bob = 12
let alice  = 16
let y = (x + alice)/(bob + x)
console.log(x + " years from now Alice will be " + y + " times older than her brother" )
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
let numberOfCats = 60
let numberOfDogs = 20
let allAnimals = 80
let catPercent = (numberOfCats/allAnimals)*100
let dogPercent = (numberOfDogs/allAnimals)*100
console.log(catPercent+"%" + " of the daycare animals are cats ")
console.log(dogPercent+"%" + " of the daycare animals are dogs ")

// * Print the percentage of dogs in the daycare followed by the 
//percentage of cats in the class. The percentage should be printed rounded down 
//to the nearest integer. For example 33.333333333333 will be printed as 33.
// * Example 
// * Input
// * numberOfCats = 20  
// * numberOfDogs = 60
// * Output:
// * 25% of the daycare animals are cats
// * 75% of the daycare animals are dogs

// ## Problem Nine

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.  
// * A leap year is a year containing an extra day. It has 366 days instead of 
//the normal 365 days. 
// * The extra day is added in February, which has 29 days 
//instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 
//2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also
// divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" 
//or "Not a leap year!" depending on the year you are provided.


// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next 
//to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. 
//Then execute your file and compare with your prediction.

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


