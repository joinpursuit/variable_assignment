// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable. 
const birthYear = 1994
console.log(birthYear)

//  * Store a future year in a variable.
let futureYear = 2090
console.log(futureYear)

//  * Calculate your 2 possible ages for that year based on the stored values.
let ageMax= (futureYear - birthYear)
console.log(ageMax) 

let ageMin= (ageMax - 1)
console.log(ageMin)

let sentence1 = `I will be either ` 
let sentence2 = ' or '
let sentence3 = ' or '
sentence = `I will be either ` + ageMin + ' or '+ ageMax + ' or '+ futureYear
console.log(sentence)

let sentence4= "I will be either " + ageMin +` or `+ ageMax +` in `+futureYear
console.log(sentence4)
 //


//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.

const currentAge = 26
console.log(currentAge)

//  * Store a maximum age in a constant variable.

const maxAge = 100
console.log(maxAge)

//  * Store an estimated snack amount per day (as a number).
let estimatedSnacks = 4
console.log(estimatedSnacks)

//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
let days = (maxAge - currentAge) * 365
let snackNumber = days * 4
console.log(snackNumber)

let sentence5= "You will need " + snackNumber + " snacks to last you until the age of " + maxAge
console.log(sentence5)
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.

let radius = 4

//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
let circumference = 2 * 3.14 * radius

//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

let areaOfCircle = 3.14 * (radius**2) 
console.log ( areaOfCircle, circumference)



// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
let celsius = 32
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
let tempInFahrenheit = (celsius * 9/5) + 32
console.log( )

//  * Now store a fahrenheit temperature into a variable.


//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."


// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
let alicesGrade = 90


//  * Store Bob's grade on a test to a variable
let bobsGrade = 65

//  * Store Cam's grade on a test to a variable
let camsGrade = 80
//  * Find the average grade of all students
let averageGrade =  (bobsGrade + alicesGrade + camsGrade)/3
console.log(averageGrade)

//  * Store Dee's grade on a test to a variable
let deesGrade= 100

//  * Find the average grade of all students
let averageTest = (bobsGrade + alicesGrade + camsGrade + deesGrade)/4
console.log(averageTest)

//  * Print out if Dee's grade is higher than the class average
let testSentence = "Dee's grade is " + deesGrade + " higher than the class average"
+ averageTest

console.log (testSentence)


// ## Problem Six

// Find the last number:
// * You are given a number a. Print the last digit of a.
let a = 122
console.log(a%10)

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


let bob = 12
let x = 5
let y = 2
let alice = y * (bob +x)-x
console.log(alice)


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
let numberOfDogs = 25
let daycare = 65
let percentageOfCats = (numberOfCats  * 100) /65
let percentageOfDogs = (numberOfDogs *100)/65
console.log( percentageOfCats, percentageOfDogs)


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


