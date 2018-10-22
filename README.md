
# Variable Exercises

1. Age Calculator:
* Store your birth year in a variable.
* Store a future year in a variable.
* Calculate your 2 possible ages for that year based on the stored values.
* For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
* Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

```js

let birthYear = 1987
let futureYear = 2050
console.log(`I will be either ${futureYear - birthYear} or ${futureYear - birthYear + 1} in ${futureYear}.`)

```

2. Snack Supply Calculator:
* Store your current age in a variable.
* Store a maximum age in a variable.
* Store an estimated snack amount per day (as a number).
* Calculate how many snacks you would eat total, from your current age until the maximum age.
* Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

```js

let myAge = 31
let maxAge = 40
let snacksPerDay = 2

console.log(`You will need ${snacksPerDay * 365 * (maxAge - myAge)} snacks to last you until the age of  ${maxAge}.`)

```

3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
* Use google: find how to get the number `PI` in JavaScript.
* Store a radius into a variable.
* Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
* Calculate the area based on the radius, and log "The area is `areaOfCircle`".

```js

let rad = 3

let circumferenceResult = rad * 2 * Math.PI
console.log(`The circumference is ${circumferenceResult}.`)

let areaOfCircle = Math.PI * rad * rad
console.log(`The area is ${areaOfCircle}.`)


```

4. Temperature Converter:
* Store a celsius temperature into a variable.
* Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
* Now store a fahrenheit temperature into a variable.
* Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C."

```js

let currentCelsius = 30
let currentFahrenheit = 92

let tempInCelsius =  (currentFahrenheit - 32) / 1.8
let tempInFahrenheit = (currentCelsius * 1.8) + 32

console.log(`${tempInCelsius}C is ${currentFahrenheit}F.`)
console.log(`${tempInFahrenheit}F is ${currentCelsius}C.`)

```

### What will be logged:
5.

ANSWER: 10


```js

let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3)

```

6.

ANSWER: 'jello'

```js
let str = 'jel'

str += 'lo'

console.log(str)
```

7.

ANSWER: 'string'

```js

let string =  'My favorite number is ';
let number = 42
let sentence = string + number
console.log(typeof(sentence))

```
