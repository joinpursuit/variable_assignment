
# Variable Exercises

1. Age Calculator:
* Store your birth year in a variable.
* Store a future year in a variable.
* Calculate your 2 possible ages for that year based on the stored values.
* For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
* Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

let a = 1989
let b = 2019
let c = b - a
console.log (" I will be age " + c + " in " + b )


2. Snack Supply Calculator:
* Store your current age in a variable.
* Store a maximum age in a variable.
* Store an estimated snack amount per day (as a number).
* Calculate how many snacks you would eat total, from your current age until the maximum age.
* Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

let currentAge = 28
let deadAge = 100
let snacksAmount = 2

console.log ("You will need " + (snacksAmount * 365) + (deadAge - currentAge) + "to last you until the age of " + deadAge)


+3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
* Use google: find how to get the number `PI` in JavaScript.
* Store a radius into a variable.
* Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
* Calculate the area based on the radius, and log "The area is `areaOfCircle`".

let radius = 3
let circumferenceResult = 2*Math.PI*((radius))
console.log(circumferenceResult)

let areaOfCircle = Math.PI*((radius)*(radius))
console.log(areaOfCircle)






4. Temperature Converter:
* Store a celsius temperature into a variable.
* Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
* Now store a fahrenheit temperature into a variable.
* Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C."

let tempC = 55
let tempF = (tempC * 1.8) + 32

console.log (tempC + " °C is " + tempF + " in °F ")


let tempF = 5512
let tempC = 5/9 * tempF/32


console.log (tempF + " °F is " + tempC + " in °C ")

### What will be logged:
5.
```js

let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3)

10

```

6.
```js
let str = 'jel'

str += 'lo'

console.log(str)
```
JELLO


7.
```js

let string =  'My favorite number is ';
let number = 42
let sentence = string + number
console.log(typeof(sentence))
```
STRING
