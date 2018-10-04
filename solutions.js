//1. Age Calculator:
let birthYear = 1980;
let futureYear = 3000;
let ageMax = futureYear - birthYear;
let ageMin = ageMax - 1;
console.log("I will be either "+ageMin+" or " +ageMax + " in "+ futureYear);

//2. Snack Supply Calculator:
let curAge = 38;
let maxAge = 999999999;
let snacksPerDay = 3;
let snackNumber = (maxAge - curAge) * snacksPerDay;
console.log("You will need " + snackNumber + " to last you until the age of " + maxAge);

//3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
let radius = 3;
let circumferenceResult = Math.PI * 2 * radius;
let areaOfCircle = Math.PI * radius * radius;
console.log("The circumference is " + circumferenceResult);
console.log("The area is "+ areaOfCircle);

//4. Temperature Converter:
//(0°C × 9/5) + 32 = 32°F
let tempInCelcius = 21;
let tempInFahrenheit = (tempInCelcius * 9/5) + 32;
console.log(tempInCelcius + "°C is " + tempInFahrenheit + " °F.");
tempInFahrenheit = 70;
tempInCelcius = (tempInFahrenheit - 35) * 5 / 9;
console.log(tempInFahrenheit + "°F is " + tempInCelcius + "°C.");

//5
//10

//6
//"jello"

//7
//string
