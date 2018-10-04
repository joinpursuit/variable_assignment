
# Variable Exercises
Jonathan Erquinigo

1. Age Calculator:
* Store your birth year in a variable.  myBirthYear = 1991;

* Store a future year in a variable. futureYear = 2019;

* Calculate your 2 possible ages for that year based on the stored values.
* For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
* Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

let myBirthYear = 1991;
let futureYear = 2020;
let ageMax = futureYear - myBirthYear;
let ageMin = ageMax - 1;
console.log("i will be either " + ageMin + " or " + ageMax + " in " + futureYear)

2. Snack Supply Calculator:
* Store your current age in a variable. currAge = 26
* Store a maximum age in a variable. maxAge = 99
* Store an estimated snack amount per day (as a number). snackAmt = 2
* Calculate how many snacks you would eat total, from your current age until the maximum age.
* Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

let currAge = 26;
let maxAge = 99;
let snackAmt = 2;

let totalSnacks = (maxAge - currAge) * snackAmt
console.log("you will need " + totalSnacks + " snacks" +  " to last you until the age of " + maxAge)


3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
* Use google: find how to get the number `PI` in JavaScript.
* Store a radius into a variable.
* Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
* Calculate the area based on the radius, and log "The area is `areaOfCircle`".

let pi = Math.PI;
let diameter = 20
let radius = diameter/2
let Circumference = 2 * pi * radius
let areaOfCircle = pi * radius ^ 2

console.log("the circumference is " + Circumference)


console.log("The area is " + areaOfCircle)

4. Temperature Converter:
* Store a celsius temperature into a variable. celtemp = 25
* Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
* Now store a fahrenheit temperature into a variable.
* Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C."

let tempInCelcius = 25;
let tempInFahrenheit = tempInCelcius * 1.8 + 32;
let storedFahrenheit = 80;
let convertedFahrenheit = (storedFahrenheit - 32) * 5/9;


console.log(tempInCelcius + "C is " + tempInFahrenheit + "F")
console.log(storedFahrenheit + "F is " + convertedFahrenheit + "C");


### What will be logged:
5.
```js

let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3)

it will print out 10
```

6.
```js
let str = 'jel'

str += 'lo'

console.log(str)

it will print out jello
```

7.
```js

let string =  'My favorite number is ';
let number = 42
let sentence = string + number
console.log(typeof(sentence))
```the output will be string
