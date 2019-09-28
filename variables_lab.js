// problem 1
let birthYear = 1993;
let futureYear = 2022;
let ageMax = futureYear - birthYear;
let ageMin = ageMax - 1;
console.log("I will be either " + ageMin + " or " + ageMax + " in " + futureYear + ".");

// problem 2
let crrAge = 26;
let maxAge = 65;
let snackDay = 3;
let snackYear = snackDay * 365
let totalSnack = snackYear * (maxAge - crrAge);
console.log("You will need " + totalSnack + " snacks to last you until the age of " + maxAge + ".");

// problem 3
let radius = 6
let diameter = radius * 2
const pI = 3.141592
let circumference = pI * diameter
console.log("The circumference is " + circumference + ".");

// problem 4
let c = 0
let cInF = (c * 1.8) + 32
let f = 32
let fInC = (f - 32) / 1.8
let tempInFahrenheit = cInF
let tempInCelsius = fInC
console.log(tempInCelsius + "°C is " + tempInFahrenheit + "°F" + ".")
console.log(tempInFahrenheit + "°F is " + tempInCelsius + "°C" + ".")

// problem 5
let Alice = 73
let Bob = 84
let Cam = 92
// let avg = (Alice + Bob + Cam) / 3
// console.log(avg)
let Dee = 69
let Avg = (Alice + Bob + Cam + Dee) / 4
console.log(Avg)
