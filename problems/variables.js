// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
const birthYear = 1995; 

//  * Store a future year in a variable.
let futureYear = 2030; 
//  * Calculate your 2 possible ages for that year based on the stored values.
let ageMin = futureYear - birthYear; 
let ageMax = ageMin + 1 ;


//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
console.log("I will be either"+ " " + ageMin + " " +"or"+ " " + ageMax+ " " +"in" + " " + futureYear); 


// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
//  * Store a maximum age in a constant variable.
//  * Store an estimated snack amount per day (as a number).
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

let currentAge = 25; 
const maxAge = 100;
let dailySnackAmount = 3;   // 3 times per day
let yearlySnackAmount = dailySnackAmount * 365; 
let totalsnacks = yearlySnackAmount * (maxAge-currentAge);
console.log("You will need" + " "+ totalsnacks + " "+ "to last until" + " " + maxAge);


// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

let radius = 3 ;
let diameter = radius * 2;
let circumferenceResult = Math.PI * diameter;
console.log("The circumference is" + " " + circumferenceResult); 
let areaOfCircle = Math.PI * radius^2;
console.log("The area is" + " " + areaOfCircle);


// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
//  * Now store a fahrenheit temperature into a variable.
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."

let tempInCelsius = 30; // Celsius 
// F = C * 1.8 ) + 32 
let tempInFahrenheit = (tempInCelsius * 1.8) + 32 ;
console.log(tempInCelsius + " " + "°C" + " " + "is" + " " + tempInFahrenheit +"°F" )


tempInFahrenheit = 70;  // No let since tempInFahrenheit has already been declared 
// C = (F - 32) / 1.8 
tempInCelsius = ( tempInFahrenheit - 32) / 1.8 ; 
console.log(tempInFahrenheit + " "+ "°F" + " " + "is" + " " + tempInCelsius + " " + "°C.")



// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
//  * Store Bob's grade on a test to a variable
//  * Store Cam's grade on a test to a variable
//  * Find the average grade of all students
//  * Store Dee's grade on a test to a variable
//  * Find the average grade of all students
//  * Print out if Dee's grade is higher than the class average

let aliceGrade = 75;
let bobGrade = 85; 
let camGrade = 95; 
let averageGrade = (aliceGrade + bobGrade + camGrade) / 3 ; 

let deeGrade = 80; 

let totalAverageGrade = (deeGrade + aliceGrade + camGrade + bobGrade) / 4 ; 

isItHigher = deeGrade > totalAverageGrade 

console.log("is Dee's grade higher than the class average?"+ " " + isItHigher);
//print a boolea saying dees grade is higher than the class average


// ## Problem Six

// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
// * a = 123
// * Output:
// * 3

let a = 586; // 
let b = a % 10;  // 
console.log("the last digit of" + " " + a + " " + "is" + " " + b); 


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

let alice ;
let x = 3
let y = 2  
 b = 12  // b has already been declared 

 // alice + x = y * (bob + x) 
// a + x = y * (b +x)               Subing 'a' for Alice and 'b' for Bob 
// a = (y * ( b+x )) - x            Isolating the desired variable 
 
alice = (y * ( b + x )) - x ; 
console.log( " Alice is now " + " " + alice ); 


// * Example 2
// * Input: 
// * x = 1
// * y = 3
// * bob = 12
// * Expected values: 
// * alice = 38


 x = 1    // 'a' and 'b' have already been declared   
 y = 3  
 //b = 12   b is the sae as example 1  

 alice = (y * ( b + x )) - x ; 
 console.log( " Alice is now " + " " + alice );


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


// Math.floor(1.6); 

let numberOfCats = 20 ; 
let numberOfDogs = 60 ;
let totalAnimals = (numberOfCats + numberOfDogs) 
let percentCats = ( numberOfCats / totalAnimals ) * 100
let percentDogs = ( numberOfDogs / totalAnimals) *100 
console.log( (Math.floor (percentCats) + "%" + " " + " of the daycare animals are cats"))
console.log( (Math.floor (percentDogs) + "%" + " " + " of the daycare animals are dogs"))



// ## Problem Nine

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.  
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.

//  if year % 4 === 0 // common year 


//  if year % 100 != 0 // leap year 

// year % 400 != 0 common year 
// 

// NOT A LEAP YEAR //
let year = 1900; 

if (( year % 100 === 0) && (year % 400 === 0 )) {
    console.log('LEAP YEAR')
}
else { 
    console.log( 'Not a leap year')
};

// LEAP YEAR// 
year = 2000; 

if (( year % 100 === 0) && (year % 400 === 0 )) {
    console.log('LEAP YEAR')
}
else { 
    console.log( 'Not a leap year')
};



// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next to `console.log` 
// like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
//     ```js
//     let num1 = 2
//     let num2 = 5
//     let num3 = num1 * num2
//     console.log(num3) // 10  
//     ```

let num1 = 2
let num2 = 5 
let num3 = num1 * num2
console.log(num3)

// b. 
//     ```js
//     let str = 'jel' 
//     str += 'lo'  //  str = str + 'lo'     add then populate new value 
//     console.log(str) // 'jello'
//     ```
let str = 'jel' 
str += 'lo' 
console.log(str) 

// c. 
//     ```js
//     let string =  'My favorite number is ';
//     let number = 42
//     let sentence = string + number
//     console.log(typeof(sentence)) // string
//     ```

let string =  'My favorite number is ';
let number = 42
let sentence = string + number
console.log(typeof(sentence)) // asking for  TYPEOF  which would evaluate sentence to just its type 