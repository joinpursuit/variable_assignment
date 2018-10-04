
# Variable Exercises

1. Age Calculator:
* Store your birth year in a variable.
* Store a future year in a variable.
* Calculate your 2 possible ages for that year based on the stored values.
console.log(" I will be " + ageMin);
* For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
* Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

let myBirthYear = 1993
let futureYear = 2020
let ageMax = futureYear - myBirthYear
let ageMin = futureYear - myBirthYear - 1
  console.log("I will be either " + ageMin + " or " + ageMax + " in " + futureYear);


2. Snack Supply Calculator:
* Store your current age in a variable.
* Store a maximum age in a variable.
* Store an estimated snack amount per day (as a number).
* Calculate how many snacks you would eat total, from your current age until the maximum age.
* Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

let currentAge = 25
let MaxAge = 26
let snackNumber = 2
let totalSnacks = (snackNumber * 365) * (maxAge - currentAge)
console.log( "You will need " + totalSnacks + "snacks to last you until the age of " + maxAge)



3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
* Use google: find how to get the number `PI` in JavaScript.
* Store a radius into a variable.
* Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
* Calculate the area based on the radius, and log "The area is `areaOfCircle`".

let pi = Math.PI
let radius = 10
let circumferenceResult = (pi * 2) * radius
console.log( "The circumference is " + circumferenceResult)
let areaOfCircle = pi * radius^2
console.log("The area is " +areaOfCircle)


4. Temperature Converter:
* Store a celsius temperature into a variable.
* Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
* Now store a fahrenheit temperature into a variable.
* Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C."

let celsius = 1
let fahrenheit = (celsius * .5556) + 32
console.log (celsius + " °C is " + fahrenheit + " °F.")

let fahrenheit = 56;
let celsius = (fahrenheit - 32) * .5556;
console.log(fahrenheit + " °F is " + celsius + " °C.");

### What will be logged:
5.
```js

let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3)
// it will log 10

```

6.
```js
let str = 'jel'

str += 'lo'

console.log(str)
// it will log jello
```

7.
```js

let string =  'My favorite number is ';
let number = 42
let sentence = string + number
console.log(typeof(sentence))

// it will log: My favorite number is 42
```
