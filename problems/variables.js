// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
const birthYear = 1990

//  * Store a future year in a variable.
let futureYear = 2030
//  * Calculate your 2 possible ages for that year based on the stored values.
let ageMin = futureYear - birthYear
let ageMax = 40
//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
console.log(`I will be either ${ageMin} or ${ageMax} in ${futureYear}`)


// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
let currentAge = 30
//  * Store a maximum age in a constant variable.
const maxAge = 34
//  * Store an estimated snack amount per day (as a number).
let dailySnackAmount = 3
let year = 365 
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
let snackNumber = dailySnackAmount * year 

//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
console.log(` I will need ${snackNumber} to last you until the age of ${maxAge}`);

// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
let circleRadius = 3
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
let circEquation ='2πr=2·π·3.14≈19.7292'
let circumferenceResult = 19.73
console.log(`The circumference is ${circumferenceResult}`);
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
let circArea = 'πr2=π·3.142≈30.97485'
let areaOfCircle = 30.97
console.log(`The area is ${areaOfCircle}`);

//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
let tempInCelsius = '6°C'
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
console.log(`${tempInCelsius} is 44°F.`);
//  * Now store a fahrenheit temperature into a variable.
let tempInFahrenheit = '60°F'
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."
console.log(`${tempInFahrenheit} is 15°C.`);


// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
let aliceGrade = 85
//  * Store Bob's grade on a test to a variable
let bobGrade = 79
//  * Store Cam's grade on a test to a variable
let camGrade = 100
//  * Find the average grade of all students
let averageGrade = '(85 +(79 + 100)) / 3 = 88)'
//  * Store Dee's grade on a test to a variable
let DeeGrade = 75
//  * Find the average grade of all students
let overallAverageGrade = '(85 + ((79 + 75) + 100)) / 4 = 84'
//  * Print out if Dee's grade is higher than the class average

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
a = 263
console.log(a);

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

x = 1
y = 2
bob = 12
Alice = 24

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
//  alice + x = y * (bob + x);


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
numberOfCats = 35
numberOfDogs = 65
console.log(`The daycare consists of ${numberOfDogs} percent dogs and ${numberOfCats} percent cats.`)


// ## Problem Nine

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.  
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.

function leapYear (year) {
    if (year % 100 === 0)
     return true;
    else if (year % 400 === 0)
     return false;
    else
     return year % 4 === 0;
  }
 console.log(leapYear);

// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
//     ```js
    let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3)
//     ```
      // prediction: console.log(num3) will print 10
      // output: 10

// b. 
//     ```js
    let str = 'jel' 
    str += 'lo'
    console.log(str)
//     ```
       // prediction: console.log(str)will print 'jello'
       // output: jello
// c. 
//     ```js
    let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    console.log(typeof(sentence))
//     ```
      // prediction: console.log(typeof(sentence)) will print string 'my favorite number is 42'
      // output: string 


