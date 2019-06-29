/*
Age Calculator:

Store your birth year in a variable.
Store a future year in a variable.
Calculate your 2 possible ages for that year based on the stored values.
For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
Log them to the screen like so: "I will be either ageMin or ageMax in futureYear", substituting the values.
*/
const myBirthYear = 1983;
let futureYear = 2037;

let maxAge = futureYear - myBirthYear;
let minAge = maxAge - 1;

console.log('\n I will be either ', minAge, ' or ', maxAge, ' in ', futureYear);



/*
Snack Supply Calculator:

Store your current age in a variable.
Store a maximum age in a variable.
Store an estimated snack amount per day (as a number).
Calculate how many snacks you would eat total, from your current age until the maximum age.
Log the result to the screen like this: "You will need snackNumber to last you until the age of maxAge".
*/
let currentAge = 36;
let maximumAge = 99;
let dailySnackAmount = 1.5;

let totalSnacks = (maximumAge - currentAge) * dailySnackAmount;

console.log('\n You will need ', totalSnacks, ' snacks to last you until the age of ', maximumAge);



/*
Calculate properties of a circle, using the definitions here.

Use google: find how to get the number PI in JavaScript.
Store a radius into a variable.
Calculate the circumference based on the radius, and log "The circumference is circumferenceResult".
Calculate the area based on the radius, and log "The area is areaOfCircle".
*/

let radius = 7;

let circumferenceResult = 2 * Math.PI * radius;
console.log('\n The circumference is ', circumferenceResult);

let areaOfCircle = Math.PI * Math.pow(radius, 2);
console.log('\n The area is ', areaOfCircle);




/*
Temperature Converter:

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "tempInCelcius°C is tempInFahrenheit°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "tempInFahrenheit°F is tempInCelcius°C."
*/

let tempInCelcius = 25;
let tempInFahrenheit = (tempInCelcius * 9 / 5) + 32;
console.log('\n', tempInCelcius, ' in celsius is ', tempInFahrenheit, ' in fahrenheit');

tempInFahrenheit = 73;
tempInCelcius = (tempInFahrenheit - 32) * 5 / 9;
console.log('\n', tempInFahrenheit, 'in fahrenheit is ', tempInCelcius, ' in celsius');





/*
What will be logged:
For this section write what you think will be logged as a comment next to console.log like so: console.log('Cat') //'Cat' before running the code. Then execute your file and compare with your prediction.

let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3)       ==> 10
let str = 'jel'
str += 'lo'
console.log(str)        ==> jello
let string =  'My favorite number is ';
let number = 42
let sentence = string + number
console.log(typeof(sentence)) ==> string
*/
