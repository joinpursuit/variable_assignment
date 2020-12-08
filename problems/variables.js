// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
    //var birthYear = 1999;
//  * Store a future year in a variable.
    //var futureYear = 2023;
//  * Calculate your 2 possible ages for that year based on the stored values.
    //var ageMax = futureYear - birthYear;
    //var ageMin = futureYear - birthYear -1;
//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.

//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
    //console.log('I will be either ' + (ageMin) + ' or ' + (ageMax) + ' in ' + futureYear);    

// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
    //var age = 20;
//  * Store a maximum age in a constant variable.
    //var maxAge = 30;
//  * Store an estimated snack amount per day (as a number).
    //var snackPerDay = 8;
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
    //var totalSnacks = (snackPerDay * 365) * (maxAge - age);
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
    //console.log (' You will need ' + (totalSnacks) + ' snacks ' + ' to last you until the age of ' + (maxAge));
// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
    //var radius = 6;
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
    //var circumferenceResult = Math.PI * 2*radius;
    //console.log("The circumference is " + circumferenceResult);
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
    //var areaOfCircle = Math.PI * radius*radius;
    //console.log(' The area is ' + (areaOfCircle));
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
    //var tempInCelsius = 56;
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
    //var tempInFahrenheit = (tempInCelsius*9)/5 + 32
    //console.log(tempInCelsius + '°C is ' + tempInFahrenheit + '°F');
//  * Now store a fahrenheit temperature into a variable.
    //var fahrenheit = 30;
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."
    //var fahrenheitConverter = ((fahrenheit - 32)*5)/9;
    //console.log(fahrenheit + ' °F is ' + fahrenheitConverter + '°C')


// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
    //var aliceTest = 70;
//  * Store Bob's grade on a test to a variable
    //var bobTest = 65;
//  * Store Cam's grade on a test to a variable
    //var camTest = 90;
//  * Find the average grade of all students
    //var average = (aliceTest + bobTest + camTest)/3;
    //console.log(' The average of these three students is ' + average);
//  * Store Dee's grade on a test to a variable
    //var deeTest = 99;
//  * Find the average grade of all students
    //var totalAverage = (aliceTest + bobTest + camTest + deeTest)/4;
    //console.log(' The average of these four students is ' + totalAverage);
//  * Print out if Dee's grade is higher than the class average
    //console.log(' Dee test score was ' + deeTest + ' and the class average was ' + totalAverage + ' which means that dee testscore was higher than the class average ');
    //console.log( deeTest > totalAverage);
// ## Problem Six

// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
// * a = 123
// * Output:
// * 3
    //var num = 123;
   // console.log(num % 10);
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
    // var x = 3;
    //var y = 2;
    //bobAge = 12;
    //aliceAge = (bobAge * y) + x;
    //console.log(' In ' + x + ' years from now Alice will be '  + aliceAge + ' years old.');
    

// * Example 2
// * Input: 
// * x = 1
// * y = 3
// * bob = 12
// * Expected values: 
// * alice = 38
    //var x = 1;
    //var y = 3;
    //var z = -x;
    //bobAge = 12;
    //aliceAge = (z) + y * (bobAge + x);
    //console.log(' In ' + x + ' year from now Alice will be '  + aliceAge + ' years old.');

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
    var numberOfCats = 20;
    var numberOfDogs = 60;
    var totalAnimals = 80;
    var percentageDogs = (numberOfDogs / totalAnimals) * 100;
    var percentageCats = (numberOfCats / totalAnimals) * 100;
    console.log(percentageCats + '%' + ' of the daycare animals are cats. ');
    console.log(percentageDogs + '%' + ' of the daycare animals are dogs. ');

// ## Problem Nine

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.  
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.
    //function leapyear(year)
    //{
    //return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    //}
    //console.log(leapyear(2022));
    //console.log(leapyear(2030));
    //console.log(leapyear(2056));
    //console.log(leapyear(2009));
    //console.log(leapyear(2100));

// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
//     ```js
//     let num1 = 2
//     let num2 = 5
//     let num3 = num1 * num2
//     console.log(num3) This would print 10 beacuse of multiplcation.
//     ```

// b. 
//     ```js
//     let str = 'jel' 
//     str += 'lo'
//     console.log(str) This would print out the string 'Jello' because of string concatenation.
//     ```

// c. 
//     ```js
//     let string =  'My favorite number is ';
//     let number = 42
//     let sentence = string + number
//     console.log(typeof(sentence)) This would print out 'My favorite number is' "42".
//     ```


