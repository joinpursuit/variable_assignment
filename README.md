
# Variable Exercises

<!-- 1. Age Calculator:
* Store your birth year in a variable.
* Store a future year in a variable.
* Calculate your 2 possible ages for that year based on the stored values.
* For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
* Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values. -->

1.

let birthYear = 1993;
let futureYear = 2020;
let ageMax = futureYear - birthYear;
let ageMin = ageMax -1;
console.log('I will be either ' + ageMax + ' or ' + ageMin);



<!-- 2. Snack Supply Calculator:
* Store your current age in a variable.
* Store a maximum age in a variable.
* Store an estimated snack amount per day (as a number).
* Calculate how many snacks you would eat total, from your current age until the maximum age.
* Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`". -->

2.

let age = 25;
let maxAge = 100;
let perDay = 3;
let totalNeeded = (perDay * 365) * (maxAge - age);
console.log('You will need ' + totalNeeded + ' boxes of pasta to last you until you are ' + maxAge);





<!-- 3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
* Use google: find how to get the number `PI` in JavaScript.
* Store a radius into a variable.
* Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
* Calculate the area based on the radius, and log "The area is `areaOfCircle`". -->

3.

let radius = 6;
let circumference = Math.PI * 2 * radius;
let area = Math.PI * Math.pow(radius,2);
console.log('The circumference is ' + circumference)
console.log('The area is ' + area)

<!-- 4. Temperature Converter:
* Store a celsius temperature into a variable.
* Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
* Now store a fahrenheit temperature into a variable.
* Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C." -->

4.

let celsius = 100;
let celToFah = celsius * (9/5) + 32
let fahrenheit = celToFah;
let fahToCel = fahrenheit -32 * (5/9)
console.log(celsius + ' °C ' + 'is ' + celToFah + ' °F')
console.log(fahrenheit + ' °F ' + 'is ' + celsius + ' °C' )


### What will be logged:
<!-- 5.
```js

let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3) -->
<!-- ``` -->

5.

OUTPUT = 10

<!-- 6.
<!-- ```js
let str = 'jel'

str += 'lo'

console.log(str)
``` -->

6.

OUTPUT = jello



<!-- 7.
<!-- ```js

let string =  'My favorite number is ';
let number = 42
let sentence = string + number
console.log(typeof(sentence))
``` -->

7.

OUTPUT = string 
