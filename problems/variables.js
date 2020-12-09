// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
const myBirthday = 1984
//  * Store a future year in a variable.
let futureYear = 2021
//  * Calculate your 2 possible ages for that year based on the stored values.
//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
  let ageMin = (futureYear - myBirthday)
  let ageMax = ((futureYear - myBirthday) + 1)

  console.log("I will be either " + ageMin +" or " + ageMax)
  
// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
let currentAge = 36
//  * Store a maximum age in a constant variable.
const maxAge = 100
//  * Store an estimated snack amount per day (as a number).
let snacksPerDay = 3
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
console.log(((maxAge - currentAge)* 365) * snacksPerDay)
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
console.log(("You will need " + ((maxAge - currentAge)* 365) * snacksPerDay) + " to last you until the age of " + maxAge)

// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
let radius = 2
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
circumferenceResult = ((2 * 3.141592) * radius)
console.log("The circumference is " + circumferenceResult)
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".

//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
let tempInCelsius = 32 

//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
let tempInFahrenheit = ((tempInCelsius*9/5)+32)
console.log(tempInCelsius + " °C is " + tempInFahrenheit + " °F")

//  * Now store a fahrenheit temperature into a variable.
 tempInFahrenheit = 67

//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."
tempInCelsius = ((tempInFahrenheit - 32) * 5/9)
console.log(tempInFahrenheit + " °F is " + tempInCelsius + " C° ")
// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
let aliceTestGrade = 95
//  * Store Bob's grade on a test to a variable
let bobTestGrade = 94
//  * Store Cam's grade on a test to a variable
let camTestGrade = 66
//  * Find the average grade of all students
let avgClassGrade = ((aliceTestGrade + bobTestGrade + camTestGrade)/3)
console.log("Average class grade is " + avgClassGrade)
//  * Store Dee's grade on a test to a variable
let deeTestGrade = 45
//  * Find the average grade of all students
avgClassGrade = ((aliceTestGrade + bobTestGrade + camTestGrade + deeTestGrade)/4)
console.log("Average class grade is with Dee's grade now included is " + avgClassGrade)
//  * Print out if Dee's grade is higher than the class average
if (deeTestGrade > avgClassGrade) {
console.log("At " + deeTestGrade + " Dee's test grade is higher than the class average of " + avgClassGrade)
console.log("Good job Dee!")
} else {
  console.log("At "+ deeTestGrade + " Dee's test grade is lower than the class average of " + avgClassGrade)
  console.log("Time to hit the books again Dee")
}


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

let a = 65434565434339
console.log("A is " + a)
console.log("The last digit  of A is " + a%10) 
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
let x = 3
let y = 2
let bob = 12
let alice = (((bob+x)*y)-x)
console.log("Alice is " + alice + " old")

// * Example 2
// * Input: 
// * x = 1
// * y = 3
// * bob = 12
// * Expected values: 
// * alice = 38

 x = 1
 y = 3
 bob = 12
 alice = (((bob+x)*y)-x)
console.log("Alice is " + alice + " old")

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
let percentageOfCatsInDaycare = (.25 * numberOfCats)
let percentageOfDogsInDaycare = (.75 * numberOfDogs)

// * 25% of the daycare animals are cats

// * 75% of the daycare animals are dogs

let percentageOfCats = numberOfCats / (numberOfCats + numberOfDogs) * 100
let percentageOfDogs = numberOfDogs / (numberOfCats + numberOfDogs) * 100
console.log (percentageOfCats + "% of the daycare animals are cats")
console.log (percentageOfDogs + "% of the daycare animals are dogs")

// ## Problem Nine

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.  
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.
let currentYearDays = 366
if (currentYearDays <=365){
  console.log("Looks like its not a leap year")
  }
  else {
    console.log("Looks like its a leap year!")
}


// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
//     ```js
//     let num1 = 2
//     let num2 = 5
//     let num3 = num1 * num2
//     console.log(num3)
//     ```
//  Output is 10
// b. 
//     ```js
//     let str = 'jel' 
//     str += 'lo'
//     console.log(str)
//  Output is jello
//     ```

// c. 
//     ```js
//     let string =  'My favorite number is ';
//     let number = 42
//     let sentence = string + number
//     console.log(typeof(sentence))
//     ```
// Output is string 
