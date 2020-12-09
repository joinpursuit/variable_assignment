// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
//  * Store a future year in a variable.
//  * Calculate your 2 possible ages for that year based on the stored values.
//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
//question 1
const birthYear = 1965
let futureYear = 2022
let ageMin = 2022 - birthYear - 1
let ageMax = 2022 - birthYear
console.log('In ' + futureYear + ' I will either be ' + ageMin + ' or ' + ageMax )



// ## Problem Two


// Snack Supply Calculator:
//  * Store your current age in a variable.
//  * Store a maximum age in a constant variable.
//  * Store an estimated snack amount per day (as a number).
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
let currentAge = 54
const maxAge = 200
let snackNumber = 2
let yearsGoneBy = maxAge - currentAge
console.log('I will need ' + snackNumber * yearsGoneBy + ' snacks to last until the age of ' + yearsGoneBy)

// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp
let radius = 2
let circumferenceResult = (Math.PI*2) * radius
console.log('The circumference is ' + circumferenceResult)
let area = Math.PI * (radius**2)
console.log('The area is ' + area)

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
//  * Now store a fahrenheit temperature into a variable.
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."
let tempInCelsius = 0
let tempInFahrenheit = 32
console.log(tempInFahrenheit + "°F is " + tempInCelsius + "°C")

// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
//  * Store Bob's grade on a test to a variable
//  * Store Cam's grade on a test to a variable
//  * Find the average grade of all students
//  * Store Dee's grade on a test to a variable
//  * Find the average grade of all students
//  * Print out if Dee's grade is higher than the class average
let aliceGrade = 20
let bobGrade = 75
let camGrade = 100
let threeStudents  = aliceGrade + bobGrade + camGrade
let avg1 = threeStudents / 3
let deesGrade = 100
let fourStudents = threeStudents + deesGrade
let avg2 = fourStudents / 4
console.log("Dee's grade of " + deesGrade + "% is higher the the class average of " + avg2 + "%")

// ## Problem Six

// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
// * a = 123
// * Output:
// * 3
let a = 5002
let output = a % 5000
console.log(output)
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
let x = 3;
let y = 2;
const bob = 12;
let aliceAge = y * ( bob + x) - x;
console.log(aliceAge);
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

//numberOfCats = Math.floor (45.4)
//numberOfDogs = Math.floor (55.4)

let dogs = 154
let cats = 53
let total = dogs + cats 
numberOfCats = cats/total * 100
numberOfDogs = dogs/total * 100
console.log(numberOfCats + "%" + " of the daycare animals are cats")
console.log(numberOfDogs + "%" + " of the daycare animals are Dogs")

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
/a
console.log(10)
//b
console.log('jello')
//c
console.log(typeof'My favorite number is 42')
