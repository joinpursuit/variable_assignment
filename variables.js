/*
1. Age Calculator:
    * Store your birth year in a variable.
    * Store a future year in a variable.
    * Calculate your 2 possible ages for that year based on the stored values.
    * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
    * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
    */
    //``` js
let birthYear;
  birthYear = 1996;

let futureYear;
  futureYear= 2026;

ageMin = futureYear - birthYear - 1;
ageMax = futureYear - birthYear;

  console.log("I will either be " + ageMin +" or " +ageMax +" in "+futureYear);
//```

/*
2. Snack Supply Calculator:
    * Store your current age in a variable.
    * Store a maximum age in a variable.
    * Store an estimated snack amount per day (as a number).
    * Calculate how many snacks you would eat total, from your current age until the maximum age.
    * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
    */

let age;
  age = 23;
let ageMax2;
  ageMax2 = 26;
let snackPerDay;
  snackPerDay = 2;
let snackPerYear;
snackPerYear = (ageMax2 - age)*365 * snackPerDay

console.log("You will need "+ snackPerYear +" to last you until the age of "+ ageMax2);

/*
3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
   * Use google: find how to get the number `PI` in JavaScript.
   * Store a radius into a variable.
   * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
   * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
*/

const radius = 10;
pi = Math.PI;
let circumference;
  circumference = pi * (2 * radius);

  console.log("The circumference is "+ circumference);

  let area;
  area = pi * radius * radius;
  console.log("the area is "+ area);
  // or math.pow(radius, 2)

  /*
4. Temperature Converter:
    * Store a celsius temperature into a variable.
    * Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
    * Now store a fahrenheit temperature into a variable.
    * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C."
*/


let cTemp;
  cTemp = 0

  let fahrenheit;
  fahrenheit = (cTemp * (9/5)) + 32;

console.log("Temp in C is " + cTemp + " in fahrenheit is " + fahrenheit)


let fTemp = 212;
celsius = (fTemp - 32) * (5/9);

console.log("Temp in F is " + fTemp + " in celsius is "+ celsius);

/*
## Problem Five

Grades Calculator:
 * Store Alices's grade on a test to a variable
 * Store Bob's grade on a test to a variable
 * Store Cam's grade on a test to a variable
 * Find the average grade of all students
 * Store Dee's grade on a test to a variable
 * Find the average grade of all students
 * Print out if Dee's grade is higher than the class average
 * */
const aliceGrade = 78
const bobGrade = 88
const camGrade = 92
const deeGrade = 64
avgGrade = (aliceGrade + bobGrade + camGrade + deeGrade)/4
if (deeGrade > avgGrade){
  console.log("Dee's grade is higher than the class avg");
}
else {
  console.log("Dee's grade is not higher than the class avg.");
  
}
  /*
  problem 6: 
## Problem Six: Predict the output

For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.


/*
/*
A.
    ```js
    let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3)
    ```
*/
let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    //console.log(num3)
console.log(num3) // will log 10.


/*
B.
    ```js
    let str = 'jel'
    str += 'lo'
    console.log(str)
    ```
    */
   let str = 'jel'
   str += 'lo'
   //console.log(str)
console.log(str) //will log "jello"

/*

C.
    ```js
    let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    console.log(typeof(sentence))
    ```
    */
   let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
   // console.log(typeof(sentence))
console.log(sentence) //will log "My favorite number is 42"
