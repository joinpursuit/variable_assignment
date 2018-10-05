
# Variable Exercises

1. Age Calculator:
let bYear = 1994
let fYear = 2026
let Month = ((fYear - bYear) - 1)
let currentAge = (fYear - bYear)
<!-- console.log(Month + " "+ "or" + " " + currentAge) -->

2. Snack Supply Calculator:
let currentAge = 24
let MaxAge = 32
let SnackAmount = 5
let sum = (((MaxAge - currentAge) * SnackAmount) * 365 )
console.log(sum)

3. Calculate properties of a circle, using the definitions
let radius = 5
let pi = (2 * 3.14 * radius)
let circumference = pi
let area = 3.14*radius^2
console.log(area)
console.log(circumference)

4. Temperature Converter:
let celsuis = 12
let CtoF = (celsuis * 9 / 5 + 32)
console.log(celsuis + " " + "is" + " " + CtoF)
let FtoC = (((CtoF - 32) * 5 ) / 9 )
console.log(FtoC)

### What will be logged:
5.
```js

let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3) === 10
```

6.
```js
let str = 'jel'

str += 'lo'

console.log(str) === jello
```

7.
```js

let string =  'My favorite number is ';
let number = 42
let sentence = string + number
console.log(typeof(sentence)) === string
```
