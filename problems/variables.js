// ## Problem One


// Age Calculator:
//  * Store your birth year in a constant variable.
//  * Store a future year in a variable.
//  * Calculate your 2 possible ages for that year based on the stored values.
//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

const myAge = 1994
let futureYear = 2024

let posAge = futureYear - myAge
let result = 'I will be either'+' '+posAge+' '+'or'+' '+(posAge + 1)+' '+'in '+futureYear
console.log(result)

// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
//  * Store a maximum age in a constant variable.
//  * Store an estimated snack amount per day (as a number).
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

let myAge2 = 26
const maxAge = 1000
let snakInvDay = 2
let snakInvYr = snakInvDay*365

let snakTot = snakInvYr*maxAge-snakInvYr*myAge2
console.log('You will need '+snakTot+' '+'to last you until the age of '+maxAge)

// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

let radius = 10
let circumference = 2*Math.PI*radius
console.log('The circumference is '+circumference)

let area = Math.PI*radius**2
console.log('The area is '+area)

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
//  * Now store a fahrenheit temperature into a variable.
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."

let tempInCelsius = 100
let tempInFahrenheit = (tempInCelsius*9/5) + 32 
console.log(tempInFahrenheit+'F'+' is '+tempInCelsius+'C')

// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
//  * Store Bob's grade on a test to a variable
//  * Store Cam's grade on a test to a variable
//  * Find the average grade of all students
//  * Store Dee's grade on a test to a variable
//  * Find the average grade of all students
//  * Print out if Dee's grade is higher than the class average

let aliceScore = 1
let bobScore = 2
let camScore = 3

let avg = [aliceScore, bobScore, camScore]
let avgScore1 = (aliceScore+bobScore+camScore)/avg.length
let deeScore = 5

let totalScore = avg.length+deeScore
console.log(totalScore)

console.log(totalScore >= deeScore)

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
/*let a = [1,2,3]

console.log(a.pop());*/

let A = 123%4

console.log(A)


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

let x = 3
let y = 2
let bAge = 12
let aAge = y * (bAge+x)-x
console.log(aAge)

/*let x = y(bobAge+x)-aliceAge 
let y = 2(x)+aAge+bAge
let aAge = y(bAge)
let bAge =  12*/
//console.log('Alice is '+aAge+' years of age')





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
let numberOfDogs = 35
let totalAnimals = numberOfCats+numberOfDogs

let percentCat = numberOfCats/totalAnimals*100/1
let percentDog = numberOfDogs/totalAnimals*100/1

console.log('Dogs are '+Math.round(percentDog)+'%   '+'Cats are '+Math.round(percentCat)+'%')


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
let div4 = leapYear % 4 === 0
let div100 = leapYear % 100 === 0
let div400 = leapYear % 400 === 0

let isLeapYear = div4 && ! div400
console.log(isLeapYear && 'Leap Year!')
console.log(!isLeapYear && 'Not a Leap Year!')

/*let leapYear = 2013

let isLeapYear = leapYear % 4 && (leapYear % 100 && leapYear % 400)

console.log((isLeapYear === 0 && "Leap Year") || isLeapYear !== 0 && "Not a leap year!")*/



// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
//     ```js
//     let num1 = 2
//     let num2 = 5
//     let num3 = num1 * num2
//     console.log(num3) //10
//     ```

// b. 
//     ```js
//     let str = 'jel' 
//     str += 'lo'
//     console.log(str) //'jello'
//     ```

// c. 
//     ```js
//     let string =  'My favorite number is ';
//     let number = 42
//     let sentence = string + number
//     console.log(typeof(sentence)) //'string'
//     ```


