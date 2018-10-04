
# Variable Exercises

1. Age Calculator:
* Store your birth year in a variable.// let birthYear = 1987;
* Store a future year in a variable.// let futureYear = 2019;
* Calculate your 2 possible ages for that year based on the stored values.
* For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.// let ageMin = 31 let ageMax = 32
* Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.// "I will be either 31 or 32 in 2019//
let birthYear = 1987
let futureYear = 2019
let minAge = 31
let maxAge = futureYear - birthYear
let afterBday = maxAge
let beforeBday = maxAge - 1
console.log "I will be either" + minAge + "or" + maxAge + "in" + futureYear;

2. Snack Supply Calculator:
* Store your current age in a variable.
* Store a maximum age in a variable.
* Store an estimated snack amount per day (as a number).
* Calculate how many snacks you would eat total, from your current age until the maximum age.
* Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".//
let currentAge = 31
let maxAge = 35
let snackPerDay = 1
let daysInYear = 365
let snackNumber = maxAge - currentAge * snacksPerDay * daysInYear
console.log ("You will need" + snackNumber + "to last you until the age of" + maxAge + ".")


3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
* Use google: find how to get the number `PI` in JavaScript.
* Store a radius into a variable.
* Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
* Calculate the area based on the radius, and log "The area is `areaOfCircle`".
//
let diameter = 15
let radius = diameter/2
let pi = Math.PI;
let circumference = (2 * pi * radius)
let areaOfCircle = pi * radius ^ 2
console.log ("the area is" + " " + areaOfCircle)

4. Temperature Converter:
* Store a celsius temperature into a variable.
* Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
* Now store a fahrenheit temperature into a variable.
* Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C."
//
let tempInCelcius = 1
let tempInFahrenheit = tempInCelcius * 32 * (5/9)
console.log (tempInCelcius + " degrees celcius is " + tempInFahrenheit + " degrees in fahrenheit")
//
let tempInCelcius = 5
let tempInFahrenheit = tempInCelcius * 32 * (5/9)
console.log (tempInFahrenheit + " degrees in fahrenheit " + tempInCelcius + " degrees in celcius")




### What will be logged:
5.
```js

let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3)
//
10
```

6.
```js
let str = 'jel'

str += 'lo'

console.log(str)
//
Jello

```

7.
```js

let string =  'My favorite number is ';
let number = 42
let sentence = string + number
console.log(typeof(sentence))
//
string

```
