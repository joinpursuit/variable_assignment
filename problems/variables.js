// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
//const birthYear = 1975
//console.log(birthYear)
//  * Store a future year in a variable.
//let futureYear = 2020
//  * Calculate your 2 possible ages for that year based on the stored values.
//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.

//console.log(futureYear - birthYear)
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
//let ageMax = (futureYear - birthYear)
//console.log(ageMax)
//let ageMin = ageMax - 1
//console.log(ageMin)
//console.log("I will be either" + " " + ageMin + " " + "or" + " " + ageMax + " " + "in" + " " + futureYear)

// ## Problem Two
// Snack Supply Calculator:
//  * Store your current age in a variable.
// let currentAge = 45
//  * Store a maximum age in a constant variable.
// const maxAge = 45
//  * Store an estimated snack amount per day (as a number).
//  let snack = 1
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
// let snackNumber = ((currentAge-maxAge) * snack * 365)

//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
//  console.log("You will need" + " " + snackNumber + " " + "to last you until the age of" + " " + maxAge + ".") 

// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
// let radius = 6

//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
// circumference = 2PI * radius
// console.log(Math.PI)
// console.log((2 * Math.PI) * radius)
// let circumferenceResult = ((2 * 3.141592653589793) * radius)
// console.log("The circumference is" + " " + circumferenceResult)

//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

// area=PI r**2
// let areaOfCircle = (3.141592653589793) * (radius**2)
// console.log("The area is" + " " + areaOfCircle)


// ## Problem Four
// Temperature Converter:
//  * Store a celsius temperature into a variable.
// let tempInCelsius = 1

//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
// (celsius * (9/5)+32)=fahrenheit
// let tempInFahrenheit = (tempInCelsius * (9/5) + 32)
// console.log(tempInCelsius + "°C" + " " + "is" + " " + tempInFahrenheit + "°F")

//  * Now store a fahrenheit temperature into a variable.
// let tempInFahrenheit = 34
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."
// celsius = ((5/9)*(fahrenheit-32))
// let tempInCelsius = (Math.round((5/9) * (tempInFahrenheit - 32)))
// console.log(tempInFahrenheit + " " + "°F" + " " + "is" + " " + tempInCelsius + " " + "°C" )


// ## Problem Five
// Grades Calculator:
//  * Store Alices's grade on a test to a variable
// let alicesGrade = 80

//  * Store Bob's grade on a test to a variable
// let bobsGrade = 65

//  * Store Cam's grade on a test to a variable
// let camsGrade = 99

//  * Find the average grade of all students
// let allGrades = (alicesGrade + bobsGrade + camsGrade)
// console.log(allGrades + " " + "is the total of all grades.")
// let averageGrade = Math.round((alicesGrade + bobsGrade + camsGrade)/3) 
// let averageGrade = Math.round(allGrades/3)
// console.log(averageGrade + " " + "is the average grade.")

//  * Store Dee's grade on a test to a variable
// let deesGrade = 85

//  * Find the average grade of all students
// let classAverage = Math.round((deesGrade+allGrades)/4)
// console.log(classAverage + " " + "is the class average.")

//  * Print out if Dee's grade is higher than the class average
// console.log(deesGrade + " " + "is Dee's grade which is higher than the class average.")

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
//console.log(123%5)


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
// console.log((12 + 3) * 2 - 3) I saw the hint after solving
//console.log(2 * (12 + 3) - 3)
// let x = 4
// let y = 3 
// let bobsAge = 12
// console.log((bobsAge + x) * y - x) I saw the hint after solving
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
// alice = y * (bob + x) - x
// console.log(3 * (12 + 1) - 1)

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
// P% = 20/80
console.log((20/80) * 100)
let dogs = (60/80) * 100
let cats = (20/80* 100)
console.log(`The percentage of dogs in the daycare are ${dogs}% and the percentage of cats are ${cats}%.`)


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


