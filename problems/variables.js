// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
//  * Store a future year in a variable.
//  * Calculate your 2 possible ages for that year based on the stored values.
//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

const myBirthYear = 1989;
let futureYear = 2030;
myFutureAgeMin = futureYear - myBirthYear;
myFutureAgeMax = myFutureAgeMin + 1
//console.log(myFutureAgeMin);
//console.log(myFutureAgeMax);
console.log(`I will be either ${myFutureAgeMin} or ${myFutureAgeMax} in ${futureYear}`);


// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
//  * Store a maximum age in a constant variable.
//  * Store an estimated snack amount per day (as a number).
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

let myAge = 20;
const maxAge = 70;
const estSnackAmountPerDay = 3;
let snackNumber = (maxAge - myAge) * 365 * estSnackAmountPerDay;
let sentence1 = "I will need " + snackNumber + " to last me untill the age of " + maxAge + ".";
console.log(sentence1);

// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm
//  * Store a radius into a variable.
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

const radius = 4;
let pi = 3.141592;
let circumferenceResult = 2 * radius * pi;
console.log("The circumference is " + circumferenceResult + ".");
let areaOfCircle = pi * radius ** 2;
console.log("The area is " + areaOfCircle + ".");

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
//  * Now store a fahrenheit temperature into a variable.
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."

let tempInCelsius = 4;
let tempInFahrenheit = tempInCelsius * 1.8 + 32;
console.log(tempInCelsius + "°C" + " is " + tempInFahrenheit + "°F" + ".");

let newStoreTempInFahrenheit = 39.2;
newStoreTempInCelsius = newStoreTempInFahrenheit / 1.8 - 32;
console.log(
  newStoreTempInFahrenheit + "°F" + " is " + newStoreTempInCelsius + "°C" + "."
);

// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
//  * Store Bob's grade on a test to a variable
//  * Store Cam's grade on a test to a variable
//  * Find the average grade of all students
//  * Store Dee's grade on a test to a variable
//  * Find the average grade of all students
//  * Print out if Dee's grade is higher than the class average

let numA = 99;
numB = 98;
numC = 89;
sum = numA + numB + numC;
let average = sum / 3;
console.log(average);

let numD = 70;
sum = numA + numB + numC + numD;
let classAverage = sum / 4;
console.log("Dee's grade is higher than " + classAverage);
if( numD > classAverage) {
console.log("Dee's grade is higher than " + classAverage);
};
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

let a = 456;
console.log(a % 45);

// ## Problem Seven

// Alice's Age
// * x years from now Alice will be y times older than her brother Bob. 
//Bob is 12 years old. How old is Alice?
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

let xYFromNow = 3;
yTimesOlder = 2;
bobAge = 12;
aliceAge = yTimesOlder * (bobAge + xYFromNow) - xYFromNow ;

console.log(aliceAge);

//Example 2
let x = 1;
y = 3;
bob = 12;
aliceAge2 = y*(bob + x)- x;
console.log(aliceAge2);


// ## Problem Eight

// * Cat and Dog Percentages
// * An animal daycare consists of `numberOfCats` cats and `numberOfDogs` dogs.
// * Print the percentage of dogs in the daycare followed by the percentage of cats in the class. 
//The percentage should be printed rounded down to the nearest integer. 
//For example 33.333333333333 will be printed as 33.

// * Example
// * Input
// * numberOfCats = 20
// * numberOfDogs = 60
// * Output:
// * 25% of the daycare animals are cats
// * 75% of the daycare animals are dogs

let numberOfCats = 20;
numberOfDogs = 60;
sum = numberOfCats + numberOfDogs;
console.log(sum);
catsPercentage = Math.floor(20/sum *100); 
dogsPercentage = Math.floor(60/sum*100); 
console.log(catsPercentage + "%" + ' of the daycare animals are cats');
console.log(dogsPercentage + "%" + ' of the daycare animals are dogs');

// ## Problem Nine

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days.
// * The extra day is added in February, which has 29 days instead of the normal 28 days.
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year.
// * The above rule is valid except that every 100 years special rules apply.
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400.
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" 
//depending on the year you are provided.

let leapYear = 1900;// I am confuesed gain how year 1900 is supposed to be NOT a leap! however, the console.log say Leap Year!
let isLeapYear = leapYear % 4 && (leapYear % 100 && leapYear % 400);
console.log((isLeapYear === 0 && "LeapYear!") || (isLeapYear !== 0 && "Not a leap year!")) ;




// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next to `console.log` 
//like so: `console.log('Cat') //'Cat'` before running the code. 
//Then execute your file and compare with your prediction.

// a.
//     ```js
    let num1 = 2 
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3); //10
    

// b.
//     ```
    let str = 'jel'
    str += 'lo'
    console.log(str); //jello
//     

// c.
//    
    let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    console.log(typeof(sentence)); // string
    
