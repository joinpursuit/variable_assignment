// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
const birth = 1993
//  * Store a future year in a variable.
let future = 2017
//  * Calculate your 2 possible ages for that year based on the stored values.
let age1 = future - birth;
let age2 = age1 - 1;

//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
console.log("I will be either" + " " + age1 + " " + "or " + age2 + " " + "in " + future)
// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
let myAge = 26;
//  * Store a maximum age in a constant variable.
let maxAge = 59
//  * Store an estimated snack amount per day (as a number).
snack = 4
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
total = (snack * 365) * (maxAge - myAge)
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
console.log("You will need " + "" + total + " snacks to last you until the age of " + maxAge )
// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
let r = 10;
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
pi = 3.141592
C = 2 * pi * r;
console.log("The circumference is " + C + "cm");
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
Area = pi * r**2
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
let tempC = 28
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
let tempF = tempC * 1.8 + 32
console.log(tempC + "°C is " + tempF + "°F")
//  * Now store a fahrenheit temperature into a variable.
tempF = 86
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."
tempC = (tempF - 32) / 1.8
console.log(tempF + "°F is " + tempC + "°C")
// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
let testAlice = 87
//  * Store Bob's grade on a test to a variable
let testBob = 90
//  * Store Cam's grade on a test to a variable
let testCam = 77
//  * Find the average grade of all students
let testAvg = (testAlice + testBob + testCam) / 3
console.log("first average: " + testAvg)
//  * Store Dee's grade on a test to a variable
testDee = 94
//  * Find the average grade of all students
let testAvg2 = .25 * (testAvg * 3)
console.log("The test average for the class is " + testAvg2 )
//  * Print out if Dee's grade is higher than the class average
console.log("Dee's grade of " + testDee + " is higher than the class average of " + testAvg2)
// ## Problem Six

// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
// * a = 123
// * Output:
// * 3
let a = 188
console.log("a = " + a + " Output:" + a % 9 )
// Hint:
// Use the remainder % operator.


// ## Problem Seven

// Alice's Age
// * x years from now Alice will be y times older than her brother Bob. Bob is 12 years old. How old is Alice?
let ageBob = 12
let x = 7
let y = 3
let ageAlice = y * ageBob - x
console.log("Alice is " + ageAlice)
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
numberOfCats = 8 
numberOfDogs = 6
totalPets = numberOfCats + numberOfDogs
// * Print the percentage of dogs in the daycare followed by the percentage of cats in the class. The percentage should be printed rounded down to the nearest integer. For example 33.333333333333 will be printed as 33.
catPercent = (numberOfCats/totalPets) * 100
dogPercent = (numberOfDogs/totalPets) * 100
console.log(Math.round(catPercent) + "% of the daycare animals are cats")
console.log(Math.round(dogPercent) + "% of the daycare animals are dogs")
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
let year = 2012
let eqn = (year % 4 === 0) && (year % 100 !==0) || (year % 400 === 0);
//let eqn = (year % 4 === 0) && (year % 400 === 0) || (year % 100 !==0); Evals don't make sense
if (eqn === true) {
    console.log("Leap year!");
    } else {
    console.log("Not a leap year!")
    }
//console.log(eqn)
// let year = 1900
// let year = 2000
// year1 &&
// leapYear = year % 4 === 0 
// year % 400 === 0 
// year % 100 !== 0
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.


// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
    //```js
    let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3) // 10
    //```

//b. 
    //```js
    let str = 'jel' 
    str += 'lo'
    console.log(str) // jello
   // ```

//c. 
   // ```js
    let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    console.log(typeof(sentence)) // NaN
   // ```


