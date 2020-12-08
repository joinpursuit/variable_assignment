// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
const birthYear = 1989
//  * Store a future year in a variable.
let futureYear  = 2035
//  * Calculate your 2 possible ages for that year based on the stored values.
let age  = futureYear - birthYear

//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
console.log('I will be either ' + age + ' or ' + (age - 1))
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
age = futureYear - birthYear
//  * Store a maximum age in a constant variable.
const maxAge = 60
//  * Store an estimated snack amount per day (as a number).
let nmbrPerDay = 5
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
let totalRequired = (nmbrPerDay * 365) * (maxAge - age)
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
console.log("I will need " + totalRequired + " number of snacks to last me until the age of " + maxAge)
// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
let radius = 6
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
//Circumference = 2 Pi radius
let circumferenceResult = Math.PI *2 * radius
console.log("The calculated circumference of circle is "+ circumferenceResult)
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
let areaOfCircle = Math.PI * radius * radius
console.log("The calculated area of circle is "+ areaOfCircle)
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
let celsius = 45
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
//********* */
console.log("The "+celsius + "°C temerature is " + (celsius * 9 / 5) + 32 + "°F")
//  * Now store a fahrenheit temperature into a variable.
let fahrenheit = 80
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."
console.log("The "+ fahrenheit + "°F temerature is " + (fahrenheit - 32) * 5 / 9 + "°C")

// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
let aliceGrades = 80
//  * Store Bob's grade on a test to a variable
let bobGrades = 85
//  * Store Cam's grade on a test to a variable
let camGrades = 75
//  * Find the average grade of all students
console.log("The average grade of 3 students is "+ (aliceGrades + bobGrades + camGrades)/3 )
//  * Store Dee's grade on a test to a variable
let deeGrades = 90
//  * Find the average grade of all students
averageGradeOfAll = (aliceGrades + bobGrades + camGrades +deeGrades)/4
//  * Print out if Dee's grade is higher than the class average
console.log("The average grade of 4 students is "+ averageGradeOfAll )
console.log("Dee's grade is "+deeGrades+" which is higher than the class average.")


// ## Problem Six

// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
// * a = 123
// * Output:
// * 3
let input =1213
console.log("The last digit of "+input+" is "+input%10)

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

//number of years from now
let x = 3
//Alice will be ytimes older than Bob
let y = 2
//Bob's age
let bob = 12
//Expression
let alice  = y * (bob + x) - x
console.log(alice)
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
let totalNumberOfAnimals = numberOfCats + numberOfDogs
let percentageOfCats = (numberOfCats/totalNumberOfAnimals)*100
console.log(percentageOfCats+"% of the daycare animals are cats")
let percentageOfDogs = (numberOfDogs/totalNumberOfAnimals)*100
console.log(percentageOfDogs+"%  of the daycare animals are dogs")
// * 25% of the daycare animals are cats
// * 75% of the daycare animals are dogs

// ## Problem Nine

// * Leap Year Calculator
// * Given a year, determine if it's a leap year. 
let givenYear = 2018
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
if(givenYear % 4 === 0 || (givenYear % 100 === 0 && givenYear % 400 === 0)){
    console.log(givenYear+" is a leap year")
}else{
    console.log(givenYear+" is not a leap year")
}
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.


// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
//     ```js
     let num1 = 2
     let num2 = 5
     let num3 = num1 * num2
     console.log(num3) // 10
//     ```

// b. 
//     ```js
     let str = 'jel' 
     str += 'lo'
     console.log(str) // 'jello'
//     ```

// c. 
//     ```js
     let string =  'My favorite number is ';
     let number = 42
     let sentence = string + number
     console.log(typeof(sentence))   // string
//     ```


