// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
"use strict"
// let birthYear = 1987;
//  * Store a future year in a variable.
// let future  = 2099;
//  * Calculate your 2 possible ages for that year based on the stored values.
// let age = future - birthYear;
//  console.log('I will be either' + " " + age + " " + 'or'  + (age - 1));



//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
// let age = 33;
//  * Store a maximum age in a constant variable.
// const maxAge = 100;
//  * Store an estimated snack amount per day (as a number).
// let numPerDay = 5;
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
// let totalNeeded = (numPerDay * 365) * (maxAge - age);
// console.log(totalNeeded);
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
// let radius = 3;
//  * Calculate the circumference based on the radius, and log 
// let circumference = Math.PI * 2*radius;
// console.log("the Circumference Is" + circumference);
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
// let area = Math.PI * radius*radius;
// console.log("the area is " + " " + area);
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
// let celsius = 99;
// let celsiusInF = (celsius*9) /5 + 32;
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
// console.log(celsius + 'C is ' + celsiusInF + 'F');
//  * Now store a fahrenheit temperature into a variable.
// let fahrenheit = 34;
// let fahrenheitInC = ((fahrenheit - 32)*5)/9;
// console.log(fahrenheit + 'F is ' + " " + fahrenheitInC + " " + 'C');
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."


// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
// let aliceGrade = 99;
//  * Store Bob's grade on a test to a variable
// let bobsGrade = 65;
//  * Store Cam's grade on a test to a variable
// let camsGrade = 88;
//  * Find the average grade of all students
// let averageGrade = (aliceGrade + bobsGrade + camsGrade) /3;

//  * Store Dee's grade on a test to a variable
// let deeGrade = 75;
//  * Find the average grade of all students
// console.log ( (averageGrade + deeGrade) / 2);
//  * Print out if Dee's grade is higher than the class average


// ## Problem Six
// let numA = 123;
// console.log(numA % 8);

// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
// * a = 123
// * Output:
// * 3

// Hint:
// Use the remainder % operator.


// ## Problem Seven
// let x = 3;
//  let y = 2;
//  const Bob = 12;
//  let aliceAge = y * (Bob + x) - x; 
//  console.log(aliceAge);
//  27
// Alice's Age
// * x years from now Alice will be y times older than her brother Bob. Bob is 12 years old. How old is Alice?
// * Example 1
// * Input: 
// * x = 3
// * y = 2
// * bob = 12
// * Expected values: 
// * alice = 27
// const BobAge = 12
     
    // let alice = -1;
    // let x = 1;
    // let y = 3;
    // let bob = 12;
    // let aliceAge = (alice) + y * (bob + x); 
    // console.log(aliceAge)

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
// let numberOfCats = 20;
// let numberOfDogs = 60
// let totalNumber = numberOfCats + numberOfDogs;
// let percentageOfDog = ((numberOfDogs / totalNumber) * 100);
// console.log(" The percentage of dogs is " + percentageOfDog + " % ");
// let percentageOfCat = ((numberOfCats / totalNumber) * 100);
// console.log(" The percentage of cats is " + percentageOfCat + " % ");

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

// ## Problem Nine
//function leapyear(year)
//{
//return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
//}
//console.log(leapyear(2020));
//console.log(leapyear(3000));
//console.log(leapyear(1700));
//console.log(leapyear(1800));
//console.log(leapyear(1900));
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
this  print 10


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
this  print jello because of string concatenation.
// c. 
//     ```js
//     let string =  'My favorite number is ';
//     let number = 42
//     let sentence = string + number
//     console.log(typeof(sentence))
//     ```

this  print ('My favnumis 42');
