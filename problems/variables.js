// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
const myBirthday = 1990
//  * Store a future year in a variable.
let futureYear = 2022
//  * Calculate your 2 possible ages for that year based on the stored values.

//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
let ageMin = (futureYear - myBirthday)
let ageMax = ((futureYear - myBirthday) + 1)

console.log("I will be either " +  ageMin + " or " + ageMax)

// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
const myAge = 30
//  * Store a maximum age in a constant variable.
let maxAge = 100
//  * Store an estimated snack amount per day (as a number).
let snackNumber = 3
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
console.log(((maxAge - myAge) * 365 ) * snackNumber)
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
console.log(( "You will need " + ((maxAge - myAge) * 365 ) * snackNumber) + " to last me until the age of " + maxAge)

// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
let radius = 27
let pI = 3.141519 
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
circumferenceResult = ((2 * pI ) * radius) 
console.log( "The circumference is " + circumferenceResult )
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
let areaOfCircle = (pI * radius^2)

console.log( "The area is " + areaOfCircle ) 
 

//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
let tempInCelsius = 1.7

//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".

let tempInFarenheit = (( 9/5 * tempInCelsius ) + 32)
console.log( tempInCelsius + "°C" + " is " + tempInFarenheit + "°F" )

//  * Now store a fahrenheit temperature into a variable.
let tempInFahrenheit = 77

//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."
tempInCelsius = ((tempInFarenheit - 32) * 5/9 )
console.log(tempInFarenheit + "°F" + " is " + tempInCelsius + "°C" )

// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
let aliceTestGrade = 87

//  * Store Bob's grade on a test to a variable
let bobTestGrade = 93

//  * Store Cam's grade on a test to a variable
let camTestGrade = 65
//  * Find the average grade of all students
let studentAverage = ((aliceTestGrade + bobTestGrade + camTestGrade)/ 3 )
console.log("Class student average " + studentAverage) 
//  * Store Dee's grade on a test to a variable
let deeTestGrade = 75
//  * Find the average grade of all students
studentAverage = ((aliceTestGrade + bobTestGrade + camTestGrade + deeTestGrade)/4)

console.log("Class average with Dee added is " + studentAverage)
//  * Print out if Dee's grade is higher than the class average
if ( deeTestGrade > studentAverage)
 {console.log("At " + deeTestGrade + "Dee’s test grade is higher than the class average of" + studentAverage )
 console.log("Awesome Dee!" )
    } 
    else {
      console.log("At "+ deeTestGrade + " Dee’s test grade is lower than the class average of " + studentAverage)
      console.log("You need more improvement Dee " )
    }

// ## Problem Six

// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
let a = 123

// * a = 123
// * Output:
console.log(a)
console.log("The last digit of 123 is " + a%10)
// * 3

// Hint:
// Use the remainder % operator.


// ## Problem Seven

// Alice's Age
// * x years from now Alice will be y times older than her brother Bob. Bob is 12 years old. How old is Alice?
// * Example 1
// * Input: 
// * x = 3
let x = 3

// * y = 2
let y = 2

// * bob = 12
let bob = 12

// * Expected values:
let alice = (((bob+x)*y)-x)
console.log(alice)
 
// * alice = 27

// 
// * Example 2
// * Input: 
// * x = 1
 x = 1
// * y = 3
 y = 3
// * bob = 12
bob = 12

// * Expected values: 
alice = (((bob+x)*y)-x)
console.log(alice)
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
let numberOfCats = 20
// * numberOfDogs = 60
let numberOfDogs = 60


// * Output:
// * 25% of the daycare animals are cats
x = .25
let percentOfCats = (x * numberOfCats)
console.log( "25% of the daycare animals cats is " + percentOfCats)

// * 75% of the daycare animals are dogs
y = .75
let percentOfDogs = (y * numberOfDogs)
console.log( "75% of the daycare animals dogs is " + percentOfDogs )

// ## Problem Nine

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.  
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.

//if else
// ## Problem Ten: Predict the output
let currentYearDays = 366
if (currentYearDays <=365){
    console.log("not a leap year")
}
else{ console.log ("It is a leap year")}

// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
//     ```js
//     let num1 = 2
let num1 = 2

//     let num2 = 5
let num2 = 5
//     let num3 = num1 * num2
let num3 = (num1 * num2)
//     console.log(num3)
console.log(num3)

// b. 
//     ```js
//     let str = 'jel' 
let str = "jel"
//     str += 'lo'
    str += "lo"
//     console.log(str)
console.log(str)

//     ```

// c. 
//     ```js
//     let string =  'My favorite number is ';
//     let number = 42
//     let sentence = string + number
//     console.log(typeof(sentence))
let number = 42 
let string = "My favorite number is"
let sentence = (string + number)
console.log(typeof "My favorite number is")
//     ```


