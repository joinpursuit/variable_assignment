// ## Problem One

// Age Calculator: 
console.log ('Problem One: Age Calculator');
//  * Store your birth year in a constant variable.
const birthYear= 1992;
//  * Store a future year in a variable.
let futureYear= 2022;
//  * Calculate your 2 possible ages for that year based on the stored values.

const ageMin = futureYear - birthYear;
const ageMax = ageMin + 1;


console.log ("I will be either "+ageMin+" or "+ageMax+ "");


//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.


// ## Problem Two

// Snack Supply Calculator:
console.log(" ");
console.log("Problem Two: Snack Supply Calculator");

//  * Store your current age in a variable.
let age = 28;
//  * Store a maximum age in a constant variable.
const maxAge = 50;
//  * Store an estimated snack amount per day (as a number).
let snacks = 2;
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
let days = 365; 
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
let snackNumber = ((maxAge-age) * (days) * (snacks));
console.log ("You will need " + snackNumber +" snacks to last you until the age of "+maxAge+".");

// ## Problem Three
console.log (" ");
console.log ("Problem Three:Calculate properties of a Circle");
// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
let radius=6;
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
let circumferenceResult= Math.PI * (2 * radius);

console.log("The cicumference is "+ circumferenceResult+ ".");
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
let areaOfCircle= (2 * Math.PI) * (radius**2);
console.log("The area is "+ areaOfCircle);
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

// ## Problem Four

// Temperature Converter:
console.log(" ");
console.log("Problem Four: Temperature Converter");
//  * Store a celsius temperature into a variable.
// let tempInCelsius=60;
// let tempInFahrenheit=tempInCelsius * (9/5)+ 32;
// console.log (tempInCelsius,tempInFahrenheit)

let tempInFahrenheit=140;
let tempInCelsius=(tempInFahrenheit-32) * 5/9;
console.log (tempInFahrenheit+ " F",tempInCelsius+" C");

//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
//  * Now store a fahrenheit temperature into a variable.
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."


// ## Problem Five
console.log(' ');
console.log ("Problem Five: Grades Calculator");
// Grades Calculator:
//  * Store Alices's grade on a test to a variable
let aliceGrade= 70;
console.log("Alice's Test Grade: 70")
//  * Store Bob's grade on a test to a variable
console.log("Bob's Test Grade: 78");
let bobGrade= 78;
//  * Store Cam's grade on a test to a variable
console.log ("Cam's Test Grade: 96");
let camGrade= 96;
//  * Find the average grade of all students
let average= (aliceGrade + bobGrade + camGrade)/3;
console.log("Student Average: "+ average);
//  * Store Dee's grade on a test to a variable
console.log("Dee's Test Grade: 84");
let deeGrade= 84;
//  * Find the average grade of all students
let averageGrade=(aliceGrade+bobGrade+camGrade+ deeGrade)/4;
console.log ("Class Average: "+ averageGrade);
//  * Print out if Dee's grade is higher than the class average

// ## Problem Six
console.log(" ");
console.log ("Problem Six: Find the last number?");
// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
// * a = 123
// * Output:
// * 3

// Hint:
// Use the remainder % operator.

let Input= 15;
let Output=(Input % 10);

console.log (Input, Output);
console.log ("Remainder: "+ Output);


// ## Problem Seven
console.log("Problem Seven: Alice's Age");
// Alice's Age
// * x years from now Alice will be y times older than her brother Bob. Bob is 12 years old. How old is Alice?
 let valueX=3;
 let valueY=2;
 const ageBob= (12);
 let ageAlice= ((ageBob * valueY)+(valueX * valueY)-valueX);

 console.log (ageAlice);

//Example 1
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
console.log(" ")
console.log("Problem Eight: Cat and Dog Percentages");

// * Cat and Dog Percentages
// * An animal daycare consists of `numberOfCats` cats and `numberOfDogs` dogs.
let numberOfCats =80
let numberOfDogs =50

let Total= (numberOfCats + numberOfDogs);
let percentCat= Math.round((numberOfCats / Total)* 100);
let percentDog= Math.round((numberOfDogs / Total)* 100);
console.log (percentCat + (" %"));
console.log (percentDog + (" %"));


// * Print the percentage of dogs in the daycare followed by the percentage of cats in the class. The percentage should be printed rounded down to the nearest integer. For example 33.333333333333 will be printed as 33.
// * Example 
// * Input
// * numberOfCats = 20  
// * numberOfDogs = 60
// * Output:
// * 25% of the daycare animals are cats
// * 75% of the daycare animals are dogs

// ## Problem Nine
console.log("Problem Nine: Leap Year Calculator")

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.  
let leapYear= 366
let Feb= 29
let 
let
let
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.


// ## Problem Ten: Predict the output
console.log (" ")
console.log ("Problem Ten: Predict the Output")

// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a.
//
    
    let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3)  // console.log(num3)=10


// b. 
//    
    let str = 'jel' 
    str += 'lo'
    console.log(str) //console.log ('jello')
    

// c. 
//     
    let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    console.log(typeof(sentence)) // console.log('String') 
//     


