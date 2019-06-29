let birthYear = 1900;
let futureYear = 2030;
let ageMin = (futureYear - birthYear) - 1;
let ageMax = (futureYear - birthYear) + 1;
console.log(futureYear - birthYear);
console.log("I will be either " + ageMin + " age or " + ageMax);

/////////////////////////////////////////////////////////////////////////////////////

let currentAge = 100;
let maxAge = 200;
let snackPerDay = 2;
let total = (maxAge - currentAge) * snackPerDay;
console.log("You will need " + total + " to last you until the age of " + maxAge);

/////////////////////////////////////////////////////////////////////////////////////

let pi = Math.PI;
let radius = 25;
let circumferenceResult = 2 * pi * radius;
let areaOfCircle = pi * ((radius) ^ 2);
console.log("The circumferenc is " + circumferenceResult);
console.log("The area is " + areaOfCircle);

/////////////////////////////////////////////////////////////////////////////////////

let celcius = 5;
let convertToCelcius = (5 * 9/5) + 32;
console.log(convertToCelcius);
let faranheit = convertToCelcius;
console.log(celcius + " degrees celcius is " + faranheit + "degrees in faranheit");
console.log(faranheit + "degrees faranheit is " + celcius + "degrees in celcius");

/////////////////////////////////////////////////////////////////////////////////////

let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3) //10 will be logged

/////////////////////////////////////////////////////////////////////////////////////

let str = 'jel'
str += 'lo'
console.log(str) //jello will be logged
