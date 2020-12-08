// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
const birthYear = 1997
//  * Store a future year in a variable.
let futureYear = 2077
//  * Calculate your 2 possible ages for that year based on the stored values.
//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
ageMax = futureYear - birthYear;
ageMin = ageMax - 1;
console.log("I will be either " + ageMin + " or " + ageMax + " in " + futureYear + ".");

// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
let age = 23
//  * Store a maximum age in a constant variable.
const maxAge = 69
//  * Store an estimated snack amount per day (as a number).
let snackAmount = 2
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
snackNumber = (snackAmount * 365) * (maxAge - age);
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
console.log("You will need " + snackNumber + " snacks to last you until the age of " + maxAge + ".");

// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
let radius = 5
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
circumferenceResult = radius * 2
console.log("The circumference is " + circumferenceResult + ".")
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
areaOfCircle = circumferenceResult * Math.PI //Honestly it's interesting to see some Python elements in JS. It makes things easier :)
console.log("The area is " + areaOfCircle + ".")
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
let tempInCelsius = 56
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
tempinFahrenheit = (tempInCelsius * 9/5) + 32
console.log(tempInCelsius + "°C is " + tempinFahrenheit + "°F")
//  * Now store a fahrenheit temperature into a variable.
tempinFahrenheit = 425 //This is how hot you will need to preheat your oven before making apple pie!
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."
tempInCelsius = (tempinFahrenheit * 5/9) - 32
console.log(tempinFahrenheit + "°F is " + tempInCelsius + "°C")


// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
aliceGrade = 42 //Fun fact: The first Alice in Wonderland book has 42 illustrations!
//  * Store Bob's grade on a test to a variable
bobGrade = 85
//  * Store Cam's grade on a test to a variable
camGrade = 92
//  * Find the average grade of all students
averageGrade = (aliceGrade + bobGrade + camGrade) / 3
//  * Store Dee's grade on a test to a variable
deeGrade = 95
//  * Find the average grade of all students
averageGrade = (aliceGrade + bobGrade + camGrade + deeGrade) / 4
//  * Print out if Dee's grade is higher than the class average
console.log("The average grade is: " + averageGrade)
if (deeGrade > averageGrade){
    console.log("Dee's grade is higher than the average grade!")
} else {
    console.log("The average grade is higher than Dee's grade! Better luck next time Dee!")
}
//Sorry I had to show off for a hot second lol. I've used if/else/elif statements in Python and wanted to incorporate it here.

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

a = 422419240034 //Another fun fact: This is my Nintendo Switch Friend Code. You should add me :)
lastNumber = a % 10
console.log("The full number is: " + a + " and the last number is: " + lastNumber)




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
x = 3
y = 2
bobAge = 12
aliceAge = y * (bobAge + x) - x
console.log("Alice is " + aliceAge + " years old.") 


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

numberOfCats = 70
numberOfDogs = 20
percentageOfCats = (numberOfCats / (numberOfCats + numberOfDogs)) * 100
percentageOfDogs = (numberOfDogs / (numberOfCats + numberOfDogs)) * 100
console.log(percentageOfCats.toFixed(0)  + "% of the daycare animals are cats.")
console.log(percentageOfDogs.toFixed(0)  + "% of the daycare animals are dogs.")
//For some reason using other numbers made the percents a float value, so I had to improvise.

// ## Problem Nine

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.  
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.
year = 2000
if (year % 4 === 0 && year % 400 === 0){
    console.log("It's a leap year!")
} else if (year % 4 === 0 && year % 100 !== 0){
    console.log("It's a leap year!")
} else if (year % 100 === 0 && year % 400 !== 0){
    console.log("It is not a leap year.")
} else{
    console.log("It is not a leap year.")
} //I honestly don't know how to answer this question without using if/else if/else statements :sob: 

// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
//     ```js
//     let num1 = 2
//     let num2 = 5
//     let num3 = num1 * num2
//     console.log(num3) //10 //I was correct since 5 * 2 = 10
//     ```

// b. 
//     ```js
//     let str = 'jel' 
//     str += 'lo'
//     console.log(str) //jello //This one was tricky, had to double check in terminal and I was right.
//     ```

// c. 
//     ```js
//     let string =  'My favorite number is ';
//     let number = 42
//     let sentence = string + number
//     console.log(typeof(sentence)) //string //My prediction was true. You had me bamboozled.
//     ```


