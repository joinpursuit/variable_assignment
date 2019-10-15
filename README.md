
# Variable Exercises


## Problem One

Age Calculator:
 * Store your birth year in a variable.
 * Store a future year in a variable.
 * Calculate your 2 possible ages for that year based on the stored values.
 * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
 * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
let birYr = 1989
let futrYr = 2025
let futrAge = futrYr - birYr 
console.log(futrAge + " ageMax" + " in" + futrYr)
console.log(futrAge - 1 + " ageMin" + " in" + futrYr)
## Problem Two

Snack Supply Calculator:
 * Store your current age in a variable.
 * Store a maximum age in a variable.
 * Store an estimated snack amount per day (as a number).
 * Calculate how many snacks you would eat total, from your current age until the maximum age.
 * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
let currAge = 30
let maxAge = 40
let snksPrDay = 3
let snackNumber = maxAge - currAge * snksPrDay
console.log("You will need " + snackNumber + " to last you until the age of " + maxAge)
## Problem Three

Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
 * Store a radius into a variable.
 * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
 * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
 * Hint: https://www.w3schools.com/jsref/jsref_pi.asp
let radius = 180
let circumferenceResult = (2 * Math.pi) * radius
console.log("The circumference is " + circumferenceResult)
let areaOfCircle = Math.pi * (radius^2)
console.log("The area is " + areaOfCircle)
## Problem Four
let tempInCelcius = 15
let tempInFahrenheit = tempInCelcius * 1.8 + 32
console.log(" `tempInCelcius` is `tempInFahrenheit` ")
let tempInFahrenheit = 68
let tempInCelcius = (tempInFahrenheit - 32) * 5/9
console.log(" `tempInFahrenheit` is `tempInCelcius` ")
Temperature Converter:
 * Store a celsius temperature into a variable.
 * Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
 * Now store a fahrenheit temperature into a variable.
 * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C."


## Problem Five

Grades Calculator:
 * Store Alices's grade on a test to a variable
 * Store Bob's grade on a test to a variable
 * Store Cam's grade on a test to a variable
 * Find the average grade of all students
 * Store Dee's grade on a test to a variable
 * Find the average grade of all students
 * Print out if Dee's grade is higher than the class average
let aGrade = 72
let bGrade = 65
let cGrade = 98
let avg = (aGrade + bGrade + cGrade) / 3
let dGrade = 92
let avg2 = (aGrade + bGrade + cGrade + dGrade) / 4
console.log(dGrade)
## Problem Six: Predict the output

For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

a. 
    ```js
    let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3) 10
    ```

b. 
    ```js
    let str = 'jel' 
    str += 'lo'
    console.log(str) 'jello'
    ```

c. 
    ```js
    let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    console.log(typeof(sentence))string
    ```


