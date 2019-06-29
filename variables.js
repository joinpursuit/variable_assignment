let birthYear = 1986;
let futureYear = 2020;
futureYear -= birthYear;

console.log("I'll be " + futureYear + ' or ' + (futureYear - 1) + ' in 2020');

let currentAge = 32;
let currentYear = 2019;
let maxAge = currentYear - birthYear;
let snackAmountPerDay = 2;
let snackNumber = snackAmountPerDay * (maxAge - currentAge) * 365;

console.log('I will need ' + snackNumber + ' to last you until the age of ' + maxAge);

console.log(Math.PI);
let diameter = 10;
let radius = diameter / 2;
let circumference = Math.PI * diameter;

console.log('The circumference is ' + circumference);
let area = Math.PI * Math.pow(radius, 2);
console.log('The area is ' + area);

let celsius = 30;
let fahrenheit = celsius * 9 / 5 + 32;
console.log(fahrenheit + '°F is ' + celsius + '°C');

/*
```js
let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3)
```
*/

console.log('10');

let num1 = 2;
let num2 = 5;
let num3 = num1 * num2;
console.log(num3);

/*
```js
let str = 'jel'
str += 'lo'
console.log(str)
```
*/
console.log('jello');

let str = 'jel';
str += 'lo';
console.log(str);

/*
```js
let string =  'My favorite number is ';
let number = 42
let sentence = string + number
console.log(typeof(sentence))
```
*/

console.log('String');

let string =  'My favorite number is ';
let number = 42;
let sentence = string + number;
console.log(typeof (sentence));
