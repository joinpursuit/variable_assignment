const birthYear = 1986;
const futureYear = 2026;
const ageMin = futureYear - birthYear - 1;
const ageMax = futureYear - birthYear;
console.log("I will either be " + ageMin + " or " + ageMax + " depending if it's august 5th " + futureYear );

let currentAge = 32;
let maxAge = 35;
let snackEst = 1;
let snacks = (snackEst * 365) *  (maxAge - currentAge);
console.log('I will need ' + snacks + ' to last until' + maxAge);

let raduis = 4;
let circle = 2 * Math.PI * raduis;
console.log("Circumfrence is equal to " + circle);

let tempInCel = 50;
let tempInFar = tempInCel * 1.8 + 32;
console.log(tempInCel + " degress celcius is " + tempInFar + " degrees farenheight");

tempInFar = 100;
tempInCel = tempInFar * 1.8 - 32;
console.log(tempInFar + " degress farenheight is " + tempInCel + " degrees celcius");


let num1 = 2;
let num2 = 5;
let num3 = num1 * num2;
console.log(num3)// 10

let str = "jel";
str += "lo";
console.log(str) // jello

let string = "My favorite number is "
let number = 42;
let sentence = string + number;
console.log(typeof(sentence)) // my favorite number is 42
