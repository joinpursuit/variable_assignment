
# Variable Exercises

1. Age Calculator:
* Store your birth year in a variable.
* Store a future year in a variable.
* Calculate your 2 possible ages for that year based on the stored values.
* For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
* Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

var birthyear = 1993;
var yearf = 2056;
let futureage = yearf - birthyear;

console.log("You will be " + (futureage - 1) + " or " + futureage + " in " + yearf);





2. Snack Supply Calculator:
* Store your current age in a variable.
* Store a maximum age in a variable.
* Store an estimated snack amount per day (as a number).
* Calculate how many snacks you would eat total, from your current age until the maximum age.
* Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

var myAge = 25;
var maxAge = 50;
let diff = maxAge - myAge;
let estSnack = 5;
let total = diff * estSnack * 365;

console.log("You will need " + total + " to last you until you're " + maxAge + " of age.");




3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
* Use google: find how to get the number `PI` in JavaScript.
* Store a radius into a variable.
* Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`". circumference =2pi*radius
* Calculate the area based on the radius, and log "The area is `areaOfCircle`". area=pi*r^2

let radius = 13;
let circumferenceResult = 2 * Math.PI * radius;
let areaOfCircle = Math.PI * Math.pow(radius, 2);
console.log("The circumference is " + circumferenceResult);
console.log("The area is " + areaOfCircle);

4. Temperature Converter:
* Store a celsius temperature into a variable.
* Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
* Now store a fahrenheit temperature into a variable.
* Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C."

var celsius = 21;
var fahrenheit = (celsius * 1.8) + 32;

console.log("°" + celsius + " is °"+ fahrenheit);


var fahrenheit = 78;
var celsius = (fahrenheit - 32) * .556;

console.log("°" + fahrenheit + " fahrenheit " + " is " + "°" + celsius + "celsius");



### What will be logged:
5.
```js

let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3)
```
// the summation of num1 and num2 will be logged, which is 7

6.
```js
let str = 'jel'

str += 'lo'

console.log(str)
```
// jello will be logged
7.
```js

let string =  'My favorite number is ';
let number = 42
let sentence = string + number
console.log(typeof(sentence))
```
//the data type of string is logged
