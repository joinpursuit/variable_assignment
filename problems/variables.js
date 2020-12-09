// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
//  * Store a future year in a variable.
//  * Calculate your 2 possible ages for that year based on the stored values.
//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

const birthYear = 1988;
let futureYear = 2021;
let ageMin = 32;
let ageMax = 33;
let string = "I will be either ";
let string2 = " or ";
let string3 = " in ";
let sentence = string + ageMin + string2 + ageMax + string3 + futureYear;
console.log(sentence);
//I will be either 32 or 33 in 2021

// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
//  * Store a maximum age in a constant variable.
//  * Store an estimated snack amount per day (as a number).
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

let myAge = 32;
const maxAge = 100;
let numPerDay = 2;
let totalNeeded = (numPerDay * 365) * (maxAge - myAge);
console.log(totalNeeded);
// 49640

let snackNumber = 49640;
let string = "You will need ";
let string2 = " snacks to last you until the age of ";
let sentence = string + snackNumber + string2 + maxAge;
console.log(sentence);
//You will need 49640 snacks to last you until the age of 100


// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

let radius = 3;
let circumference = Math.PI * 2*radius;
console.log = ("The circumference is " + circumference);
//The circumference is 18.84955592153876

let area = Math.PI * radius * radius;
console.log("The area is " + area);
//The area is 28.274333882308138

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
//  * Now store a fahrenheit temperature into a variable.
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."

let tempInCelsius = 30;
let tempInFahrenheit = (tempInCelsius * 9)/5 + 32;
let string1 = "°C is ";
let string2 = "°F.";
let sentence = tempInCelsius + string1 + tempInFahrenheit + string2;
console.log(sentence);
//30°C is 86°F.

let tempInFahrenheit = 20;
let tempInCelsius = ((tempInFahrenheit-32)*5)/9;
let string1 = "°F is ";
let string2 = "°C.";
let message = tempInFahrenheit + string1 + tempInCelsius + string2;
console.log(message);
// 20°F is -6.666666666666667°C.


// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
//  * Store Bob's grade on a test to a variable
//  * Store Cam's grade on a test to a variable
//  * Find the average grade of all students
//  * Store Dee's grade on a test to a variable
//  * Find the average grade of all students
//  * Print out if Dee's grade is higher than the class average

let aliceGrade = 70;
let bobGrade = 80;
let camGrade = 85;
let averageGrade = (aliceGrade+bobGrade+camGrade)/3;
console.log(averageGrade);
// 78.33333333333333

let deeGrade = 90;
let allAverage = (averageGrade + deeGrade)/2;
console.log (allAverage);
// 84.16666666666666

let message = ("Dee's grade is higher than the class average");
console.log(message);git
// Dee's grade is higher than the class average


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

let a = 12345678;
let a = 12345678;
lastNumber = a % 10;
console.log(lastNumber);
//8


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

let numberOfCats = 20
let numberOfDogs = 60




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
//    ```

```js
// 10
```

// b. 
//     ```js
//     let str = 'jel' 
//     str += 'lo'
//     console.log(str)
//     ```

```js
// jello
```

// c. 
//     ```js
//     let string =  'My favorite number is ';
//     let number = 42
//     let sentence = string + number
//     console.log(typeof(sentence))
//     ```

```js
// String
```


