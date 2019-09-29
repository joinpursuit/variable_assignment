// Variable Exercises
// Problem One

let birthYear = 1990;
let futureBirthYear = 2090;
let ageMax = futureBirthYear - birthYear
let ageMin = ageMax - 1
console.log("I will be either " + ageMin + " or " + ageMax + " in " + futureBirthYear);

// Problem Two

let currentAge = 28;
let maxAge = 30;
let daysInYear = 365; 
let snackPerDay = 3;
let snackPerYear = (daysInYear*snackPerDay)*(maxAge-currentAge)
console.log("You will need " + snackPerYear + " to last you until the age of " + maxAge)

// Problem 3

let radius = 4;
let diameter = (2) * (radius);
let circumferenceResults = Math.PI * diameter;
let areaOfCirlce = Math.PI * (radius * radius) ;
console.log("The circumference is " + circumferenceResults + " .");
console.log("The area is " + areaOfCirlce);

// Problem 4

let tempInCelcius = 37.72;
let fahrenheit = (tempInCelcius * 9/5) + 32;
console.log(tempInCelcius + "°C is " + fahrenheit + "°F.");

let tempInFahrenheit = 99.9;
let celcius = (tempInFahrenheit - 32) * 5/9;
console.log(tempInFahrenheit + "°F is " + celcius + "°C. ");

// Problem 5
let alicesGrade = 65;
let bobGrade = 77;
let camGrade = 90;
let classAverage = (alicesGrade + bobGrade + camGrade)/3;
console.log(classAverage);
let deeGrade = 99;
let newClassAverage = (alicesGrade + bobGrade + camGrade + deeGrade)/4;
if(deeGrade>newClassAverage){console.log("Dee has the highest grade in the whole class")} else{console.log("Dee did not have the highest grades in the class")}


// Problem 6
// Predition num3 = 10

let num1 = 2;
let num2 = 5
let num3 = num1 * num2
console.log(num3)

//Predtion str = 'jello'
let str = 'jel' 
str += 'lo'
console.log(str)

// Prediction (typeof(setence)) = string

let string =  'My favorite number is ';
let number = 42
let sentence = string + number
console.log(typeof(sentence))


