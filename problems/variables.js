// // ## Problem One
// console.log("hello" +" "+ "world")


// // Age Calculator:
// //  * Store your birth year in a constant variable.
const year = 1976;
//console.log(year);

// //  * Store a future year in a variable.
let futureyear = 2030;
//console.log(futureyear)

// //  * Calculate your 2 possible ages for that year based on the stored values.
let agemin = futureyear - year;
let agemax = agemin + 1
console.log(` I will be either ${agemin} or ${agemax} in ${futureyear}.`);

// //  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// //  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

// // ## Problem Two

// // Snack Supply Calculator:
// //* Store your current age in a variable.
const age = 43;
// console.log(age);

// //  * Store a maximum age in a constant variable.
const maxAge = 44;
// console.log(maxAge);

// //  * Store an estimated snack amount per day (as a number).
let snackNumber = 2 * 365;
// console.log(snackNumber);

// //  * Calculate how many snacks you would eat total, from your current age until the maximum age.
const total = maxAge * snackNumber;
//console.log(total);

// //  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
 console.log(`You will need ${total} snack maximum to last you until the age of ${maxAge}.`);

// // ## Problem Three

// // Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
// //  * Store a radius into a variable.
let r = 8;
// console.log(r);

// //  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".

let number = Math.PI;
let circumferences = 2*number * r
let circumferenceResult = circumferences.toFixed(2);
console.log(`circumferences: ${circumferenceResult}`);

// //  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
// //  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp
let areaOfCircle = number * r**2;
let areaofcircleResult = areaOfCircle.toFixed(2);
console.log(`area of Circle: ${areaofcircleResult}`);

// // ## Problem Four

// // Temperature Converter:
// //  * Store a celsius temperature into a variable.
const temperatureCelcius= 30;
//Console.log(temperatureCelcius);

// //  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".

let tempinFahrenheit = (1.8 * temperatureCelcius) + 32;
console.log(`tempIncelscius ${temperatureCelcius} °C is tempInFahrenheit ${tempinFahrenheit}°F`);


// //  * Now store a fahrenheit temperature into a variable.
const tempinFah = 120
//console.log(tempinFah)

// //  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."

let tempInCelsius =  (tempinFah - 32) * .5556;
//console.log(tempInCelsius);

console.log(`tempInFarenheit is ${tempinFah} °F is tempInCelcius ${tempInCelsius} °C`);

// // ## Problem Five

// // Grades Calculator:
// //  * Store Alices's grade on a test to a variable
const AlicesGrade = 100;
//console.log(AlicesGrade);
// //  * Store Bob's grade on a test to a variable
const BobsGrade = 87;
//console.log(BobsGrade);
// //  * Store Cam's grade on a test to a variable
const Cams = 79;
//console.log(Cams);
// //  * Find the average grade of all students
let average = (AlicesGrade + BobsGrade + Cams) / 3;
let n = average.toFixed(2);
console.log( `average grade of all Students ${n}`);

// //  * Store Dee's grade on a test to a variable
let deegrade = 65;
//console.log(deegrade)

// //  * Find the average grade of all students
let n2 = (AlicesGrade + BobsGrade + Cams + deegrade) / 4;
console.log(`average grade of all students is ${n2}`);

// //  * Print out if Dee's grade is higher than the class average
let greeting = "deegrade is higher than the class average";
if (deegrade > n2) 
{console.log(greeting)}

// // ## Problem Six
// // Find the last number:
// // * You are given a number a. Print the last digit of a.
let num1 = 2032
console.log( num1 % 10);
// // * Example
// // * Input: 
// // * a = 123
// // * Output:
// // * 3

// // Hint:
// // Use the remainder % operator.


// // ## Problem Seven

// // Alice's Age
let  x = 3;
//console.log(x);
let y = 2;
//console.log(y);
let bob = 12;
//console.log(bob);
//let alice = ;
//console.log(alice);
let AliceResult =  (-x + (y*bob) + (x*y));
console.log(`3 years from now Alice will be 2 times older than her brother Bob. Bob is 12 years old. How old is Alice? Alice is ${AliceResult}`);

// // * x years from now Alice will be y times older than her brother Bob. Bob is 12 years old. How old is Alice?
// // * Example 1
// // * Input: 
// // * x = 3
// // * y = 2
// // * bob = 12
// // * Expected values: 
// // * alice = 27
// // 
// // * Example 2
// // * Input: 
// // * x = 1
// // * y = 3
// // * bob = 12
// // * Expected values: 
// // * alice = 38

// // * Hint:
// // * alice + x = y * (bob + x)
// // * Solve for alice

// // ## Problem Eight

// // * Cat and Dog Percentages
let numberOfCats = 50;
console.log(parseFloat(numberOfCats).toFixed(2)+"% are Cats.");

let numberOfDogs = 25;
console.log(parseFloat(numberOfDogs).toFixed(2)+"% are Dogs.");


// // * An animal daycare consists of `numberOfCats` cats and `numberOfDogs` dogs.
// // * Print the percentage of dogs in the daycare followed by the percentage of cats in the class. The percentage should be printed rounded down to the nearest integer. For example 33.333333333333 will be printed as 33.
// // * Example 
// // * Input
// // * numberOfCats = 20  
// // * numberOfDogs = 60
// // * Output:
// // * 25% of the daycare animals are cats
// // * 75% of the daycare animals are dogs

// // ## Problem Nine

// // * Leap Year Calculator
// // * Given a year, determine if it's a leap year.  
// // * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// // * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// // * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// // * The above rule is valid except that every 100 years special rules apply. 
// // * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// // * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.
let greeting2 = "Leap year !"
let year1 = 2012
console.log(`Year: ${year1}`)
if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
{console.log(greeting2)}


// // ## Problem Ten: Predict the output

// // For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// // a. 
// //     ```js
// //     let num1 = 2
// //     let num2 = 5
// //     let num3 = num1 * num2
// //     console.log(num3) // syntax error
// //     ```

// // b. 
// //     ```js
// //     let str = 'jel' 
// //     str += 'lo'
// //     console.log(str)// jello
// //     ```
//let str = 'jel' 
//str += 'lo'
//console.log(str)
// // c. 
// //     ```js
//let string =  'My favorite number is ';
//let number = 42
//let sentence = string + number
//console.log(typeof(sentence)) syntaxError/ //
// //     ```


