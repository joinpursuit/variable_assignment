//1. Age Calculator:
// Store your birth year  &  future year in a variable.
const birthYear = 1991;
let futureYear = 2020;

let ageMin = birthYear - futureYear - 1;
let ageMax = birthYear - futureYear;

  //if(ageMax === 29 || ageMin === 28){
    console.log("I will be either " + ageMin + " or " + ageMax + " in " + futureYear);
//  }

//2. Snack Supply Calculator:
let myAge = 27;
let whateverAge = 29;
let snack4Day = 3;

let totalSnack = myAge - whateverAge * snack4Day;
console.log("You will need " + totalSnack + " to last you until the age of " + whateverAge);

//3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
let radius = 4;
let circumferenceResult = 2 * Math.PI * radius;
let areaOfCircle = circumferenceResult * 2;

console.log("The circumference is " + circumferenceResult);
console.log("The area is " + areaOfCircle);

//4. Temperature Converter:
let tempInCelciusFirst = 20;
let tempInFahrenheitFirst = tempInCelciusFirst * (9/5) + 32;
console.log(tempInCelciusFirst + " °C is " + tempInFahrenheitFirst + " °F");

let tempInFahrenheitSecond = 3;
let tempInCelciusSecond = tempInFahrenheitSecond - 32 * (5/9);
console.log(tempInFahrenheitSecond + " °F is " + tempInCelciusSecond + " °C.")
