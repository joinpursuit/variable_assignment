
# Variable Exercises


## Problem One

Age Calculator:
 * Store your birth year in a variable.
 let mybirthyear = 1990;
 * Store a future year in a variable.
 let currentyear = 2019;
 * Calculate your 2 possible ages for that year based on the stored values.
 let myage = currentyear - mybirthyear;
console.log(myage);
let agemin = myage -1;
let agemax = myage+1;
 * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
 * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

let mybirthyear = 1990;
let currentyear = 2020;
let ageMin = currentyear - mybirthyear - 1
let ageMax = currentyear - mybirthyear;
console.log('My will be either ' + ageMin +" or my age is " + ageMax);

## Problem Two

Snack Supply Calculator:
 * Store your current age in a variable.
 * Store a maximum age in a variable.
 * Store an estimated snack amount per day (as a number).
 * Calculate how many snacks you would eat total, from your current age until the maximum age.
 * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

let myAge = 29
let maxAge = 75
let snackYear = 365 * (maxAge - myAge)
let snackNumber = 1 * snackYear
console.log(snackNumber)

## Problem Three

Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
 * Store a radius into a variable.
 * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
 * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
 * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

let radius = 3
let circumference =2*Math.PI * radius
console.log('Circumference Result '+ circumference)
console.log('Area of Circle ' + Math.PI *(radius * radius))

## Problem Four

Temperature Converter:
 * Store a celsius temperature into a variable.
 * Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
 * Now store a fahrenheit temperature into a variable.
 * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C."
 
let celsiusT = 23
let fahrenheitT = 74
let tempofFahrenheit = (9/5) *celsiusT + 32
let tempofCelsiusT = (5/9)*(fahrenheitT - 32)
console.log('Celsius of ' + celsiusT + '°C' + ' is Fahrenheit of '+ tempofFahrenheit +'°F')
console.log('Fahrenheit of ' + fahrenheitT + '°F' + ' is Celisius of '+ tempofCelsiusT +'°C')



## Problem Five

Grades Calculator:
 * Store Alices's grade on a test to a variable
 * Store Bob's grade on a test to a variable
 * Store Cam's grade on a test to a variable
 * Find the average grade of all students
 * Store Dee's grade on a test to a variable
 * Find the average grade of all students
 * Print out if Dee's grade is higher than the class average

let alicsG = 90;
let bobG = 74;
let camG = 45;
let average = (alicsG + bobG + camG) / 3;
console.log('class average is '+ average);
let deeG = 94;
deeG = 45;
var classG = [alicsG, bobG, camG, deeG];
console.log('new Avg is ' + (alicsG + bobG + camG + deeG) / 4);
console.log('hightest grade is ' + Math.max(alicsG, bobG, camG, deeG));
if (deeG > average){
    console.log("Dee's grade is higer than average")}
    else{
console.log("Dee's grade is NOT higer than ave class")
};

## Problem Six: Predict the output

For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

a. 
    ```js
    let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3)//10
    ```

b. 
    ```js
    let str = 'jel' 
    str += 'lo'
    console.log(str)//jello
    ```

c. 
    ```js
    let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    console.log(typeof(sentence))//string
    ```


